import { ref } from 'vue'

const currentLang = ref('zh')

const translations = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务项目',
      cases: '成功案例',
      contact: '联系我们',
    },
    hero: {
      title: '什么云科技',
      subtitle: '引领数字化未来',
      description: '专注于定制化小程序开发、AIOT业务开发及企业级Web解决方案，用技术创新驱动商业变革',
      cta: '了解我们',
      cta2: '查看案例',
    },
    advantages: {
      title: '技术优势',
      subtitle: '为什么选择我们',
      items: [
        {
          icon: '⚡',
          title: '快速交付',
          description: '采用敏捷开发模式，快速迭代，确保项目按时高质量交付',
        },
        {
          icon: '🎯',
          title: '精准定制',
          description: '深入理解业务需求，提供量身定制的解决方案，完美匹配企业战略',
        },
        {
          icon: '🔧',
          title: '技术领先',
          description: '掌握前沿技术栈，采用最佳实践，确保系统稳定性和可扩展性',
        },
        {
          icon: '🤝',
          title: '全程服务',
          description: '从需求分析到上线运营，提供全生命周期服务支持',
        },
      ],
    },
    partners: {
      title: '合作伙伴',
      subtitle: '与行业领先企业携手共进',
    },
    process: {
      title: '服务流程',
      subtitle: '专业高效的项目交付流程',
      steps: [
        { number: '01', title: '需求分析', description: '深入了解业务场景，梳理功能需求和技术要求' },
        { number: '02', title: '方案设计', description: '制定详细的技术方案和项目计划' },
        { number: '03', title: '开发实施', description: '采用敏捷开发，快速迭代，持续交付' },
        { number: '04', title: '测试验收', description: '全面测试，确保质量，客户验收' },
        { number: '05', title: '上线运营', description: '部署上线，提供运维支持和持续优化' },
      ],
    },
    tech: {
      title: '技术栈',
      subtitle: '采用前沿技术，构建可靠系统',
      categories: [
        {
          name: '前端技术',
          items: ['Vue.js', 'React', 'TypeScript', 'WebGL', 'PWA'],
        },
        {
          name: '后端技术',
          items: ['Node.js', 'Python', 'Java', 'Go', '微服务架构'],
        },
        {
          name: '云服务',
          items: ['AWS', '阿里云', '腾讯云', 'Docker', 'Kubernetes'],
        },
        {
          name: '数据技术',
          items: ['大数据', 'AI/ML', '实时计算', '数据可视化'],
        },
      ],
    },
    about: {
      title: '关于什么云科技',
      subtitle: '专业的数字化解决方案提供商',
      description: '什么云科技有限公司成立于2020年，是一家专注于为企业提供全方位数字化解决方案的科技公司。我们拥有一支由50+技术专家组成的专业团队，致力于通过创新的技术手段，帮助企业实现数字化转型，提升业务效率。',
      description2: '公司总部位于北京，在上海、深圳设有分支机构。我们已为200+企业提供专业的数字化服务，累计完成500+项目，客户满意度达98%。',
      mission: {
        title: '我们的使命',
        content: '通过先进的技术和专业的服务，助力企业实现数字化转型，创造更大的商业价值。我们相信技术可以改变世界，让每个企业都能享受到数字化带来的便利和机遇。',
      },
      vision: {
        title: '我们的愿景',
        content: '成为行业领先的数字化解决方案提供商，推动中国企业的数字化进程。我们致力于成为客户最信赖的技术合作伙伴，共同创造数字化未来。',
      },
      history: {
        title: '发展历程',
        items: [
          { year: '2020', event: '公司成立，专注于Web开发和小程序开发' },
          { year: '2021', event: '拓展AIOT业务，成立AI技术团队' },
          { year: '2022', event: '获得高新技术企业认证，客户数突破100家' },
          { year: '2023', event: '推出云服务解决方案，成立上海分公司' },
          { year: '2024', event: '业务覆盖全国，服务200+企业，团队规模达50+人' },
        ],
      },
      team: {
        title: '核心团队',
        subtitle: '专业的技术团队，丰富的项目经验',
        members: [
          { name: '黄总', role: 'CEO/创始人', desc: '15年互联网行业经验，前BAT技术专家' },
          { name: '梁总', role: 'CTO', desc: '12年技术架构经验，微服务架构专家' },
          { name: '张总', role: '产品总监', desc: '10年产品经验，擅长B端产品设计' },
        ],
      },
    },
    services: {
      title: '服务项目',
      subtitle: '全方位数字化解决方案',
      items: [
        {
          icon: '📱',
          title: '定制化小程序开发',
          description: '为企业量身定制微信小程序、支付宝小程序等，提供从需求分析到上线运营的全流程服务。',
        },
        {
          icon: '🌐',
          title: 'AIOT业务开发',
          description: '物联网与人工智能结合，打造智能化的业务系统，实现设备互联、数据智能分析。',
        },
        {
          icon: '💻',
          title: '企业级Web开发',
          description: '构建高性能、高可用的企业级Web应用，包括管理系统、电商平台、SaaS产品等。',
        },
        {
          icon: '☁️',
          title: '云服务解决方案',
          description: '提供云架构设计、云迁移、云运维等一站式云服务，助力企业上云。',
        },
        {
          icon: '📊',
          title: '大数据分析',
          description: '基于大数据技术，提供数据采集、存储、分析和可视化服务，挖掘数据价值。',
        },
        {
          icon: '🔒',
          title: '网络安全服务',
          description: '提供网络安全评估、防护方案设计、安全运维等服务，保障企业信息安全。',
        },
      ],
    },
    cases: {
      title: '成功案例',
      subtitle: '见证我们的专业实力',
      items: [
        {
          title: '智能零售小程序',
          description: '为某大型零售企业定制开发的智能购物小程序，实现线上线下融合，提升用户体验。项目上线后，用户活跃度提升300%，销售额增长150%。',
          tags: ['小程序', '零售', '电商'],
          result: '用户活跃度提升300%',
        },
        {
          title: '工业物联网平台',
          description: '为制造企业打造的AIOT平台，实现设备远程监控、预测性维护，大幅提升生产效率。系统覆盖1000+设备，故障率降低60%。',
          tags: ['AIOT', '工业', '物联网'],
          result: '故障率降低60%',
        },
        {
          title: '企业数字化管理系统',
          description: '为集团企业开发的统一管理平台，整合多业务系统，实现数据统一管理和决策支持。提升管理效率40%，降低运营成本25%。',
          tags: ['Web开发', '管理系统', '企业级'],
          result: '管理效率提升40%',
        },
        {
          title: '智慧医疗云平台',
          description: '构建的医疗云平台，实现医疗数据互联互通，支持远程诊疗和智能诊断。服务100+医疗机构，处理数据量达TB级。',
          tags: ['云服务', '医疗', '大数据'],
          result: '服务100+医疗机构',
        },
        {
          title: '金融科技解决方案',
          description: '为金融机构开发的智能风控和数据分析平台，实现实时风险监控和智能决策。处理交易量达千万级，准确率达99.9%。',
          tags: ['金融', 'AI', '风控'],
          result: '准确率达99.9%',
        },
        {
          title: '教育SaaS平台',
          description: '打造的一站式教育管理平台，涵盖课程管理、学员管理、在线学习等功能。服务500+教育机构，用户数超10万。',
          tags: ['SaaS', '教育', '在线学习'],
          result: '用户数超10万',
        },
      ],
    },
    contact: {
      title: '联系我们',
      subtitle: '让我们一起创造价值',
      form: {
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        message: '留言',
        submit: '提交',
      },
      info: {
        address: '地址',
        phone: '电话',
        email: '邮箱',
        addressValue: '海南省三亚市吉阳区迎宾路旅文总部港大厦10L',
        phoneValue: '0898-88815942',
        emailValue: 'contact@shenmeyun.com',
      },
    },
    footer: {
      copyright: 'Copyright © 2024 什么云科技有限公司. All Rights Reserved.',
      links: '快速链接',
      contact: '联系方式',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      cases: 'Cases',
      contact: 'Contact',
    },
    hero: {
      title: 'ShenMeYun Tech',
      subtitle: 'Leading Digital Future',
      description: 'Specializing in customized mini-program development, AIOT business development, and enterprise-level Web solutions. Driving business transformation through technological innovation',
      cta: 'Learn More',
      cta2: 'View Cases',
    },
    advantages: {
      title: 'Technical Advantages',
      subtitle: 'Why Choose Us',
      items: [
        {
          icon: '⚡',
          title: 'Fast Delivery',
          description: 'Adopting agile development methodology, rapid iteration, ensuring on-time high-quality delivery',
        },
        {
          icon: '🎯',
          title: 'Precise Customization',
          description: 'Deep understanding of business needs, providing tailored solutions that perfectly match enterprise strategy',
        },
        {
          icon: '🔧',
          title: 'Technical Leadership',
          description: 'Mastering cutting-edge technology stack, adopting best practices, ensuring system stability and scalability',
        },
        {
          icon: '🤝',
          title: 'Full Lifecycle Service',
          description: 'From requirement analysis to online operation, providing full lifecycle service support',
        },
      ],
    },
    partners: {
      title: 'Partners',
      subtitle: 'Working with Industry Leaders',
    },
    process: {
      title: 'Service Process',
      subtitle: 'Professional and Efficient Project Delivery Process',
      steps: [
        { number: '01', title: 'Requirement Analysis', description: 'Deep understanding of business scenarios, sorting out functional requirements and technical requirements' },
        { number: '02', title: 'Solution Design', description: 'Develop detailed technical solutions and project plans' },
        { number: '03', title: 'Development Implementation', description: 'Adopt agile development, rapid iteration, continuous delivery' },
        { number: '04', title: 'Testing & Acceptance', description: 'Comprehensive testing, ensuring quality, customer acceptance' },
        { number: '05', title: 'Launch & Operation', description: 'Deploy online, provide operation support and continuous optimization' },
      ],
    },
    tech: {
      title: 'Technology Stack',
      subtitle: 'Using Cutting-Edge Technology to Build Reliable Systems',
      categories: [
        {
          name: 'Frontend',
          items: ['Vue.js', 'React', 'TypeScript', 'WebGL', 'PWA'],
        },
        {
          name: 'Backend',
          items: ['Node.js', 'Python', 'Java', 'Go', 'Microservices'],
        },
        {
          name: 'Cloud Services',
          items: ['AWS', 'Alibaba Cloud', 'Tencent Cloud', 'Docker', 'Kubernetes'],
        },
        {
          name: 'Data Technology',
          items: ['Big Data', 'AI/ML', 'Real-time Computing', 'Data Visualization'],
        },
      ],
    },
    about: {
      title: 'About ShenMeYun Tech',
      subtitle: 'Professional Digital Solution Provider',
      description: 'ShenMeYun Technology Co., Ltd. was founded in 2020, focusing on providing comprehensive digital solutions for enterprises. We have a professional team of 50+ technical experts dedicated to helping enterprises achieve digital transformation and improve business efficiency through innovative technologies.',
      description2: 'Headquartered in Beijing, with branches in Shanghai and Shenzhen. We have provided professional digital services to 200+ enterprises, completed 500+ projects, with a customer satisfaction rate of 98%.',
      mission: {
        title: 'Our Mission',
        content: 'To help enterprises achieve digital transformation and create greater business value through advanced technology and professional services. We believe technology can change the world, allowing every enterprise to enjoy the convenience and opportunities brought by digitalization.',
      },
      vision: {
        title: 'Our Vision',
        content: 'To become a leading digital solution provider in the industry and promote the digitalization process of Chinese enterprises. We are committed to becoming the most trusted technology partner for our customers, creating a digital future together.',
      },
      history: {
        title: 'Development History',
        items: [
          { year: '2020', event: 'Company founded, focusing on Web development and mini-program development' },
          { year: '2021', event: 'Expanded AIOT business, established AI technology team' },
          { year: '2022', event: 'Obtained high-tech enterprise certification, customers exceeded 100' },
          { year: '2023', event: 'Launched cloud service solutions, established Shanghai branch' },
          { year: '2024', event: 'Business covers nationwide, serving 200+ enterprises, team size reached 50+ people' },
        ],
      },
      team: {
        title: 'Core Team',
        subtitle: 'Professional technical team with rich project experience',
        members: [
          { name: 'Mr. Huang', role: 'CEO/Founder', desc: '15 years of internet industry experience, former BAT technical expert' },
          { name: 'Mr. Liang', role: 'CTO', desc: '12 years of technical architecture experience, microservices architecture expert' },
          { name: 'Mr. Zhang', role: 'Product Director', desc: '10 years of product experience, expert in B-end product design' },
        ],
      },
    },
    services: {
      title: 'Services',
      subtitle: 'Comprehensive Digital Solutions',
      items: [
        {
          icon: '📱',
          title: 'Custom Mini-Program Development',
          description: 'Customized WeChat mini-programs, Alipay mini-programs, etc., providing full-process services from requirement analysis to online operation.',
        },
        {
          icon: '🌐',
          title: 'AIOT Business Development',
          description: 'Combining IoT and AI to create intelligent business systems, achieving device interconnection and intelligent data analysis.',
        },
        {
          icon: '💻',
          title: 'Enterprise Web Development',
          description: 'Building high-performance, highly available enterprise-level Web applications, including management systems, e-commerce platforms, SaaS products, etc.',
        },
        {
          icon: '☁️',
          title: 'Cloud Service Solutions',
          description: 'Providing one-stop cloud services including cloud architecture design, cloud migration, cloud operations, helping enterprises move to the cloud.',
        },
        {
          icon: '📊',
          title: 'Big Data Analytics',
          description: 'Based on big data technology, providing data collection, storage, analysis and visualization services to mine data value.',
        },
        {
          icon: '🔒',
          title: 'Network Security Services',
          description: 'Providing network security assessment, protection solution design, security operations and other services to ensure enterprise information security.',
        },
      ],
    },
    cases: {
      title: 'Success Cases',
      subtitle: 'Witness Our Professional Strength',
      items: [
        {
          title: 'Smart Retail Mini-Program',
          description: 'A smart shopping mini-program customized for a large retail enterprise, achieving online-offline integration and improving user experience. After launch, user activity increased by 300%, sales increased by 150%.',
          tags: ['Mini-Program', 'Retail', 'E-commerce'],
          result: 'User activity +300%',
        },
        {
          title: 'Industrial IoT Platform',
          description: 'An AIOT platform built for manufacturing enterprises, achieving remote equipment monitoring and predictive maintenance, greatly improving production efficiency. System covers 1000+ devices, failure rate reduced by 60%.',
          tags: ['AIOT', 'Industrial', 'IoT'],
          result: 'Failure rate -60%',
        },
        {
          title: 'Enterprise Digital Management System',
          description: 'A unified management platform developed for group enterprises, integrating multiple business systems and achieving unified data management and decision support. Management efficiency improved by 40%, operating costs reduced by 25%.',
          tags: ['Web Development', 'Management System', 'Enterprise'],
          result: 'Efficiency +40%',
        },
        {
          title: 'Smart Healthcare Cloud Platform',
          description: 'A medical cloud platform that enables medical data interconnection, supporting remote diagnosis and intelligent diagnosis. Serving 100+ medical institutions, processing TB-level data.',
          tags: ['Cloud Services', 'Healthcare', 'Big Data'],
          result: 'Serving 100+ institutions',
        },
        {
          title: 'FinTech Solution',
          description: 'An intelligent risk control and data analysis platform developed for financial institutions, achieving real-time risk monitoring and intelligent decision-making. Processing millions of transactions with 99.9% accuracy.',
          tags: ['Finance', 'AI', 'Risk Control'],
          result: '99.9% accuracy',
        },
        {
          title: 'Education SaaS Platform',
          description: 'A one-stop education management platform covering course management, student management, online learning and other functions. Serving 500+ educational institutions with over 100,000 users.',
          tags: ['SaaS', 'Education', 'Online Learning'],
          result: '100K+ users',
        },
      ],
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s Create Value Together',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Submit',
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        addressValue: '10L, Lvwen Headquarters Port Building, Yingbin Road, Jiyang District, Sanya, Hainan Province',
        phoneValue: '0898-88815942',
        emailValue: 'contact@shenmeyun.com',
      },
    },
    footer: {
      copyright: 'Copyright © 2024 ShenMeYun Technology Co., Ltd. All Rights Reserved.',
      links: 'Quick Links',
      contact: 'Contact',
    },
  },
}

export function useI18n() {
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLang.value]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const setLang = (lang) => {
    if (translations[lang]) {
      currentLang.value = lang
      localStorage.setItem('lang', lang)
    }
  }

  /**
   * 检测浏览器语言
   * 如果浏览器语言是中文（zh-CN, zh-TW, zh-HK等），返回 'zh'
   * 否则返回 'en'
   */
  const detectBrowserLang = () => {
    // 优先使用 navigator.language（主语言）
    const browserLang = navigator.language || navigator.userLanguage
    
    // 检查是否是中文（包括简体中文、繁体中文等）
    if (browserLang && browserLang.toLowerCase().startsWith('zh')) {
      return 'zh'
    }
    
    // 如果没有主语言，检查 navigator.languages（语言偏好列表）
    if (navigator.languages && navigator.languages.length > 0) {
      for (const lang of navigator.languages) {
        if (lang.toLowerCase().startsWith('zh')) {
          return 'zh'
        }
      }
    }
    
    // 默认返回英文
    return 'en'
  }

  const initLang = () => {
    // 1. 优先检查用户是否手动设置过语言（localStorage）
    const savedLang = localStorage.getItem('lang')
    if (savedLang && translations[savedLang]) {
      currentLang.value = savedLang
      document.documentElement.lang = savedLang === 'zh' ? 'zh-CN' : 'en'
      return
    }
    
    // 2. 如果没有保存的语言设置，则根据浏览器语言自动检测
    const detectedLang = detectBrowserLang()
    currentLang.value = detectedLang
    document.documentElement.lang = detectedLang === 'zh' ? 'zh-CN' : 'en'
    
    // 注意：自动检测的语言不保存到 localStorage，这样用户下次访问时仍会根据浏览器语言自动选择
    // 只有当用户手动切换语言时，才会保存到 localStorage
  }

  return {
    currentLang,
    t,
    setLang,
    initLang,
  }
}

