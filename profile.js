/* 网站内容配置：优先修改此文件。无构建工具，双击 index.html 即可查看。
 * 空链接不会显示。图片和 PDF 放入 assets/，填写相对路径即可。
 * 下方内容为演示，不代表真实教育经历、已发表论文或项目成果。
 */
window.PROFILE = {
  name: '刘笑',
  role: '电力系统研究者',
  advisor: '刘友波',
  advisorURL: 'https://ee.scu.edu.cn/info/1044/8389.htm',
  institution: '四川大学 / 电气工程学院',
  location: '中国 · 成都',
  bio: '关注分布式光伏、虚拟电厂与配电网安全运行，探索面向新能源系统的优化与控制方法。',
  photo: 'assets/avatar_final.jpg', // 例如 'assets/avatar.jpg'
  email: '2024323030006@stu.scu.edu.cn', // 例如 'yourname@university.edu'
  links: { scholar: '', orcid: '', github: '', researchgate: '', linkedin: '' },
  cv: '', // 例如 'assets/cv.pdf'
  cvPage: {
    directionsTitle: '研究方向',
    directions: ['配电网安全调节', '光储型虚拟电厂与收入分配'],
    educationTitle: '教育背景',
    education: [
      '（1）2024-09至，四川大学，电气工程学院，博士',
      '（2）2026-09至2027-09（拟计划），澳大利亚，昆士兰科技大学，电气工程与机器人学院，联合培养博士',
      '（3）2021-09至2024-06，中南大学，自动化学院，硕士',
      '（4）2017-09至2021-06，燕山大学，电气工程学院，学士'
    ],
    publicationsTitle: '出版物',
    sections: [
      {
        title: '期刊论文',
        items: [
          'X. Liu, Y. Liu, Y. Chen, Z. Tang and H. Gao, Fairness-Awareness Control for Medium-Low Voltage Distribution Networks Based on Leader-Follower Reinforcement Learning. IEEE Transactions on Sustainable Energy.',
          'X. Liu, Y. Liu, Y. Chen, et al. Federated reinforcement learning based dual-level voltage regulation for PV-rich distribution grids. International Journal of Electrical Power & Energy Systems, 2026, 175: 111492.',
          'X. Liu, Y. Chen, Y. Liu, H. Gao and Z. Tang. Robust Voltage Regulation of PV-Rich Distribution System Based on Two-Layer Learning Framework. IEEE Systems Journal, vol. 20, no. 2, pp. 396-406, June 2026.',
          '杨建,刘笑,董密,等.基于深度学习的恒功率负荷直流微电网稳定性分析.电力系统自动化,2023,47(15):188-197.',
          '刘笑,杨建,李力,等.基于机器学习的带被动阻尼直流微电网系统的稳定性检测.电工技术学报,2024,39(8):2281-2293+2324.'
        ]
      },
      { title: '会议论文', items: [
        'X. Liu, Y. Liu, Y. Chen, Z. Tang, H. Gao and Z. Li, "Federated Reinforcement Learning for PV Inverters Enabled Voltage Regulation of Medium-Low Voltage Unbalanced Distribution Grids," 2026 11th Asia Conference on Power and Electrical Engineering (ACPEE), Macao, Macao, 2026, pp. 1081-1085.',
        'Y. Jian, L. Xiao, D. Mi, S. Dongran, L. Li and H. LianSheng, "Research on Constant Power Loads Stability of DC Microgrid Based on Machine Learning," 2022 4th International Conference on Smart Power & Internet Energy Systems (SPIES), Beijing, China, 2022, pp. 1386-1390.'
      ] },
      { title: '奖项', items: ['正在努力拥有！'] }
    ]
  },
  updated: '2026-09-13',
  research: {
    title: 'What I’m Doing',
    heading: '面向高比例新能源的配电网安全运行与市场协同',
    intro: '我的研究关注分布式光伏与储能接入后的配电网运行问题，围绕电压安全、公平调节与市场参与，探索兼顾物理约束和主体利益的协调方法。',
    problemTitle: '研究问题：新能源消纳与运行安全',
    problem: '分布式光伏在提升清洁能源利用水平的同时，也可能在高发电、低负荷时段引起电压越限和反向潮流。如何在满足配电网安全约束的条件下，减少不必要的光伏削减，并合理分配各参与主体的调节责任，是值得研究的问题。',
    approachTitle: '研究思路：从局部调节到聚合协同',
    approach: '结合本地量测、优化控制与市场机制，研究光伏、储能及可调负荷的协同运行，使资源调节能力与配电网安全需求相匹配。',
    topics: [
      { title: '配电网安全与公平电压调节', question: '如何兼顾电压安全、光伏消纳与不同主体之间的调节公平？', method: '研究领航—跟随协调控制、二分法安全修正，以及计及电压越限贡献度的调节责任分配。' },
      { title: '安全强化学习与边缘控制', question: '如何利用有限的本地量测，实现满足安全约束的在线调节？', method: '将强化学习预决策与量测闭环安全修正相结合，研究适用于边缘控制器的轻量化决策方法。' },
      { title: '光储型虚拟电厂与电力市场', question: '如何将分散的光储资源调节能力转化为可参与交易的聚合能力？', method: '研究光储聚合可调能力评估、日前与实时市场衔接，以及考虑配电网安全约束的市场决策。' },
      { title: '多主体协作与收益分配', question: '如何协调不同参与主体的安全责任与经济收益？', method: '围绕安全责任、盈利贡献和长期参与，研究多维公平准则与收益分配机制。' }
    ],
    openTitle: '开放研究与交流',
    openText: '我希望通过这一主页分享研究思路，促进电力系统优化、控制的交流。欢迎围绕相关研究问题开展讨论。'
  },
  // 用真实论文替换示例；可添加任意条目。year 用于分组。
  publications: [
    {year: '2026', title: 'Fairness-Awareness Control for Medium-Low Voltage Distribution Networks Based on Leader-Follower Reinforcement Learning', authors: 'X. Liu, Y. Liu, Y. Chen, Z. Tang and H. Gao', venue: 'IEEE Transactions on Sustainable Energy · 2026 · Early Access', summary: '现有多种通过光伏有功削减维持配电网电压安全的方法，但馈线末端的光伏削减量显著更高，导致各光伏业主之间收益不公。为此，本文提出一种具有公平感知的深度强化学习（DRL）电压调节方法，应用于中低压（MV-LV）不平衡配电网。首先，构建一种由基于电压灵敏度的功率流与光伏削减量共同构成的新型公平准则；进而提出具有公平感知的“领航—跟随”DRL控制策略：以电压灵敏度最大的光伏作为领航者由DRL控制，其余光伏作为跟随者维持公平共识，同时实现光伏削减公平性与运行安全；最后，为缓解低压三相电流不平衡，设计分相公平控制策略，利用本地电流测量对每相光伏逆变器设定值进行二次调节。仿真算例验证了所提方法可有效保障中低压配电网的公平性与运行安全。', status: 'Early Access', paper: 'https://doi.org/10.1109/TSTE.2026.3717288', code: '', bibtex: ''},
    {year: '2026', title: 'Federated reinforcement learning based dual-level voltage regulation for PV-rich distribution grids', authors: 'X. Liu, Y. Liu, Y. Chen, et al.', venue: 'International Journal of Electrical Power & Energy Systems · 2026 · 175: 111492', summary: '联邦强化学习（FRL）方法可用于不平衡中低压（MV-LV）配电网的运行安全，并保护用户的用能隐私。研究构建了去中心化、分层式的训练框架，以同时保障中压（MV）电压安全与低压（LV）三相平衡；所提方法对通信时延具有鲁棒性，并可便捷扩展至大规模系统。为同步解决高光伏渗透率双层配电网中的中压电压越限与低压三相电压不平衡问题，提出一种新颖的联邦强化学习电压调节方法：首先将电压调节建模为马尔可夫博弈，将每个低压站构建为一个智能体；将MV-LV控制目标的奖励分层分解以训练各智能体，实现中压电压越限与低压三相不平衡的同步缓解；在智能体训练中引入联邦学习框架，使智能体在与部分真实数据和策略奖励交互的过程中学习MV-LV电压调节策略，从而获得更好的隐私保护与可扩展性。此外，为增强不完善通信环境下的鲁棒性，采用加权数据填充实现缺失数据插补。在MV-LV配电系统上的仿真结果验证了所提方法的有效性与优势。', status: '', paper: 'https://doi.org/10.1016/j.ijepes.2025.111492', code: '', bibtex: ''},
    {year: '2026', title: 'Robust Voltage Regulation of PV-Rich Distribution System Based on Two-Layer Learning Framework', authors: 'X. Liu, Y. Chen, Y. Liu, H. Gao and Z. Tang', venue: 'IEEE Systems Journal · 2026 · 20(2): 396-406', summary: '高比例光伏渗透给配电网电压控制带来巨大挑战，现有基于强化学习的电压控制方法通常依赖精确的物理模型，而实际中难以获取。为此，本文提出一种新颖的双层学习框架，实现无模型电压控制：上层利用深度神经网络（DNN）替代最优潮流模型，并通过模拟参数不确定性与不完善观测数据提升DNN的鲁棒性；针对电网拓扑变化，采用迁移学习方法，在拓扑变化后仅利用少量增量数据加速DNN模型训练。下层利用多智能体深度强化学习（MADRL）调度光伏注入功率以调节电压；训练过程中以上层DNN替代实际配电网为智能体提供奖励，降低对精确配电系统参数的依赖。在IEEE 69节点与141节点系统上的仿真结果验证了所提方法的优越性：有功网损分别降低7.58%与18.5%；即使发生网络拓扑重构，网损仍分别降低7.17%与13.5%。', status: '', paper: 'https://doi.org/10.1109/JSYST.2026.3676865', code: '', bibtex: ''},
    {year: '2024', title: '基于机器学习的带被动阻尼直流微电网系统的稳定性检测', authors: '刘笑, 杨建, 李力, 等', venue: '电工技术学报 · 2024 · 39(8): 2281-2293+2324', summary: '直流微电网中恒功率负荷(CPL)具有负阻尼特性，该特性会降低系统稳定性。为此，通过在滤波器上添加被动阻尼来增强直流微电网系统的稳定性，并提出一种基于机器学习的方法来检测带被动阻尼直流微电网系统的稳定性。首先，建立带被动阻尼直流微电网系统的小信号模型，以此来确定影响系统稳定性的参数。其次，以所选系统参数为变量建立仿真场景，以此来获取用于机器学习算法训练的数据集。再次，提出一种基于轻量型梯度提升机(LGBM)的直流微电网稳定性检测模型，并采用沙普利加解释法(SHAP)分析所选参数对LGBM预测结果和直流微电网系统稳定性的影响。最后，通过仿真和硬件在环实验验证所提方法的有效性和优越性。', status: '', paper: 'https://doi.org/10.19595/j.cnki.1000-6753.tces.231393', code: '', bibtex: ''},
    {year: '2023', title: '基于深度学习的恒功率负荷直流微电网稳定性分析', authors: '杨建, 刘笑, 董密, 等', venue: '电力系统自动化 · 2023 · 47(15): 188-197', summary: '针对恒功率负荷(CPL)因负阻抗特性导致直流微电网母线电压失稳的问题，从限制CPL取值范围出发，引入深度学习算法分析系统的稳定性。首先，通过采用直流微电网机理模型仿真，建立初始数据库；然后，对数据库进行预处理，在此基础上，利用最大信息系数进行相关性分析，得到系统参数与CPL临界值之间的相关性强弱信息，并实现输入特征降维；接着，采用自定义损失函数与量化预测性能等方法设计适用于CPL临界值预测的深度学习策略。最后，针对不同场景的直流微电网进行仿真测试，并通过硬件在环实验验证所提深度学习策略的有效性和优越性。', status: '', paper: 'https://doi.org/10.7500/AEPS20221222001', code: '', bibtex: ''}
  ],
  talks: [
    { title: 'Edge-Intelligent Control of Distributed Photovoltaics Considering Both Benefit and Responsibility Fairness', conference: '2026 IEEE 2nd International Conference on Smart Power and Energy Technologies (IEEE SPET 2026)', location: 'Wuhan, China', type: 'Oral Presentation', year: '2026' }
  ], // { title: '汇报题目', conference: '会议名称', location: '地点', type: 'Oral Presentation', year: '2026' }
  researchProjects: {
    title: 'Projects',
    note: '科研项目与基金',
    items: [
      { funder: '国家能源局', program: '国家智能电网重大专项', number: '2025ZD0806603', title: '多主体随机博弈下配电系统运行安全边界刻画方法', period: '2025-08至2028-07', budget: '150万元', status: '在研', role: '参与' },
      { funder: '国家自然科学基金委员会', program: '青年基金项目', number: '52207127', title: '基于模型自适应辨识的可变结构交流微网群协同趋优控制研究', period: '2023-01至2025-12', budget: '30万', status: '结题', role: '参与' },
      { funder: '四川省科技厅', program: '四川省重大科技专项', number: '2024ZDZX0031-01', title: '分布式光伏逆变器边缘智能群控技术研究及样机研制', period: '2024-11至2027-10', budget: '315万元', status: '在研', role: '参与' }
    ]
  },
  projects: [{title: '配电网电压调节仿真', description: '示例项目：在此介绍算例系统、控制方法、仿真流程与复现方式。', tags: ['MATLAB', 'Voltage regulation'], url: ''}, {title: '虚拟电厂市场决策', description: '示例项目：在此介绍聚合资源、市场流程、优化模型与代码说明。', tags: ['Virtual power plant', 'Optimization'], url: ''}],
  posts: [{ title: '不会写代码，怎么做学术简历网站？', date: '2026-09-26', text: '这个主页本身就是一个完整的例子：它是一个零基础、借助大模型从零搭建起来的静态网站。\n\n整个过程大致分三步。\n\n第一步，找一个喜欢的范本。学术圈有很多公开的个人主页，挑一个布局顺眼的，比如这个主页参考的样式来自 rick10119.github.io。不需要理解它的实现，只需要知道“我想要的样子”。\n\n第二步，让 ChatGPT 阅读并生成代码。把范本网址直接发给 ChatGPT，请它读取网页结构与内容，并生成一份复刻该样式的 HTML、CSS、JavaScript 代码。这一步产出的是网站的“毛坯房”。\n\n第三步，把代码放进 Trae，用对话持续改进。Trae 是一个内置 AI 助手的编程环境。把代码放进去后，可以直接用自然语言提需求：把研究主题改成“光储型虚拟电厂与电力市场”、在 CV 后面加 Projects 栏目、把头像裁剪成圆形露出人像……每一次修改都是聊一句话的事，不用懂语法，也不用碰命令行。\n\n最后一步是发布。GitHub 可以免费托管静态页面，仓库名取“用户名.github.io”，上传代码后在 Settings → Pages 中开启服务，网站就上线了，任何电脑任何浏览器都能访问。\n\n回头看，搭建这个网站没有写过一行原始代码，全部工作都是“描述需求—检查结果—再提修改”。大模型把“实现”的成本降到了接近于零，剩下的只是审美和耐心。如果你也想有一个自己的学术主页，现在就是成本最低的时刻。' }], // { title: '文章题目', date: '2026-09-13', text: '文章正文，支持换行。' }
};
