// 用户端JavaScript功能

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
 * 尝试发送请求到多个API地址
 * @param {string} path - API路径
 * @param {Object} options - fetch选项
 * @returns {Promise} 第一个成功的响应Promise
 */
async function fetchWithFallback(path, options) {
    const urls = getApiBaseUrls();
    let lastError = null;
    
    for (const url of urls) {
        try {
            const response = await fetch(`${url}${path}`, options);
            if (response.ok) {
                return response;
            }
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        } catch (error) {
            lastError = error;
            console.warn(`尝试 ${url}${path} 失败:`, error.message);
        }
    }
    
    throw lastError || new Error('所有API地址都不可访问');
}

/**
 * 获取单个API基础URL（向后兼容）
 * @returns {string} API基础URL
 */
function getApiBaseUrl() {
    const urls = getApiBaseUrls();
    return urls[0]; // 返回第一个URL
}

document.addEventListener('DOMContentLoaded', function() {
    const API_BASE_URL = getApiBaseUrl();
    
    // 用户登录表单处理
    const loginForm = document.getElementById('user-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // 准备发送到后端的数据
            const loginData = {
                username: username,
                password: password
            };
            
            // 发送登录请求到后端（带故障转移）
            fetchWithFallback('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            .then(response => {
                // 检查响应状态
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // 登录成功
                    alert('登录成功');
                    
                    // 存储用户信息和令牌
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    localStorage.setItem('token', data.data.token);
                    
                    // 处理"记住我"功能
                    if (remember) {
                        localStorage.setItem('rememberUser', 'true');
                        localStorage.setItem('username', username);
                    } else {
                        localStorage.removeItem('rememberUser');
                        localStorage.removeItem('username');
                    }
                    
                    // 跳转到主页
                    window.location.href = '../index.html';
                } else {
                    // 登录失败
                    alert(data.message || '登录失败');
                }
            })
            .catch(error => {
                console.error('登录错误:', error);
                // 提供更详细的错误信息
                let errorMessage = '登录过程中发生错误，请稍后重试';
                if (error.name === 'TypeError' && error.message.includes('fetch')) {
                    errorMessage = '网络连接错误，请检查网络设置后重试';
                } else if (error.message) {
                    errorMessage = `登录失败: ${error.message}`;
                }
                alert(errorMessage);
            });
        });
    }
    
    // 用户注册表单处理
    const registerForm = document.getElementById('user-register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const realName = document.getElementById('real-name').value;
            const captcha = document.getElementById('captcha').value;
            const terms = document.getElementById('terms').checked;
            
            // 简单验证
            if (password !== confirmPassword) {
                alert('密码和确认密码不匹配');
                return;
            }
            
            if (!terms) {
                alert('请同意用户协议和隐私政策');
                return;
            }
            
            if (!captcha) {
                alert('请输入验证码');
                return;
            }
            
            // 准备发送到后端的数据
            const registerData = {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                realName: realName
            };
            
            // 显示加载状态
            const submitButton = registerForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = '注册中...';
            submitButton.disabled = true;
            
            // 发送注册请求到后端（带故障转移）
            fetchWithFallback('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            })
            .then(response => {
                // 检查响应状态
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // 注册成功
                    alert('注册成功');
                    
                    // 存储用户信息和令牌
                    localStorage.setItem('user', JSON.stringify(data.data.user));
                    localStorage.setItem('token', data.data.token);
                    
                    // 跳转到登录页面
                    window.location.href = 'login.html';
                } else {
                    // 注册失败
                    alert(data.message || '注册失败');
                }
            })
            .catch(error => {
                console.error('注册错误:', error);
                // 提供更详细的错误信息
                let errorMessage = '注册过程中发生错误，请稍后重试';
                if (error.name === 'TypeError' && error.message.includes('fetch')) {
                    errorMessage = '网络连接错误，请检查网络设置后重试';
                } else if (error.message) {
                    errorMessage = `注册失败: ${error.message}`;
                }
                alert(errorMessage);
            })
            .finally(() => {
                // 恢复按钮状态
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
        });
    }
    
    // 记住我功能
    const rememberCheckbox = document.getElementById('remember');
    if (rememberCheckbox) {
        // 检查是否已经记住用户
        if (localStorage.getItem('rememberUser') === 'true') {
            rememberCheckbox.checked = true;
            document.getElementById('username').value = localStorage.getItem('username') || '';
        }
        
        rememberCheckbox.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('rememberUser', 'true');
            } else {
                localStorage.removeItem('rememberUser');
                localStorage.removeItem('username');
            }
        });
    }
    
    // 检查用户是否已登录（用于保护用户页面）
    const userProtectedPages = ['profile.html', 'personal-records.html'];
    const currentUserPage = window.location.pathname.split('/').pop();
    
    if (userProtectedPages.includes(currentUserPage)) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        
        if (!token || !user) {
            alert('请先登录');
            window.location.href = 'login.html';
        }
    }
    
    // 用户退出登录功能
    const userLogoutLink = document.getElementById('user-logout');
    if (userLogoutLink) {
        userLogoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('确定要退出登录吗？')) {
                // 清除本地存储的用户信息和令牌
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                
                // 跳转到首页
                window.location.href = '../index.html';
            }
        });
    }
});