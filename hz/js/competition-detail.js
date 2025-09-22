document.addEventListener('DOMContentLoaded', function() {
    // 报名按钮处理
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // 检查用户是否已登录
            // 这里应该检查登录状态
            const isLoggedIn = false; // 模拟未登录状态
            
            if (!isLoggedIn) {
                if (confirm('您需要先登录才能报名参赛。是否前往登录页面？')) {
                    window.location.href = 'user/login.html';
                }
                return;
            }
            
            // 这里应该是实际的报名逻辑
            alert('报名功能将在后续版本中实现');
        });
    }
    
    // 查看报名名单按钮处理
    const viewListBtn = document.querySelector('.action-buttons .btn:not(.primary)');
    if (viewListBtn) {
        viewListBtn.addEventListener('click', function() {
            // 这里应该是查看报名名单的逻辑
            alert('报名名单功能将在后续版本中实现');
        });
    }
});