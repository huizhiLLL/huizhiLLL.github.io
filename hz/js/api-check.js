/**
 * API连接状态检查工具
 */

/**
 * 获取可能的API基础URL列表
 * @returns {Array} API基础URL列表
 */
function getApiBaseUrls() {
    // 如果页面是通过文件协议打开的，返回默认本地地址
    if (window.location.protocol === 'file:') {
        return [
            'http://localhost:3000',
            'http://127.0.0.1:3000'
        ];
    }
    
    // 如果当前页面是通过localhost访问的，也包含本地地址
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return [
            window.location.origin,
            'http://localhost:3000',
            'http://127.0.0.1:3000'
        ];
    }
    
    // 否则主要使用当前域名
    return [
        window.location.origin,
        `http://localhost:${window.location.port || 3000}`,
        `http://127.0.0.1:${window.location.port || 3000}`
    ];
}

/**
 * 测试单个URL连接
 * @param {string} url - 要测试的URL
 * @returns {Promise} 测试结果Promise
 */
function testUrlConnection(url) {
    return fetch(`${url}/api/`, { method: 'GET', mode: 'cors' })
        .then(response => {
            if (response.ok) {
                return response.json().then(data => ({ url, success: true, data }));
            }
            throw new Error(`状态: ${response.status} ${response.statusText}`);
        })
        .catch(error => {
            // 处理网络错误
            if (error instanceof TypeError && error.message.includes('fetch')) {
                return { url, success: false, error: '网络连接失败' };
            }
            return { url, success: false, error: error.message };
        });
}

/**
 * 检查API连接状态
 */
function checkApiStatus() {
    const statusDiv = document.createElement('div');
    statusDiv.id = 'api-status';
    statusDiv.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px;
        border-radius: 4px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        font-size: 12px;
        max-width: 300px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(statusDiv);
    
    const API_BASE_URLS = getApiBaseUrls();
    
    // 检查API状态
    function updateStatus() {
        statusDiv.style.backgroundColor = '#fff3cd';
        statusDiv.style.color = '#856404';
        statusDiv.style.border = '1px solid #ffeaa7';
        statusDiv.innerHTML = `
            <strong>检查API连接...</strong><br>
            时间: ${new Date().toLocaleTimeString()}
        `;
        
        // 测试所有可能的URL
        const testPromises = API_BASE_URLS.map(url => testUrlConnection(url));
        
        Promise.all(testPromises)
            .then(results => {
                // 查找第一个成功的连接
                const successResult = results.find(result => result.success);
                
                if (successResult) {
                    statusDiv.style.backgroundColor = '#d4edda';
                    statusDiv.style.color = '#155724';
                    statusDiv.style.border = '1px solid #c3e6cb';
                    statusDiv.innerHTML = `
                        <strong>API连接正常</strong><br>
                        消息: ${successResult.data.message}<br>
                        地址: ${successResult.url}<br>
                        时间: ${new Date().toLocaleTimeString()}
                    `;
                } else {
                    // 所有连接都失败了
                    statusDiv.style.backgroundColor = '#f8d7da';
                    statusDiv.style.color = '#721c24';
                    statusDiv.style.border = '1px solid #f5c6cb';
                    statusDiv.innerHTML = `
                        <strong>API连接错误</strong><br>
                        尝试了 ${results.length} 个地址<br>
                        最后错误: ${results[results.length - 1].error}<br>
                        时间: ${new Date().toLocaleTimeString()}
                    `;
                }
            })
            .catch(error => {
                statusDiv.style.backgroundColor = '#f8d7da';
                statusDiv.style.color = '#721c24';
                statusDiv.style.border = '1px solid #f5c6cb';
                statusDiv.innerHTML = `
                    <strong>API连接错误</strong><br>
                    错误: ${error.message}<br>
                    时间: ${new Date().toLocaleTimeString()}
                `;
            });
    }
    
    // 显示初始状态
    statusDiv.style.backgroundColor = '#fff3cd';
    statusDiv.style.color = '#856404';
    statusDiv.style.border = '1px solid #ffeaa7';
    statusDiv.innerHTML = `
        <strong>准备检查API连接...</strong><br>
        将尝试 ${API_BASE_URLS.length} 个地址<br>
        时间: ${new Date().toLocaleTimeString()}
    `;
    
    // 初始检查
    setTimeout(updateStatus, 1000);
    
    // 每30秒检查一次
    setInterval(updateStatus, 30000);
}

// 页面加载完成后检查API状态
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkApiStatus);
} else {
    checkApiStatus();
}