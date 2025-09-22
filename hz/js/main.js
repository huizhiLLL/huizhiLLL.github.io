// 全局功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单高亮
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html') || 
            (currentPage === '' && href === '#')) {
            link.parentElement.classList.add('active');
        }
    });
    
    // 为所有链接卡片添加点击效果
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
    
    // 赛事页面筛选功能
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const region = document.getElementById('region').value;
            const date = document.getElementById('date').value;
            
            // 这里应该是实际的筛选逻辑
            alert(`筛选条件：\n地区: ${region}\n时间: ${date}\n\n筛选功能将在后续版本中实现`);
        });
    }
    
    // 教程筛选功能
    const tutorialSearchBtn = document.getElementById('search-btn');
    if (tutorialSearchBtn && window.location.pathname.includes('tutorials')) {
        tutorialSearchBtn.addEventListener('click', function() {
            const level = document.getElementById('level').value;
            const cubeType = document.getElementById('cube-type').value;
            
            // 这里应该是实际的筛选逻辑
            alert(`筛选条件：\n难度: ${level}\n魔方类型: ${cubeType}\n\n筛选功能将在后续版本中实现`);
        });
    }
    
    // 排名页面筛选功能
    if (window.location.pathname.includes('rankings')) {
        const rankSearchBtn = document.getElementById('search-btn');
        if (rankSearchBtn) {
            rankSearchBtn.addEventListener('click', function() {
                const event = document.getElementById('event').value;
                const region = document.getElementById('region').value;
                const type = document.getElementById('type').value;
                
                // 这里应该是实际的筛选逻辑
                alert(`筛选条件：\n项目: ${event}\n地区: ${region}\n类型: ${type}\n\n筛选功能将在后续版本中实现`);
            });
        }
    }
    
    // 赛事申请表单处理
    const applicationForm = document.getElementById('competition-application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(applicationForm);
            
            // 简单验证
            const competitionName = formData.get('competition-name');
            const competitionType = formData.get('competition-type');
            const startDate = formData.get('start-date');
            const endDate = formData.get('end-date');
            const venue = formData.get('competition-venue');
            const organizerName = formData.get('organizer-name');
            const organizerContact = formData.get('organizer-contact');
            const organizerEmail = formData.get('organizer-email');
            const description = formData.get('competition-description');
            const expectedParticipants = formData.get('expected-participants');
            const agreement = formData.get('agreement');
            
            // 检查必填字段
            if (!competitionName || !competitionType || !startDate || !endDate || 
                !venue || !organizerName || !organizerContact || !organizerEmail || 
                !description || !expectedParticipants || !agreement) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 检查日期逻辑
            if (new Date(startDate) > new Date(endDate)) {
                alert('开始日期不能晚于结束日期');
                return;
            }
            
            // 检查赛事项目
            const events = formData.getAll('events');
            if (events.length === 0) {
                alert('请至少选择一个比赛项目');
                return;
            }
            
            // 这里应该是实际的提交逻辑
            alert('赛事申请已提交，我们将尽快审核并与您联系。');
            
            // 重置表单
            applicationForm.reset();
        });
        
        // 日期限制 - 结束日期不能早于开始日期
        const startDateInput = document.getElementById('start-date');
        const endDateInput = document.getElementById('end-date');
        
        if (startDateInput && endDateInput) {
            startDateInput.addEventListener('change', function() {
                if (this.value) {
                    endDateInput.min = this.value;
                }
            });
            
            endDateInput.addEventListener('change', function() {
                if (this.value && startDateInput.value) {
                    if (new Date(this.value) < new Date(startDateInput.value)) {
                        alert('结束日期不能早于开始日期');
                        this.value = '';
                    }
                }
            });
        }
    }
    
    // 赛事详情页面功能
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

// 报名功能
function registerForCompetition(competitionId) {
    // 检查用户是否已登录
    // 这里应该检查登录状态
    const isLoggedIn = false; // 模拟未登录状态
    
    if (!isLoggedIn) {
        if (confirm('您需要先登录才能报名参赛。是否前往登录页面？')) {
            window.location.href = 'user/login.html';
        }
        return;
    }
    
    alert(`报名功能将在后续版本中实现，您正在报名赛事: ${competitionId}`);
}