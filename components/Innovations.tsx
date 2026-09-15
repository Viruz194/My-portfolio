import React from 'react';
import Card from './Card';
import { ProjectData } from './ProjectModal';
import { Language, translations } from '../utils/translations';

interface InnovationsProps {
  lang: Language;
  onSelectProject: (project: ProjectData) => void;
}

const getInnovationsData = (lang: Language): ProjectData[] => {
  if (lang === 'zh') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "Koushik 的神经网络作品集",
        subtitle: "(本展示网站 - 1小时内借助 AI 搭建完成)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "您当前浏览的这份作品集网站！使用 AI 结对编程在不到 1 小时内架构并部署完成。",
        fullDetails: "使用先进的 AI 编程 Agent 在 1 小时内构思并开发了这一交互式作品集平台。包含 Koushik 的神经网络入口、赛博 CLI 终端、Web Audio API 合成器、HUD 规格弹窗及响应式主题切换。",
        metrics: [
          { label: "构建用时", value: "<1 小时" },
          { label: "AI 结对编程", value: "100%" },
          { label: "Vite 模块", value: "47" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI 编程 Agent", "Tailwind CSS", "Web Audio API"],
        deliverables: [
          "在 60 分钟内完成全栈架构与 UI 快速开发。",
          "交互式神经网络入口、赛博 CLI 终端、自定义 Web Audio 音效引擎与响应式遥测 HUD 设计。"
        ]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia 知识库与 SOP 仓库",
        subtitle: "集中化工程知识库与标准作业程序 repository",
        category: "innovation",
        description: "开发集中化工程 Wiki 和 SOP 知识库，大幅减少现场故障排除停机时间。",
        fullDetails: "构思并构建了 AmiTpedia——一个统一的数字知识库，包含逐步故障排除指南、机器参数映射图和应急维修 SOP，供全球现场应用工程师使用。",
        metrics: [
          { label: "停机缩短", value: "40%" },
          { label: "SOP 指南", value: "250+" },
          { label: "工程师采纳", value: "100%" }
        ],
        technologies: ["Markdown Wiki", "搜索索引", "知识库架构", "文档化体系"],
        deliverables: [
          "标准化国内外部署团队的现场诊断流程。",
          "通过提供支持离线访问的 SOP 手册，消除了重复的升级咨询。"
        ]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync 厂级数据遥测管道",
        subtitle: "硬件至管理层的数据遥测传输管道",
        category: "innovation",
        description: "工业数据同步工具，打通车间硬件与管理报告系统。",
        fullDetails: "设计低延迟遥测桥梁，将 CNC 机器输出、PLC 日志和生产数据库连接至管理层 BI 仪表盘，实现实时可视化。",
        metrics: [
          { label: "同步延迟", value: "<1秒" },
          { label: "系统可用性", value: "99.9%" },
          { label: "每日数据点", value: "100万+" }
        ],
        technologies: ["AI 数据管道", "REST API", "SQL 基础", "工业物联网", "JSON 缓冲"],
        deliverables: [
          "硬件控制器与 Web 报告仪表盘之间的无缝同步。",
          "每小时自动汇总生产产量与错误日志摘要。"
        ]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "FlowState 瓶颈实时预警引擎",
        subtitle: "实时制造生产线瓶颈报警系统",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "设计自动化实时系统，即时识别并预警生产线瓶颈。",
        fullDetails: "开发预测性流量监控算法，分析工位排队长度和机器循环时间，在产线停摆前主动触发预警。",
        metrics: [
          { label: "瓶颈报警", value: "即时" },
          { label: "产线效率", value: "+18%" }
        ],
        technologies: ["实时分析", "AI 逻辑引擎", "数据流处理", "预警引擎"],
        deliverables: [
          "面向车间主管的直观排队长度监控器。",
          "针对机器故障状态的 SMS 和邮件通知系统。"
        ]
      },
      {
        tag: "AUTOMATION",
        title: "AGIS 称重式自动库存系统",
        subtitle: "自主称重式库存管理与跟踪系统",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "提出使用传感器的自主称重库存系统，通过自动化跟踪消除人工盘点错误。",
        fullDetails: "架构基于重量传感器的库存跟踪系统，自动计算零件使用量、更新库存水平并触发补货请求，无需人工手动盘点。",
        metrics: [
          { label: "盘点误差", value: "0%" },
          { label: "节省时间", value: "15 小时/周" }
        ],
        technologies: ["称重传感器", "微控制器", "AI 预测建模", "数据分析"],
        deliverables: [
          "基于高精度称重传感器输入自动计算零件数量。",
          "与 ERP 数据库集成实现自动补货触发。"
        ]
      }
    ];
  }

  if (lang === 'kn') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "ಕೌಶಿಕ್ ಅವರ ನ್ಯೂರಲ್ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ",
        subtitle: "(ಈ ವೆಬ್‌ಸೈಟ್ - 1 ಗಂಟೆಯೊಳಗೆ AI ಬಳಸಿ ನಿರ್ಮಿಸಲಾಗಿದೆ)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "ನೀವು ಪ್ರಸ್ತುತ ವೀಕ್ಷಿಸುತ್ತಿರುವ ಈ ವೆಬ್‌ಸೈಟ್‌ ಅನ್ನು AI ಬಳಸಿ 1 ಗಂಟೆಗಿಂತ ಕಡಿಮೆ ಅವಧಿಯಲ್ಲಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.",
        fullDetails: "AI ಕೋಡಿಂಗ್ ಏಜೆಂಟ್‌ಗಳನ್ನು ಬಳಸಿ ನಿರ್ಮಿಸಲಾದ ಸಂವಾದಾತ್ಮಕ ಪೋರ್ಟ್‌ಫೋಲಿಯೋ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್.",
        metrics: [
          { label: "ನಿರ್ಮಾಣ ಸಮಯ", value: "<1 ಗಂಟೆ" },
          { label: "AI ಜೋಡಿ ಕೋಡಿಂಗ್", value: "100%" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI Agents", "Tailwind CSS"],
        deliverables: ["60 ನಿಮಿಷಗಳಲ್ಲಿ ಪೂರ್ಣ ಪ್ರಮಾಣದ ವೆಬ್‌ಸೈಟ್ ನಿರ್ಮಾಣ."]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia ಜ್ಞಾನ ಭಂಡಾರ",
        subtitle: "ಕೈಗಾರಿಕಾ ಮಾರ್ಗದರ್ಶಿ ಮತ್ತು SOP ಭಂಡಾರ",
        category: "innovation",
        description: "ಸಮಸ್ಯೆ ನಿವಾರಣೆಗಾಗಿ ಕೇಂದ್ರೀಕೃತ ಇಂಜಿನಿಯರಿಂಗ್ ವಿಕಿ ಮತ್ತು SOP ಭಂಡಾರ.",
        fullDetails: "ಎಂಜಿನಿಯರ್‌ಗಳಿಗಾಗಿ ಹಂತ-ಹಂತದ ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶಿಗಳು ಮತ್ತು ವಿವರಣೆಗಳು.",
        metrics: [
          { label: "ಸಮಯ ಉಳಿತಾಯ", value: "40%" },
          { label: "SOP ಗೈಡ್‌ಗಳು", value: "250+" }
        ],
        technologies: ["Markdown Wiki", "Search Indexing"],
        deliverables: ["ತಾಂತ್ರಿಕ ದೋಷಗಳ ತ್ವರಿತ ಪರಿಹಾರ."]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync ಡೇಟಾ ಪೈಪ್‌ಲೈನ್",
        subtitle: "ಉತ್ಪಾದನಾ ಡೇಟಾ ಸಂಗ್ರಹಣೆ",
        category: "innovation",
        description: "ಉತ್ಪಾದನಾ ಯಂತ್ರಗಳು ಮತ್ತು ಮ್ಯಾನೇಜ್ಮೆಂಟ್ ಸಾಫ್ಟ್‌ವೇರ್ ನಡುವೆ ಡೇಟಾ ಸಿಂಕ್.",
        fullDetails: "CNC ಮತ್ತು PLC ಗಳಿಂದ ರಿಯಲ್-ಟೈಮ್ ಡೇಟಾವನ್ನು ಪಡೆಯಲು ವ್ಯವಸ್ಥೆ.",
        metrics: [
          { label: "ಡೇಟಾ ಸಿಂಕ್ ಲೇಟೆನ್ಸಿ", value: "<1sec" }
        ],
        technologies: ["AI Data Pipelines", "REST APIs"],
        deliverables: ["ಸ್ವಯಂಚಾಲಿತ ಉತ್ಪಾದನಾ ವರದಿಗಳು."]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "FlowState Engine",
        subtitle: "ಉತ್ಪಾದನಾ ತಡೆ ನಿವಾರಣಾ ವ್ಯವಸ್ಥೆ",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "ಉತ್ಪಾದನಾ ಮಾರ್ಗದಲ್ಲಿನ ತಡೆಗಳನ್ನು ತಕ್ಷಣ ಗುರುತಿಸುವ ಸಿಸ್ಟಮ್.",
        fullDetails: "ಉತ್ಪಾದನಾ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ರಿಯಲ್-ಟೈಮ್ ಮಾನಿಟರಿಂಗ್.",
        metrics: [
          { label: "ಎಚ್ಚರಿಕೆ", value: "ತ್ವರಿತ" }
        ],
        technologies: ["Real-time Analytics", "AI Logic Engine"],
        deliverables: ["ರಿಯಲ್-ಟೈಮ್ ಎಚ್ಚರಿಕೆ ವ್ಯವಸ್ಥೆ."]
      },
      {
        tag: "AUTOMATION",
        title: "AGIS ಇನ್ವೆಂಟರಿ ಸಿಸ್ಟಮ್",
        subtitle: "ಸ್ವಯಂಚಾಲಿತ ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "ಸಂವೇದಕಗಳನ್ನು ಬಳಸಿ ಸ್ವಯಂಚಾಲಿತ ದಾಸ್ತಾನು ಲೆಕ್ಕಾಚಾರ ವ್ಯವಸ್ಥೆ.",
        fullDetails: "ಮಾನವ ಶ್ರಮವಿಲ್ಲದೆ ಸರಕುಗಳ ದಾಸ್ತಾನು ಲೆಕ್ಕಚಾರ ಮತ್ತು ಮರುಆದೇಶ ವ್ಯವಸ್ಥೆ.",
        metrics: [
          { label: "ಲೆಕ್ಕಾಚಾರ ದೋಷ", value: "0%" }
        ],
        technologies: ["Sensors", "Microcontrollers", "Data Analytics"],
        deliverables: ["ಸ್ವಯಂಚಾಲಿತ ದಾಸ್ತಾನು ನಿರ್ವಹಣೆ."]
      }
    ];
  }

  if (lang === 'hi') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "कौशिक का न्यूरल पोर्टफोलियो",
        subtitle: "(यह वेबसाइट - एआई का उपयोग करके <1 घंटे में निर्मित)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "आप जो पोर्टफोलियो वेबसाइट देख रहे हैं, इसे एआई पेयर-प्रोग्रामिंग से 1 घंटे से कम समय में बनाया गया है।",
        fullDetails: "उन्नत एआई कोडिंग एजेंटों का उपयोग करके निर्मित इंटरैक्टिव पोर्टफोलियो प्लेटफॉर्म।",
        metrics: [
          { label: "निर्माण समय", value: "<1 घंटा" },
          { label: "एआई कोडिंग", value: "100%" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI Agents", "Tailwind CSS"],
        deliverables: ["60 मिनट से कम समय में पूर्ण वेबसाइट का विकास।"]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia ज्ञान और SOP रिपॉजिटरी",
        subtitle: "केन्द्रीकृत ज्ञान विकी और एसओपी रिपॉजिटरी",
        category: "innovation",
        description: "डाउनटाइम को कम करने के लिए एक केंद्रीकृत इंजीनियरिंग विकी और एसओपी रिपॉजिटरी विकसित की।",
        fullDetails: "इंजीनियरों के लिए चरण-दर-चरण समस्या निवारण गाइड।",
        metrics: [
          { label: "डाउनटाइम कमी", value: "40%" },
          { label: "SOP गाइड", value: "250+" }
        ],
        technologies: ["Markdown Wiki", "Search Indexing"],
        deliverables: ["तकनीकी समस्याओं का त्वरित समाधान।"]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync डेटा टेलीमेट्री पाइपलाइन",
        subtitle: "औद्योगिक डेटा टेलीमेट्री पाइपलाइन",
        category: "innovation",
        description: "कारखाने के हार्डवेयर और प्रबंधन रिपोर्टिंग सिस्टम को जोड़ने वाला डेटा सिंक टूल।",
        fullDetails: "सीएनसी और पीएलसी से रियल-टाइम डेटा एकत्र करने के लिए पाइपलाइन।",
        metrics: [
          { label: "डेटा सिंक लेटेंसी", value: "<1sec" }
        ],
        technologies: ["AI Data Pipelines", "REST APIs"],
        deliverables: ["स्वचालित उत्पादन रिपोर्ट।"]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "FlowState Engine रीयल-टाइम सिस्टम",
        subtitle: "उत्पादन लाइन बाधा चेतावनी प्रणाली",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "उत्पादन बाधाओं को तुरंत पहचानने के लिए स्वचालित वास्तविक समय प्रणाली।",
        fullDetails: "उत्पादन दक्षता बढ़ाने के लिए रियल-टाइम मॉनिटरिंग।",
        metrics: [
          { label: "अलर्ट", value: "तत्काल" }
        ],
        technologies: ["Real-time Analytics", "AI Logic Engine"],
        deliverables: ["रियल-टाइम अलर्ट सिस्टम।"]
      },
      {
        tag: "AUTOMATION",
        title: "AGIS स्वायत्त इन्वेंटरी सिस्टम",
        subtitle: "स्वायत्त वजन-आधारित इन्वेंटरी प्रणाली",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "स्वचालित ट्रैकिंग के माध्यम से ऑडिट त्रुटियों को समाप्त करने वाली प्रणाली।",
        fullDetails: "सेंसर-आधारित वजन-ट्रैकिंग इन्वेंटरी सिस्टम।",
        metrics: [
          { label: "ऑडिट त्रुटि", value: "0%" }
        ],
        technologies: ["Sensors", "Microcontrollers", "Data Analytics"],
        deliverables: ["स्वचालित इन्वेंटरी प्रबंधन।"]
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "கௌஷிக் அவர்களின் நியூரல் போர்ட்ஃபோலியோ",
        subtitle: "(இந்த இணையதளம் - AI பயன்படுத்தி <1 மணிநேரத்தில் உருவாக்கப்பட்டது)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "நீங்கள் பார்க்கும் இந்த இணையதளம் AI இணை நிரலாக்கத்தைப் பயன்படுத்தி 1 மணிநேரத்திற்குள் உருவாக்கப்பட்டது.",
        fullDetails: "AI கோடீங் முகவர்களைப் பயன்படுத்தி உருவாக்கப்பட்ட ஊடாடும் போர்ட்ஃபோலியோ தளம்.",
        metrics: [
          { label: "உருவாக்க நேரம்", value: "<1 மணிநேரம்" },
          { label: "AI கோடீங்", value: "100%" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI Agents", "Tailwind CSS"],
        deliverables: ["60 நிமிடங்களுக்குள் முழுமையான இணையதள உருவாக்கம்."]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia அறிவு மையம்",
        subtitle: "மத்திய பொறியியல் விக்கி மற்றும் SOP களஞ்சியம்",
        category: "innovation",
        description: "சிக்கல்களை விரைவாகத் தீர்ப்பதற்கான மத்திய பொறியியல் விக்கி.",
        fullDetails: "பொறியாளர்களுக்கான படிப்படியான வழிகாட்டிகள்.",
        metrics: [
          { label: "நேர சேமிப்பு", value: "40%" },
          { label: "SOP வழிகாட்டிகள்", value: "250+" }
        ],
        technologies: ["Markdown Wiki", "Search Indexing"],
        deliverables: ["தொழில்நுட்ப சிக்கல்களுக்கு விரைவான தீர்வு."]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync தரவு இணைப்பு",
        subtitle: "தொழில்துறை தரவு இணைப்பு குழாய்",
        category: "innovation",
        description: "உற்பத்தி இயந்திரங்கள் மற்றும் மேலாண்மை அமைப்புகளை இணைக்கும் கருவி.",
        fullDetails: "CNC மற்றும் PLC களில் இருந்து நிகழ்நேர தரவு சேகரிப்பு.",
        metrics: [
          { label: "தரவு ஒத்திசைவு", value: "<1sec" }
        ],
        technologies: ["AI Data Pipelines", "REST APIs"],
        deliverables: ["தானியங்கி உற்பத்தி அறிக்கைகள்."]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "FlowState Engine அமைப்புகள்",
        subtitle: "நிகழ்நேர உற்பத்தி தடை எச்சரிக்கை",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "உற்பத்தி தடைகளை உடனடியாகக் கண்டறியும் தானியங்கி அமைப்பு.",
        fullDetails: "உற்பத்தி திறனை அதிகரிக்க நிகழ்நேர கண்காணிப்பு.",
        metrics: [
          { label: "எச்சரிக்கை", value: "உடனடி" }
        ],
        technologies: ["Real-time Analytics", "AI Logic Engine"],
        deliverables: ["நிகழ்நேர எச்சரிக்கை அமைப்பு."]
      },
      {
        tag: "AUTOMATION",
        title: "AGIS சரக்கு மேலாண்மை",
        subtitle: "தானியங்கி சரக்கு மேலாண்மை அமைப்பு",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "சென்சார்களைப் பயன்படுத்தி தானியங்கி சரக்குக் கண்காணிப்பு.",
        fullDetails: "மனித முயற்சியின்றி சரக்கு கணக்கீடு மற்றும் மறுஆணை அமைப்பு.",
        metrics: [
          { label: "கணக்கீட்டு பிழை", value: "0%" }
        ],
        technologies: ["Sensors", "Microcontrollers", "Data Analytics"],
        deliverables: ["தானியங்கி சரக்கு மேலாண்மை."]
      }
    ];
  }

  if (lang === 'ml') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "കൗശിക് ന്യൂറൽ പോർട്ട്ഫോളിയോ",
        subtitle: "(ഈ വെബ്‌സൈറ്റ് - AI ഉപയോഗിച്ച് <1 മണിക്കൂറിനുള്ളിൽ നിർമ്മിച്ചത്)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "നിങ്ങൾ ഇപ്പോൾ കാണുന്ന ഈ വെബ്‌സൈറ്റ് AI കോഡിംഗ് ഉപയോഗിച്ച് 1 മണിക്കൂറിനുള്ളിൽ നിർമ്മിച്ചതാണ്.",
        fullDetails: "AI കോഡിംഗ് ഏജന്റുകൾ ഉപയോഗിച്ച് നിർമ്മിച്ച സംവേദനാത്മക പോർട്ട്ഫോളിയോ പ്ലാറ്റ്ഫോം.",
        metrics: [
          { label: "നിർമ്മാണ സമയം", value: "<1 മണിക്കൂർ" },
          { label: "AI കോഡിംഗ്", value: "100%" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI Agents", "Tailwind CSS"],
        deliverables: ["60 മിനിറ്റിനുള്ളിൽ സമ്പൂർണ്ണ വെബ്‌സൈറ്റ് നിർമ്മാണം."]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia നോളജ് വിക്കി",
        subtitle: "കേന്ദ്രീകൃത എഞ്ചിനീയറിംഗ് വിക്കിയും SOP ശേഖരവും",
        category: "innovation",
        description: "തകരാറുകൾ വേഗത്തിൽ പരിഹരിക്കാനുള്ള കേന്ദ്രീകൃത എഞ്ചിനീയറിംഗ് വിക്കി.",
        fullDetails: "എഞ്ചിനീയർമാർക്കായുള്ള സാങ്കേതിക മാർഗ്ഗനിർദ്ദേശങ്ങൾ.",
        metrics: [
          { label: "സമയ ലാഭം", value: "40%" },
          { label: "SOP ഗൈഡുകൾ", value: "250+" }
        ],
        technologies: ["Markdown Wiki", "Search Indexing"],
        deliverables: ["സാങ്കേതിക പ്രശ്നങ്ങൾക്ക് വേഗത്തിലുള്ള പരിഹാരം."]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync ഡാറ്റാ ലൈൻ",
        subtitle: "വ്യാവസായിക ഡാറ്റാ സമന്വയ പൈപ്പ്ലൈൻ",
        category: "innovation",
        description: "ഉൽപ്പാദന യന്ത്രങ്ങളെയും മാനേജ്‌മെന്റ് സിസ്റ്റങ്ങളെയും ബന്ധിപ്പിക്കുന്ന ഉപകരണം.",
        fullDetails: "CNC, PLC എന്നിവയിൽ നിന്നുള്ള തത്സമയ ഡാറ്റാ ശേഖരണം.",
        metrics: [
          { label: "ഡാറ്റാ സിങ്ക്", value: "<1sec" }
        ],
        technologies: ["AI Data Pipelines", "REST APIs"],
        deliverables: ["സ്വയമേവയുള്ള ഉൽപ്പാദന റിപ്പോർട്ടുകൾ."]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "FlowState Engine സിസ്റ്റം",
        subtitle: "തത്സമയ ഉൽപ്പാദന തടസ്സ മുന്നറിയിപ്പ്",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "ഉൽപ്പാദന തടസ്സങ്ങൾ ഉടനടി കണ്ടെത്തുന്ന സ്വയമേവയുള്ള സംവിധാനം.",
        fullDetails: "ഉൽപ്പാദന ക്ഷമത വർദ്ധിപ്പിക്കാൻ തത്സമയ നിരീക്ഷണം.",
        metrics: [
          { label: "മുന്നറിയിപ്പ്", value: "ഉടനടി" }
        ],
        technologies: ["Real-time Analytics", "AI Logic Engine"],
        deliverables: ["തത്സമയ മുന്നറിയിപ്പ് സംവിധാനം."]
      },
      {
        tag: "AUTOMATION",
        title: "AGIS ഇൻവെന്ററി സിസ്റ്റം",
        subtitle: "സ്വയം നിയന്ത്രിത ഇൻവെന്ററി സിസ്റ്റം",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "സെൻസറുകൾ ഉപയോഗിച്ചുള്ള സ്വയമേവയുള്ള ഇൻവെന്ററി ട്രാക്കിംഗ്.",
        fullDetails: "മനുഷ്യ സഹായമില്ലാതെ ചരക്ക് കണക്കുകൂട്ടലും ഓർഡർ ചെയ്യലും.",
        metrics: [
          { label: "കണക്കുകൂട്ടൽ പിശക്", value: "0%" }
        ],
        technologies: ["Sensors", "Microcontrollers", "Data Analytics"],
        deliverables: ["സ്വയമേവയുള്ള ഇൻവെന്ററി മാനേജ്‌മെന്റ്."]
      }
    ];
  }

  if (lang === 'es') {
    return [
      {
        tag: "THIS_PORTFOLIO_SITE",
        title: "Portafolio Neural de Koushik",
        subtitle: "(Este sitio exacto - Construido en <1 Hora)",
        category: "innovation",
        borderColor: "var(--accent-pink)",
        description: "¡Este sitio web que estás viendo ahora mismo! Diseñado y desplegado en <1 hora usando programación en pareja con IA.",
        fullDetails: "Concebido e ideado usando agentes de IA avanzados.",
        metrics: [
          { label: "Construcción", value: "<1 Hora" },
          { label: "Codificación IA", value: "100%" }
        ],
        technologies: ["React 19", "TypeScript", "Vite", "AI Agents", "Tailwind CSS"],
        deliverables: ["Despliegue rápido en menos de 60 minutos."]
      },
      {
        tag: "CENTRAL_ARCH",
        title: "AmiTpedia Base de Conocimiento",
        subtitle: "Wiki de ingeniería centralizada y repositorio de SOP",
        category: "innovation",
        description: "Desarrolló una wiki de ingeniería centralizada para reducir el tiempo de inactividad.",
        fullDetails: "Repositorio digital unificado con guías de resolución de problemas.",
        metrics: [
          { label: "Inactividad", value: "-40%" }
        ],
        technologies: ["Markdown Wiki", "Search Indexing"],
        deliverables: ["Diagnósticos de campo estandarizados."]
      },
      {
        tag: "DATA_SYNC",
        title: "Factory Sync Tubería de Datos",
        subtitle: "Tubería de telemetría de datos industriales",
        category: "innovation",
        description: "Herramienta de sincronización de datos industriales.",
        fullDetails: "Puente de telemetría de baja latencia que conecta salidas CNC y PLC.",
        metrics: [
          { label: "Latencia", value: "<1seg" }
        ],
        technologies: ["AI Data Pipelines", "REST APIs"],
        deliverables: ["Sincronización fluida."]
      },
      {
        tag: "REAL_TIME_LOGIC",
        title: "Motor FlowState",
        subtitle: "Sistema de alerta de cuello de botella en tiempo real",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "Sistema automatizado en tiempo real para identificar cuellos de botella.",
        fullDetails: "Algoritmos predictivos de monitoreo de flujo.",
        metrics: [
          { label: "Alerta", value: "Instantánea" }
        ],
        technologies: ["Real-time Analytics", "AI Logic Engine"],
        deliverables: ["Monitores visuales de longitud de cola."]
      },
      {
        tag: "AUTOMATION",
        title: "Sistema AGIS Inventario",
        subtitle: "Sistema de inventario gravimétrico autónomo",
        category: "innovation",
        borderColor: "var(--accent-yellow)",
        description: "Sistema de inventario autónomo basado en sensores.",
        fullDetails: "Seguimiento de peso basado en sensores que calcula automáticamente el uso.",
        metrics: [
          { label: "Errores", value: "0%" }
        ],
        technologies: ["Sensors", "Microcontrollers"],
        deliverables: ["Cálculo automático de piezas."]
      }
    ];
  }

  // Default English
  return [
    {
      tag: "THIS_PORTFOLIO_SITE",
      title: "Koushik's Neural Portfolio",
      subtitle: "(This Exact Website - Built in <1 Hour)",
      category: "innovation",
      borderColor: "var(--accent-pink)",
      description: "This portfolio website you are viewing right now! Architected & deployed in <1 hour using AI pair-programming.",
      fullDetails: "Conceived and engineered this exact interactive portfolio platform in under 1 hour using advanced AI coding agents. Features Koushik's Neural Network Intro, Cyber CLI Terminal, Web Audio API synthesizer, HUD spec popups, and responsive theme switching.",
      metrics: [
        { label: "Build Time", value: "<1 Hour" },
        { label: "AI Pair Coding", value: "100%" },
        { label: "Vite Modules", value: "47" }
      ],
      technologies: ["React 19", "TypeScript", "Vite", "AI Coding Agents", "Tailwind CSS", "Web Audio API"],
      deliverables: [
        "Rapid AI-assisted full-stack architecture and UI execution in under 60 minutes.",
        "Interactive Neural Network gateway, Cyber CLI Terminal, custom Web Audio synth engine, and responsive telemetry HUD design."
      ]
    },
    {
      tag: "CENTRAL_ARCH",
      title: "AmiTpedia",
      subtitle: "Centralized Knowledge Wiki & SOP Repository",
      category: "innovation",
      description: "Developed a centralized engineering wiki and SOP repository to drastically reduce field troubleshooting downtime.",
      fullDetails: "Conceived and built AmiTpedia—a unified digital repository containing step-by-step troubleshooting guides, machine parameter maps, and emergency repair SOPs for field application engineers worldwide.",
      metrics: [
        { label: "Downtime Cut", value: "40%" },
        { label: "SOP Guides", value: "250+" },
        { label: "Engineer Adoption", value: "100%" }
      ],
      technologies: ["Markdown Wiki", "Search Indexing", "Knowledge Base", "Documentation Architecture"],
      deliverables: [
        "Standardized field diagnostics across domestic and overseas deployment teams.",
        "Eliminated repeated query escalations by providing offline-accessible SOP manuals."
      ]
    },
    {
      tag: "DATA_SYNC",
      title: "Factory Sync",
      subtitle: "Hardware-to-Management Data Telemetry Pipeline",
      category: "innovation",
      description: "Industrial data synchronization tool bridging factory-floor hardware with management reporting systems.",
      fullDetails: "Engineered a low-latency telemetry bridge connecting CNC machine outputs, PLC logs, and production databases to management BI dashboards for real-time visibility.",
      metrics: [
        { label: "Data Sync Latency", value: "<1sec" },
        { label: "Uptime", value: "99.9%" },
        { label: "Daily Data Points", value: "1M+" }
      ],
      technologies: ["AI Data Pipelines", "REST APIs", "SQL (Basics)", "Industrial IoT", "JSON Buffering"],
      deliverables: [
        "Seamless synchronization between hardware controllers and web reporting dashboards.",
        "Automated hourly production output and error log summaries."
      ]
    },
    {
      tag: "REAL_TIME_LOGIC",
      title: "FlowState Engine",
      subtitle: "Real-Time Manufacturing Bottleneck Alert System",
      category: "innovation",
      borderColor: "var(--accent-yellow)",
      description: "Engineered an automated real-time system to identify and alert manufacturing line bottlenecks instantly.",
      fullDetails: "Developed predictive flow-monitoring algorithms analyzing station queue lengths and machine cycle times to trigger proactive alerts before lines halt.",
      metrics: [
        { label: "Bottleneck Alert", value: "Instant" },
        { label: "Line Efficiency", value: "+18%" }
      ],
      technologies: ["Real-time Analytics", "AI Logic Engine", "Data Stream Processing", "Alerting Engine"],
      deliverables: [
        "Visual queue length monitors for floor supervisors.",
        "SMS & Email notification system for machine error states."
      ]
    },
    {
      tag: "AUTOMATION",
      title: "AGIS",
      subtitle: "Autonomous Gravimetric Inventory System",
      category: "innovation",
      borderColor: "var(--accent-yellow)",
      description: "Proposed Autonomous Gravimetric Inventory System using sensors to eliminate manual auditing errors through automated tracking.",
      fullDetails: "Architected a sensor-based gravimetric weight-tracking inventory system that automatically calculates part usage, updates stock levels, and triggers reorder requests without human manual audits.",
      metrics: [
        { label: "Audit Errors", value: "0%" },
        { label: "Time Saved", value: "15 hrs/wk" }
      ],
      technologies: ["Load Cell Sensors", "Microcontrollers", "AI Predictive Modeling", "Data Analytics"],
      deliverables: [
        "Automated part-count calculation based on high-precision gravimetric sensor inputs.",
        "Integration with ERP database for auto-reordering triggers."
      ]
    },
    {
      tag: "DIGITAL_GEMBA",
      title: "Gembalive (SQDIP & SQDCP)",
      subtitle: "Real-Time Shop-Floor SQDIP & SQDCP Visual Management Platform",
      category: "innovation",
      borderColor: "var(--accent-cyan)",
      description: "Engineered Gembalive, an interactive digital shop-floor platform tracking Safety, Quality, Delivery, Cost/Inventory, and Productivity (SQDIP & SQDCP) in real time.",
      fullDetails: "Architected and deployed Gembalive, an Industry 4.0 digital Gemba kaizen platform replacing legacy whiteboards. Enables real-time KPI tracking across Safety (S), Quality (Q), Delivery (D), Inventory/Cost (I/C), and People/Productivity (P), featuring automated shift handovers, incident escalations, and live production telemetry.",
      metrics: [
        { label: "Framework", value: "SQDIP / SQDCP" },
        { label: "KPI Visibility", value: "100% Real-Time" },
        { label: "Downtime Impact", value: "-65% Response" }
      ],
      technologies: ["Industry 4.0", "SQDIP / SQDCP", "Digital Gemba", "OEE Telemetry", "Shop-Floor Analytics", "IoT Dashboards"],
      deliverables: [
        "Digitized traditional plant whiteboards into real-time interactive SQDIP & SQDCP telemetry screens.",
        "Automated shift-handover logs, safety incident escalation alerts, and quality defect tracking across manufacturing lines."
      ]
    }
  ];
};

const Innovations: React.FC<InnovationsProps> = ({ lang, onSelectProject }) => {
  const t = translations[lang] || translations.en;
  const innovationsData = getInnovationsData(lang);
  const isLatinScript = lang === 'en' || lang === 'de' || lang === 'es' || lang === 'fr';

  return (
    <section id="innovations" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300">
      <div className="mb-12">
        <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          // R&D_CONCEPT_LABS
        </span>
        <h2 className={`text-3xl md:text-5xl text-[var(--accent-pink)] uppercase font-bold border-l-[6px] border-[var(--accent-cyan)] pl-5 transition-colors duration-300 leading-snug break-words max-w-full ${
          isLatinScript ? 'tracking-widest' : 'tracking-normal'
        }`}>
          {t.sec_innovations}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {innovationsData.map((item, index) => (
          <Card 
            key={index}
            tag={item.tag}
            title={item.title}
            description={item.description}
            borderColor={item.borderColor}
            metric={item.metrics ? item.metrics[0].value : undefined}
            onClick={() => onSelectProject(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Innovations;