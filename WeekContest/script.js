// 模拟数据
const mockData = {
    // 校记录数据
    schoolRecords: [
        {
            school: "XX中学",
            project: "三阶",
            name: "张三",
            date: "2024-06-01",
            competition: "校内练习赛",
            single: "12.34",
            average: "14.56"
        },
        {
            school: "XX中学",
            project: "四阶",
            name: "李四",
            date: "2024-05-28",
            competition: "周赛第3周",
            single: "45.67",
            average: "48.90"
        },
        {
            school: "YY中学",
            project: "三阶",
            name: "王五",
            date: "2024-06-05",
            competition: "校内练习赛",
            single: "11.89",
            average: "13.45"
        },
        {
            school: "XX中学",
            project: "金字塔",
            name: "赵六",
            date: "2024-05-30",
            competition: "周赛第4周",
            single: "8.45",
            average: "9.12"
        },
        {
            school: "YY中学",
            project: "四阶",
            name: "孙七",
            date: "2024-06-02",
            competition: "校内练习赛",
            single: "42.11",
            average: "45.33"
        },
        {
            school: "XX中学",
            project: "五阶",
            name: "周八",
            date: "2024-05-25",
            competition: "周赛第2周",
            single: "1:23.45",
            average: "1:28.90"
        }
    ],

    // 周赛记录数据
    weeklyContests: [
        {
            week: "第1周",
            date: "2024-05-20",
            contests: [
                {
                    project: "三阶",
                    results: [
                        {
                            name: "张三",
                            school: "XX中学",
                            rounds: 1,
                            single: "12.34",
                            average: "14.56",
                            times: ["12.34", "15.67", "13.45", "14.23", "16.01"],
                            ranking: 1
                        },
                        {
                            name: "李四",
                            school: "XX中学",
                            rounds: 1,
                            single: "13.45",
                            average: "15.23",
                            times: ["13.45", "14.67", "15.89", "16.12", "15.78"],
                            ranking: 2
                        },
                        {
                            name: "王五",
                            school: "YY中学",
                            rounds: 1,
                            single: "14.67",
                            average: "16.45",
                            times: ["14.67", "15.23", "17.89", "16.45", "18.12"],
                            ranking: 3
                        }
                    ]
                },
                {
                    project: "四阶",
                    results: [
                        {
                            name: "赵六",
                            school: "XX中学",
                            rounds: 1,
                            single: "45.67",
                            average: "48.90",
                            times: ["45.67", "47.23", "49.12", "50.45", "51.23"],
                            ranking: 1
                        },
                        {
                            name: "孙七",
                            school: "YY中学",
                            rounds: 1,
                            single: "48.90",
                            average: "52.34",
                            times: ["48.90", "50.12", "53.45", "54.67", "55.23"],
                            ranking: 2
                        }
                    ]
                }
            ]
        },
        {
            week: "第2周",
            date: "2024-05-27",
            contests: [
                {
                    project: "三阶",
                    results: [
                        {
                            name: "张三",
                            school: "XX中学",
                            rounds: 1,
                            single: "11.89",
                            average: "13.45",
                            times: ["11.89", "12.34", "13.67", "14.23", "14.56"],
                            ranking: 1
                        },
                        {
                            name: "王五",
                            school: "YY中学",
                            rounds: 1,
                            single: "12.45",
                            average: "14.23",
                            times: ["12.45", "13.67", "14.89", "15.12", "15.78"],
                            ranking: 2
                        },
                        {
                            name: "李四",
                            school: "XX中学",
                            rounds: 1,
                            single: "13.12",
                            average: "15.67",
                            times: ["13.12", "14.45", "16.23", "17.45", "17.89"],
                            ranking: 3
                        }
                    ]
                },
                {
                    project: "五阶",
                    results: [
                        {
                            name: "周八",
                            school: "XX中学",
                            rounds: 1,
                            single: "1:23.45",
                            average: "1:28.90",
                            times: ["1:23.45", "1:25.67", "1:28.90", "1:32.12", "1:35.45"],
                            ranking: 1
                        }
                    ]
                }
            ]
        },
        {
            week: "第3周",
            date: "2024-06-03",
            contests: [
                {
                    project: "三阶",
                    results: [
                        {
                            name: "王五",
                            school: "YY中学",
                            rounds: 1,
                            single: "10.89",
                            average: "12.34",
                            times: ["10.89", "11.23", "12.45", "13.67", "13.89"],
                            ranking: 1
                        },
                        {
                            name: "张三",
                            school: "XX中学",
                            rounds: 1,
                            single: "11.45",
                            average: "13.12",
                            times: ["11.45", "12.67", "13.89", "14.23", "14.56"],
                            ranking: 2
                        }
                    ]
                },
                {
                    project: "四阶",
                    results: [
                        {
                            name: "李四",
                            school: "XX中学",
                            rounds: 1,
                            single: "43.12",
                            average: "46.78",
                            times: ["43.12", "45.67", "47.89", "49.23", "50.45"],
                            ranking: 1
                        },
                        {
                            name: "孙七",
                            school: "YY中学",
                            rounds: 1,
                            single: "45.67",
                            average: "49.12",
                            times: ["45.67", "47.89", "50.12", "51.45", "52.78"],
                            ranking: 2
                        }
                    ]
                }
            ]
        },
        {
            week: "第4周",
            date: "2024-06-10",
            contests: [
                {
                    project: "三阶",
                    results: [
                        {
                            name: "张三",
                            school: "XX中学",
                            rounds: 1,
                            single: "10.23",
                            average: "11.89",
                            times: ["10.23", "11.45", "12.67", "13.12", "13.45"],
                            ranking: 1
                        },
                        {
                            name: "王五",
                            school: "YY中学",
                            rounds: 1,
                            single: "11.12",
                            average: "12.67",
                            times: ["11.12", "12.34", "13.45", "14.23", "14.67"],
                            ranking: 2
                        },
                        {
                            name: "李四",
                            school: "XX中学",
                            rounds: 1,
                            single: "12.45",
                            average: "14.23",
                            times: ["12.45", "13.67", "14.89", "15.12", "15.78"],
                            ranking: 3
                        }
                    ]
                },
                {
                    project: "金字塔",
                    results: [
                        {
                            name: "赵六",
                            school: "XX中学",
                            rounds: 1,
                            single: "8.45",
                            average: "9.12",
                            times: ["8.45", "8.67", "9.12", "9.45", "9.78"],
                            ranking: 1
                        }
                    ]
                }
            ]
        }
    ]
};

// 工具函数
const utils = {
    // 格式化时间
    formatTime: (time) => {
        if (typeof time === 'string' && time.includes(':')) {
            return time;
        }
        const num = parseFloat(time);
        if (num < 60) {
            return num.toFixed(2);
        } else {
            const minutes = Math.floor(num / 60);
            const seconds = (num % 60).toFixed(2);
            return `${minutes}:${seconds.padStart(5, '0')}`;
        }
    },

    // 获取排名样式类
    getRankingClass: (ranking) => {
        if (ranking === 1) return 'ranking-1';
        if (ranking === 2) return 'ranking-2';
        if (ranking === 3) return 'ranking-3';
        return 'ranking-other';
    },

    // 动画计数器
    animateCounter: (element, start, end, duration) => {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + (end - start) * progress);
            element.textContent = current;
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
};

// 首页功能
const homePage = {
    // 初始化首页
    init: () => {
        homePage.loadStats();
        homePage.loadRecentActivity();
    },

    // 加载统计数据
    loadStats: () => {
        const totalContests = mockData.weeklyContests.length;
        const totalParticipants = new Set();
        const totalRecords = mockData.schoolRecords.length;

        // 计算参赛选手数量
        mockData.weeklyContests.forEach(week => {
            week.contests.forEach(contest => {
                contest.results.forEach(result => {
                    totalParticipants.add(result.name);
                });
            });
        });

        // 动画显示数字
        const contestElement = document.getElementById('total-contests');
        const participantElement = document.getElementById('total-participants');
        const recordElement = document.getElementById('total-records');

        if (contestElement) utils.animateCounter(contestElement, 0, totalContests, 1000);
        if (participantElement) utils.animateCounter(participantElement, 0, totalParticipants.size, 1200);
        if (recordElement) utils.animateCounter(recordElement, 0, totalRecords, 800);
    },

    // 加载最新动态
    loadRecentActivity: () => {
        const activityList = document.getElementById('recent-activity-list');
        if (!activityList) return;

        const activities = [
            {
                type: 'record',
                title: '新校记录诞生！',
                description: '王五在YY中学三阶项目中创造了10.89秒的新校记录',
                time: '2小时前'
            },
            {
                type: 'contest',
                title: '第4周周赛结束',
                description: '本周共有8名选手参与三阶和金字塔项目比赛',
                time: '1天前'
            },
            {
                type: 'achievement',
                title: '张三突破个人最佳',
                description: '张三在三阶项目中连续刷新个人最佳成绩',
                time: '3天前'
            }
        ];

        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item fade-in-up">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <h4 style="color: var(--primary-color); font-weight: 600;">${activity.title}</h4>
                    <span style="color: var(--text-secondary); font-size: 0.875rem;">${activity.time}</span>
                </div>
                <p style="color: var(--text-secondary); margin: 0;">${activity.description}</p>
            </div>
        `).join('');
    }
};

// 校记录页面功能
const schoolRecordsPage = {
    // 初始化校记录页面
    init: () => {
        schoolRecordsPage.loadRecords();
        schoolRecordsPage.bindFilters();
    },

    // 加载校记录
    loadRecords: (filters = {}) => {
        const recordsGrid = document.getElementById('records-grid');
        const noData = document.getElementById('no-data');
        
        if (!recordsGrid) return;

        let filteredRecords = mockData.schoolRecords;

        // 应用筛选
        if (filters.school) {
            filteredRecords = filteredRecords.filter(record => record.school === filters.school);
        }
        if (filters.project) {
            filteredRecords = filteredRecords.filter(record => record.project === filters.project);
        }

        if (filteredRecords.length === 0) {
            recordsGrid.style.display = 'none';
            noData.style.display = 'block';
            return;
        }

        recordsGrid.style.display = 'grid';
        noData.style.display = 'none';

        recordsGrid.innerHTML = filteredRecords.map(record => `
            <div class="record-card fade-in-up">
                <div class="record-header">
                    <div class="record-project">${record.project}</div>
                    <div class="record-school">${record.school}</div>
                </div>
                <div class="record-name">${record.name}</div>
                <div class="record-times">
                    <div class="time-item">
                        <div class="time-label">单次</div>
                        <div class="time-value">${utils.formatTime(record.single)}</div>
                    </div>
                    <div class="time-item">
                        <div class="time-label">平均</div>
                        <div class="time-value">${utils.formatTime(record.average)}</div>
                    </div>
                </div>
                <div class="record-details">
                    <div class="record-date">
                        <i class="fas fa-calendar"></i>
                        ${record.date}
                    </div>
                    <div class="record-competition">
                        <i class="fas fa-trophy"></i>
                        ${record.competition}
                    </div>
                </div>
            </div>
        `).join('');
    },

    // 绑定筛选器
    bindFilters: () => {
        const schoolFilter = document.getElementById('school-filter');
        const projectFilter = document.getElementById('project-filter');

        const applyFilters = () => {
            const filters = {
                school: schoolFilter?.value || '',
                project: projectFilter?.value || ''
            };
            schoolRecordsPage.loadRecords(filters);
        };

        if (schoolFilter) schoolFilter.addEventListener('change', applyFilters);
        if (projectFilter) projectFilter.addEventListener('change', applyFilters);
    }
};

// 周赛记录页面功能
const weeklyContestsPage = {
    // 初始化周赛记录页面
    init: () => {
        weeklyContestsPage.loadContests();
        weeklyContestsPage.bindFilters();
    },

    // 加载周赛记录
    loadContests: (filters = {}) => {
        const contestsTimeline = document.getElementById('contests-timeline');
        const noData = document.getElementById('no-data');
        
        if (!contestsTimeline) return;

        let filteredContests = mockData.weeklyContests;

        // 应用筛选
        if (filters.week) {
            filteredContests = filteredContests.filter(week => week.week === filters.week);
        }

        if (filteredContests.length === 0) {
            contestsTimeline.style.display = 'none';
            noData.style.display = 'block';
            return;
        }

        contestsTimeline.style.display = 'flex';
        noData.style.display = 'none';

        contestsTimeline.innerHTML = filteredContests.map(week => {
            let weekContests = week.contests;
            
            // 应用项目筛选
            if (filters.project) {
                weekContests = weekContests.filter(contest => contest.project === filters.project);
            }
            
            // 应用学校筛选
            if (filters.school) {
                weekContests = weekContests.map(contest => ({
                    ...contest,
                    results: contest.results.filter(result => result.school === filters.school)
                })).filter(contest => contest.results.length > 0);
            }

            if (weekContests.length === 0) return '';

            return `
                <div class="week-card fade-in-up">
                    <div class="week-header">
                        <div class="week-title">${week.week}</div>
                        <div class="week-date">${week.date}</div>
                    </div>
                    <div class="week-content">
                        ${weekContests.map(contest => `
                            <div class="project-section">
                                <h3 class="project-title">${contest.project}</h3>
                                <table class="contest-table">
                                    <thead>
                                        <tr>
                                            <th>排名</th>
                                            <th>姓名</th>
                                            <th>学校</th>
                                            <th>单次</th>
                                            <th>平均</th>
                                            <th>五次成绩</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${contest.results.map(result => `
                                            <tr>
                                                <td>
                                                    <span class="ranking ${utils.getRankingClass(result.ranking)}">
                                                        ${result.ranking}
                                                    </span>
                                                </td>
                                                <td>${result.name}</td>
                                                <td>${result.school}</td>
                                                <td>${utils.formatTime(result.single)}</td>
                                                <td>${utils.formatTime(result.average)}</td>
                                                <td>
                                                    <div class="times-list">
                                                        ${result.times.map((time, index) => `
                                                            <span class="time-badge ${index === 0 ? 'best' : ''}">
                                                                ${utils.formatTime(time)}
                                                            </span>
                                                        `).join('')}
                                                    </div>
                                                </td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).filter(html => html).join('');
    },

    // 绑定筛选器
    bindFilters: () => {
        const weekFilter = document.getElementById('week-filter');
        const projectFilter = document.getElementById('project-filter');
        const schoolFilter = document.getElementById('school-filter');

        const applyFilters = () => {
            const filters = {
                week: weekFilter?.value || '',
                project: projectFilter?.value || '',
                school: schoolFilter?.value || ''
            };
            weeklyContestsPage.loadContests(filters);
        };

        if (weekFilter) weekFilter.addEventListener('change', applyFilters);
        if (projectFilter) projectFilter.addEventListener('change', applyFilters);
        if (schoolFilter) schoolFilter.addEventListener('change', applyFilters);
    }
};

// 重置筛选器函数
function resetFilters() {
    // 重置校记录页面筛选器
    const schoolFilter = document.getElementById('school-filter');
    const projectFilter = document.getElementById('project-filter');
    const weekFilter = document.getElementById('week-filter');

    if (schoolFilter) schoolFilter.value = '';
    if (projectFilter) projectFilter.value = '';
    if (weekFilter) weekFilter.value = '';

    // 重新加载数据
    if (window.location.pathname.includes('school-records')) {
        schoolRecordsPage.loadRecords();
    } else if (window.location.pathname.includes('weekly-contests')) {
        weeklyContestsPage.loadContests();
    }
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage.endsWith('/') || currentPage.endsWith('/WeekContest/')) {
        homePage.init();
    } else if (currentPage.includes('school-records')) {
        schoolRecordsPage.init();
    } else if (currentPage.includes('weekly-contests')) {
        weeklyContestsPage.init();
    }

    // 移动端导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加页面加载动画
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// 导出数据功能（未来扩展）
function exportData(type) {
    let data, filename;
    
    if (type === 'school-records') {
        data = mockData.schoolRecords;
        filename = 'school-records.json';
    } else if (type === 'weekly-contests') {
        data = mockData.weeklyContests;
        filename = 'weekly-contests.json';
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}
