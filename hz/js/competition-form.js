document.addEventListener('DOMContentLoaded', function() {
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
    }
    
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
});