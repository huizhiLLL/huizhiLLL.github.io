// 管理员端JavaScript功能

document.addEventListener('DOMContentLoaded', function() {
    // 登录表单处理
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // 准备发送到后端的数据
            const loginData = {
                username: username,
                password: password
            };
            
            // 发送登录请求到后端
            fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // 登录成功
                    alert('登录成功');
                    
                    // 存储用户信息和令牌
                    localStorage.setItem('adminUser', JSON.stringify(data.data.user));
                    localStorage.setItem('adminToken', data.data.token);
                    
                    // 跳转到仪表板
                    window.location.href = 'dashboard.html';
                } else {
                    // 登录失败
                    alert(data.message || '登录失败');
                }
            })
            .catch(error => {
                console.error('登录错误:', error);
                alert('登录过程中发生错误，请稍后重试');
            });
        });
    }
    
    // 退出登录
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('确定要退出登录吗？')) {
                // 发送登出请求到后端
                fetch('/api/auth/logout', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
                    }
                })
                .then(response => response.json())
                .then(data => {
                    // 清除本地存储的用户信息和令牌
                    localStorage.removeItem('adminUser');
                    localStorage.removeItem('adminToken');
                    
                    // 跳转到登录页面
                    window.location.href = 'login.html';
                })
                .catch(error => {
                    console.error('登出错误:', error);
                    // 即使登出API失败，也执行本地登出
                    localStorage.removeItem('adminUser');
                    localStorage.removeItem('adminToken');
                    window.location.href = 'login.html';
                });
            }
        });
    }
    
    // 检查管理员是否已登录（用于保护管理页面）
    const protectedPages = ['dashboard.html', 'competitions.html', 'users.html', 'news.html', 'settings.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        const token = localStorage.getItem('adminToken');
        const user = localStorage.getItem('adminUser');
        
        if (!token || !user) {
            alert('请先登录');
            window.location.href = 'login.html';
        }
    }
    
    // 设置页面标签切换
    const tabButtons = document.querySelectorAll('.tab-button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 移除所有激活状态
                tabButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.settings-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                
                // 激活当前标签
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab') + '-settings';
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // 添加新赛事按钮
    const addCompetitionBtn = document.getElementById('add-competition');
    if (addCompetitionBtn) {
        addCompetitionBtn.addEventListener('click', function() {
            alert('添加新赛事功能将在后续版本中实现');
        });
    }
    
    // 发布新闻按钮
    const addNewsBtn = document.getElementById('add-news');
    if (addNewsBtn) {
        addNewsBtn.addEventListener('click', function() {
            alert('发布新闻功能将在后续版本中实现');
        });
    }
    
    // 保存设置按钮
    const saveSettingsBtns = document.querySelectorAll('.btn.primary');
    saveSettingsBtns.forEach(button => {
        if (button.textContent === '保存设置') {
            button.addEventListener('click', function() {
                alert('设置已保存');
            });
        }
    });
    
    // 测试邮件按钮
    const testEmailBtn = document.querySelector('.btn:not(.primary)');
    if (testEmailBtn && testEmailBtn.textContent === '测试邮件') {
        testEmailBtn.addEventListener('click', function() {
            alert('邮件测试功能将在后续版本中实现');
        });
    }
});