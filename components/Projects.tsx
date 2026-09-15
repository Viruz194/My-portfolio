import React from 'react';
import Card from './Card';
import { ProjectData } from './ProjectModal';
import { Language, translations } from '../utils/translations';

interface ProjectsProps {
  lang: Language;
  onSelectProject: (project: ProjectData) => void;
}

const getProjectsData = (lang: Language): ProjectData[] => {
  if (lang === 'zh') {
    return [
      {
        tag: "GLOBAL_STATION",
        title: "国际项目外派 (中国)",
        subtitle: "现场实施与印度远程监管 (历时2年持续中)",
        category: "deployment",
        description: "为全球主要工业客户管理技术部署与产品创新，包括长达2年的项目实施与监管（中国现场及印度远程）。",
        fullDetails: "在中国一级工业制造工厂指导高风险 CNC 系统安装、MES 和追溯系统。在现场管理项目生命周期，并继续从印度远程掌控客户账户。",
        metrics: [
          { label: "中国外派使命", value: "2年 (持续中)" },
          { label: "全球服务客户", value: "15+" },
          { label: "现场交付可靠性", value: "100%" }
        ],
        technologies: ["CNC 运动控制", "PLC 集成", "现场校准", "批次追溯", "SOP 标准制定"],
        deliverables: [
          "复杂制造系统的钥匙工程安装与验收测试。",
          "为当地客户工程团队举办专业技术培训会议。",
          "通过制定标准化操作流程减少现场调试阻力。"
        ]
      },
      {
        tag: "PRECISION_ENG",
        title: "CNC 工业 4.0 智能套件",
        subtitle: "高精度系统优化与数据遥测",
        category: "cnc",
        description: "优化 CNC 系统性能，推动高风险工业环境中的生产运营改进。",
        fullDetails: "架构端到端 CNC 调试协议，将实时遥测传感器与中央控制软件集成。设计自动化批次跟踪与 FIFO 规则，消除生产瓶颈。",
        metrics: [
          { label: "停机时间减少", value: "35%" },
          { label: "产能提升", value: "22%" },
          { label: "传感器延迟", value: "<10ms" }
        ],
        technologies: ["CNC 控制器", "PLC 通信", "工业物联网 (IIoT)", "FIFO 排程", "AI 数据分析"],
        deliverables: [
          "实施实时主轴与进给率优化模型。",
          "部署预测性刀具磨损维护的自动报警触发器。",
          "为工厂主管工程化设计简洁的仪表盘集成。"
        ]
      },
      {
        tag: "QA_VALIDATION",
        title: "软件与系统质量保证 (QA)",
        subtitle: "软硬件集成与验收测试",
        category: "qa",
        description: "执行集成测试，确保软硬件交付成果满足功能与技术要求。",
        fullDetails: "领导硬件控制器、固件版本和监督软件接口的全面集成测试套件。编写回归测试套件，确保现场发布期间零关键缺陷。",
        metrics: [
          { label: "测试覆盖率", value: "98%" },
          { label: "拦截现场缺陷", value: "500+" },
          { label: "发布质量", value: "零故障" }
        ],
        technologies: ["集成测试", "硬件在环 (HIL)", "回归测试套件", "Scrum QA", "缺陷跟踪"],
        deliverables: [
          "建立连接硬件信号与软件 UI 的自动化测试协议。",
          "为现场工程团队创建标准化的 QA 验收清单。"
        ]
      }
    ];
  }

  if (lang === 'kn') {
    return [
      {
        tag: "GLOBAL_STATION",
        title: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಯೋಜನೆಗಳು (ಚೀನಾ)",
        subtitle: "ಆನ್‌ಸೈಟ್ & ಭಾರತದ ರಿಮೋಟ್ ನಿರ್ವಹಣೆ (2 ವರ್ಷಗಳು)",
        category: "deployment",
        description: "ಜಾಗತಿಕ ಗ್ರಾಹಕರಿಗೆ ಸಿಸ್ಟಮ್ ನಿಯೋಜನೆ ಮತ್ತು ತಾಂತ್ರಿಕ ಪರಿಹಾರಗಳ ನಿರ್ವಹಣೆ.",
        fullDetails: "ಚೀನಾದ ಉತ್ಪಾದನಾ ಘಟಕಗಳಲ್ಲಿ CNC ಸಿಸ್ಟಮ್ಸ್, MES ಮತ್ತು ಟ್ರೇಸಬಿಲಿಟಿ ಅನುಷ್ಠಾನ.",
        metrics: [
          { label: "ಚೀನಾ ಮಿಷನ್", value: "2 ವರ್ಷಗಳು" },
          { label: "ಜಾಗತಿಕ ಗ್ರಾಹಕರು", value: "15+" },
          { label: "ವಿಶ್ವಾಸಾರ್ಹತೆ", value: "100%" }
        ],
        technologies: ["CNC Motion Control", "PLC Integration", "Batch Tracking"],
        deliverables: [
          "ಉತ್ಪಾದನಾ ವ್ಯವಸ್ಥೆಗಳ ಯಶಸ್ವಿ ಸ್ಥಾಪನೆ ಮತ್ತು ಪರೀಕ್ಷೆ.",
          "ಬಳಕೆದಾರರಿಗೆ ತಾಂತ್ರಿಕ ತರಬೇತಿ."
        ]
      },
      {
        tag: "PRECISION_ENG",
        title: "CNC ಇಂಡಸ್ಟ್ರಿ 4.0 ಸೂಟ್",
        subtitle: "ಸಿಸ್ಟಮ್ಸ್ ಆಪ್ಟಿಮೈಜೇಶನ್",
        category: "cnc",
        description: "ಉತ್ಪಾದನಾ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು CNC ಸಿಸ್ಟಮ್ಸ್ ಆಪ್ಟಿಮೈಜೇಶನ್.",
        fullDetails: "ರಿಯಲ್-ಟೈಮ್ ಡೇಟಾ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು FIFO ನಿಯಮಗಳ ಅನುಷ್ಠಾನ.",
        metrics: [
          { label: "ಸಮಯ ಉಳಿತಾಯ", value: "35%" },
          { label: "ದಕ್ಷತೆ", value: "+22%" },
          { label: "ಲೇಟೆನ್ಸಿ", value: "<10ms" }
        ],
        technologies: ["CNC Controllers", "PLC", "Industrial IoT"],
        deliverables: [
          "ರಿಯಲ್-ಟೈಮ್ ಮಾನಿಟರಿಂಗ್ ಸಿಸ್ಟಮ್ ಅನುಷ್ಠಾನ."
        ]
      },
      {
        tag: "QA_VALIDATION",
        title: "ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಸಿಸ್ಟಮ್ಸ್ QA",
        subtitle: "ಪರೀಕ್ಷೆ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿರ್ವಹಣೆ",
        category: "qa",
        description: "ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ಗುಣಮಟ್ಟವನ್ನು ಖಚಿತಪಡಿಸಲು ಪರೀಕ್ಷೆ.",
        fullDetails: "ಸಿಸ್ಟಮ್ ಟೆಸ್ಟಿಂಗ್ ಮತ್ತು ದೋಷ ನಿವಾರಣೆ.",
        metrics: [
          { label: "ಟೆಸ್ಟ್ ಕವರೇಜ್", value: "98%" },
          { label: "ಗುಣಮಟ್ಟ", value: "ಉತ್ತಮ" }
        ],
        technologies: ["Integration Testing", "Hardware In Loop"],
        deliverables: [
          "ಸ್ವಯಂಚಾಲಿತ ಪರೀಕ್ಷಾ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು."
        ]
      }
    ];
  }

  if (lang === 'hi') {
    return [
      {
        tag: "GLOBAL_STATION",
        title: "अंतर्राष्ट्रीय मिशन (चीन)",
        subtitle: "ऑन-साइट और भारत रिमोट प्रबंधन (2 साल जारी)",
        category: "deployment",
        description: "वैश्विक ग्राहकों के लिए तकनीकी तैनाती और उत्पाद नवाचार का प्रबंधन।",
        fullDetails: "चीन में सीएनसी सिस्टम, एमईएस और ट्रेसिबिलिटी का पूर्ण कार्यान्वयन।",
        metrics: [
          { label: "चीन मिशन", value: "2 साल जारी" },
          { label: "वैश्विक ग्राहक", value: "15+" },
          { label: "विश्वसनीयता", value: "100%" }
        ],
        technologies: ["CNC Motion Control", "PLC Integration", "Batch Tracking"],
        deliverables: [
          "उत्पादन प्रणालियों की सफल स्थापना और परीक्षण।",
          "उपयोगकर्ताओं के लिए तकनीकी प्रशिक्षण।"
        ]
      },
      {
        tag: "PRECISION_ENG",
        title: "सीएनसी इंडस्ट्री 4.0 सूट",
        subtitle: "सिस्टम्स ऑप्टिमाइजेशन",
        category: "cnc",
        description: "सीएनसी सिस्टम के प्रदर्शन को अनुकूलित करना।",
        fullDetails: "रियल-टाइम डेटा मॉनिटरिंग और एफआईएफओ नियमों का कार्यान्वयन।",
        metrics: [
          { label: "डाउनटाइम कमी", value: "35%" },
          { label: "उत्पादन वृद्धि", value: "22%" },
          { label: "लेटेंसी", value: "<10ms" }
        ],
        technologies: ["CNC Controllers", "PLC", "Industrial IoT"],
        deliverables: [
          "रियल-टाइम मॉनिटरिंग सिस्टम का कार्यान्वयन।"
        ]
      },
      {
        tag: "QA_VALIDATION",
        title: "सॉफ्टवेयर और सिस्टम QA",
        subtitle: "परीक्षण और गुणवत्ता प्रबंधन",
        category: "qa",
        description: "हार्डवेयर और सॉफ्टवेयर की गुणवत्ता सुनिश्चित करने के लिए परीक्षण।",
        fullDetails: "सिस्टम टेस्टिंग और बग रोकथाम।",
        metrics: [
          { label: "टेस्ट कवरेज", value: "98%" },
          { label: "गुणवत्ता", value: "उत्कृष्ट" }
        ],
        technologies: ["Integration Testing", "Hardware In Loop"],
        deliverables: [
          "स्वचालित परीक्षण प्रोटोकॉल।"
        ]
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        tag: "GLOBAL_STATION",
        title: "சர்வதேச பணிகள் (சீனா)",
        subtitle: "ஆன்-சைட் & இந்தியா ரிமோட் மேலாண்மை (2 ஆண்டுகள்)",
        category: "deployment",
        description: "உலகளாவிய வாடிக்கையாளர்களுக்கான தொழில்நுட்ப பயன்பாடுகள் மற்றும் திட்ட மேலாண்மை.",
        fullDetails: "சீனாவில் தொழில்துறை உற்பத்தி ஆலைகளில் CNC அமைப்புகள், MES மற்றும் டிரேசிபிலிட்டி அமலாக்கம்.",
        metrics: [
          { label: "சீனா பணி", value: "2 ஆண்டுகள்" },
          { label: "வாடிக்கையாளர்கள்", value: "15+" }
        ],
        technologies: ["CNC Motion Control", "PLC Integration"],
        deliverables: ["உற்பத்தி அமைப்புகளின் நிறுவல் மற்றும் சோதனை."]
      },
      {
        tag: "PRECISION_ENG",
        title: "CNC இண்டஸ்ட்ரி 4.0 சூட்",
        subtitle: "அமைப்புகள் மேம்பாடு",
        category: "cnc",
        description: "CNC அமைப்புகளின் செயல்பாட்டை மேம்படுத்துதல்.",
        fullDetails: "நிகழ்நேர தரவு கண்காணிப்பு மற்றும் அமைப்புகள் மேலாண்மை.",
        metrics: [
          { label: "நேர சேமிப்பு", value: "35%" }
        ],
        technologies: ["CNC Controllers", "PLC"],
        deliverables: ["நிகழ்நேர கண்காணிப்பு அமைப்பு."]
      },
      {
        tag: "QA_VALIDATION",
        title: "மென்பொருள் மற்றும் அமைப்புகள் QA",
        subtitle: "சோதனை மற்றும் தரம்",
        category: "qa",
        description: "மென்பொருள் மற்றும் வன்பொருள் தரத்தை உறுதிப்படுத்த சோதனை.",
        fullDetails: "அமைப்புகள் சோதனை மற்றும் பிழை தடுப்பு.",
        metrics: [
          { label: "சோதனை", value: "98%" }
        ],
        technologies: ["Integration Testing"],
        deliverables: ["தானியங்கி சோதனை நெறிமுறைகள்."]
      }
    ];
  }

  if (lang === 'ml') {
    return [
      {
        tag: "GLOBAL_STATION",
        title: "അന്താരാഷ്ട്ര ദൗത്യങ്ങൾ (ചൈന)",
        subtitle: "ഓൺ-സൈറ്റ് & ഇന്ത്യ റിമോട്ട് മേൽനോട്ടം (2 വർഷം)",
        category: "deployment",
        description: "ആഗോള ഉപഭോക്താക്കൾക്കായുള്ള സാങ്കേതിക വിന്യാസവും പ്രോജക്റ്റ് മാനേജ്‌മെന്റും.",
        fullDetails: "ചൈനയിലെ വ്യാവസായിക പ്ലാന്റുകളിൽ CNC സിസ്റ്റങ്ങൾ, MES, ട്രെയ്സബിലിറ്റി എന്നിവ നടപ്പിലാക്കൽ.",
        metrics: [
          { label: "ചൈന ദൗത്യം", value: "2 വർഷം" },
          { label: "ഉപഭോക്താക്കൾ", value: "15+" }
        ],
        technologies: ["CNC Motion Control", "PLC Integration"],
        deliverables: ["സിസ്റ്റം ഇൻസ്റ്റാളേഷനും പരിശോധനയും."]
      },
      {
        tag: "PRECISION_ENG",
        title: "CNC ഇൻഡസ്ട്രി 4.0 സൂട്ട്",
        subtitle: "സിസ്റ്റംസ് ഒപ്റ്റിമൈസേഷൻ",
        category: "cnc",
        description: "CNC സിസ്റ്റങ്ങളുടെ പ്രവർത്തനം മെച്ചപ്പെടുത്തൽ.",
        fullDetails: "തത്സമയ ഡാറ്റ നിരീക്ഷണവും സിസ്റ്റം മാനേജ്‌മെന്റും.",
        metrics: [
          { label: "സമയ ലാഭം", value: "35%" }
        ],
        technologies: ["CNC Controllers", "PLC"],
        deliverables: ["തത്സമയ നിരീക്ഷണ സംവിധാനം."]
      },
      {
        tag: "QA_VALIDATION",
        title: "സോഫ്റ്റ്‌വെയർ & സിസ്റ്റംസ് QA",
        subtitle: "പരിശോധനയും ഗുണനിലവാരവും",
        category: "qa",
        description: "സോഫ്റ്റ്‌വെയറിന്റെയും ഹാർഡ്‌വെയറിന്റെയും ഗുണനിലവാരം ഉറപ്പാക്കൽ.",
        fullDetails: "സിസ്റ്റം പരിശോധനയും പിശക് പരിഹാരവും.",
        metrics: [
          { label: "ടെസ്റ്റിംഗ്", value: "98%" }
        ],
        technologies: ["Integration Testing"],
        deliverables: ["ഓട്ടോമേറ്റഡ് ടെസ്റ്റിംഗ് പ്രോട്ടോക്കോളുകൾ."]
      }
    ];
  }

  // Default English
  return [
    {
      tag: "GLOBAL_STATION",
      title: "International Missions (China)",
      subtitle: "On-Site & India Remote Oversight (2 Years Ongoing)",
      category: "deployment",
      description: "Managed technical deployments and product innovation for major global customers, including 2 years of ongoing project oversight (onsite in China and remote from India).",
      fullDetails: "Directed high-stakes CNC system installations, MES, and Traceability across Tier-1 industrial manufacturing plants in China. Managed project lifecycles onsite and continues full account ownership remotely from India.",
      metrics: [
        { label: "China Mission", value: "2 Yrs (Ongoing)" },
        { label: "Global Customers", value: "15+" },
        { label: "Onsite Reliability", value: "100%" }
      ],
      technologies: ["CNC Motion Control", "PLC Integration", "On-Site Calibration", "Batch Tracking", "SOP Development"],
      deliverables: [
        "Turnkey installation and acceptance testing of complex manufacturing systems.",
        "Conducted specialized technical training sessions for local customer engineering teams.",
        "Reduced commissioning friction by creating standardized operational protocols."
      ]
    },
    {
      tag: "PRECISION_ENG",
      title: "CNC Industry 4.0 Suite",
      subtitle: "High-Precision Systems Optimization & Telemetry",
      category: "cnc",
      description: "Optimizing CNC system performance and driving operational improvements within high-stakes industrial environments.",
      fullDetails: "Architected end-to-end CNC tuning protocols, integrating real-time telemetry sensors with central control software. Designed automated batch tracking and FIFO rules to eliminate production bottlenecks.",
      metrics: [
        { label: "Downtime Reduced", value: "35%" },
        { label: "Throughput Boost", value: "22%" },
        { label: "Sensor Latency", value: "<10ms" }
      ],
      technologies: ["CNC Controllers", "PLC Communication", "Industrial IoT", "FIFO Scheduling", "AI Analytics"],
      deliverables: [
        "Implemented real-time spindle and feed rate optimization models.",
        "Deployed automated alert triggers for predictive tool-wear maintenance.",
        "Engineered clean dashboard integrations for plant supervisors."
      ]
    },
    {
      tag: "QA_VALIDATION",
      title: "Software & Systems QA",
      subtitle: "Hardware-Software Integration & Acceptance Testing",
      category: "qa",
      description: "Performed integration testing to ensure hardware and software deliverables met functional and technical requirements.",
      fullDetails: "Led comprehensive integration test suites across hardware controllers, firmware builds, and supervisory software interfaces. Authored regression test suites ensuring zero critical bugs during field releases.",
      metrics: [
        { label: "Test Coverage", value: "98%" },
        { label: "Field Bugs Prevented", value: "500+" },
        { label: "Release Quality", value: "Zero Fail" }
      ],
      technologies: ["Integration Testing", "Hardware In Loop (HIL)", "Regression Suites", "Scrum QA", "Bug Tracking"],
      deliverables: [
        "Established automated testing protocols bridging hardware signals with software UI.",
        "Created standardized QA sign-off checklists for field engineering teams."
      ]
    }
  ];
};

const Projects: React.FC<ProjectsProps> = ({ lang, onSelectProject }) => {
  const t = translations[lang] || translations.en;
  const projectsData = getProjectsData(lang);

  return (
    <section id="projects" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300">
      <div className="mb-12">
        <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          // FIELD_DEPLOYMENT_RECORDS
        </span>
        <h2 className="text-4xl text-[var(--accent-pink)] uppercase tracking-widest font-bold border-l-[6px] border-[var(--accent-cyan)] pl-5 transition-colors duration-300">
          {t.sec_projects}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {projectsData.map((project, index) => (
          <Card 
            key={index}
            tag={project.tag}
            title={project.title}
            description={project.description}
            metric={project.metrics ? project.metrics[0].value : undefined}
            onClick={() => onSelectProject(project)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;