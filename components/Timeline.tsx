import React from 'react';
import { playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  location: string;
  tag: string;
  highlights: string[];
  isHighlighted?: boolean;
}

const getTimelineData = (lang: Language): TimelineEvent[] => {
  if (lang === 'zh') {
    return [
      {
        year: '2026年6月 - 至今',
        role: '首席工程师 - 区域负责人',
        company: 'AceMicromatic 智能制造科技',
        location: '印度 班加罗尔',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          '领导涵盖 MES、追溯系统、OEE、SPC、TPM、刀具寿命监测和工业物联网 (IIoT) 解决方案的端到端工业数字化转型项目。',
          '全面管理从客户需求分析、售前支持到方案构思、应用/UI 开发、测试、调试及项目交付的完整生命周期。',
          '将车间制造需求转化为可部署的软件、应用程序及设备集成解决方案。'
        ]
      },
      {
        year: '2024年10月 - 至今 (历时2年持续中)',
        role: '高级应用工程师 - 中国项目外派',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: '中国 (现场实施与印度远程监管)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          '在中国现场负责 Sundram Fasteners (Zhejiang) Limited 的全厂 MES 与追溯系统实施部署（历时2年且持续中，目前从印度进行远程管理与督导）。',
          '成功执行应用程序安装、调试、生产上线部署及老旧设备的联网采集。',
          '持续全面掌控中国客户账户的 MES、追溯系统、技术协调及来自印度的新需求对接。'
        ]
      },
      {
        year: '2022年6月 - 2024年9月',
        role: '高级应用工程师',
        company: 'AceMicromatic 智能制造科技',
        location: '印度 班加罗尔',
        tag: 'INDUSTRY_4.0',
        highlights: [
          '管理工业物联网及制造软件项目的执行、客户需求对接、方案讨论和应用支持。',
          '支持售前工程活动，包括技术交流、产品演示、项目报价和相关利益方协调。',
          '与软件开发团队密切合作，完成定制化应用需求与客户特定功能增强。'
        ]
      },
      {
        year: '2016年6月 - 2022年5月',
        role: '应用工程师与学术深造',
        company: 'AceMicromatic 集团 / 维斯瓦拉亚科技大学',
        location: '印度 班加罗尔',
        tag: 'DATA_SCIENCE',
        highlights: [
          '在应用工程、项目执行及区域客户领导力方面实现职业生涯的阶梯式成长。',
          '在维斯瓦拉亚科技大学攻读计算机应用学士 (BCA)，主修数据科学与数据分析。',
          '将10年以上的工业现场经验与 AI 辅助软件及数字化转型解决方案融会贯通。'
        ]
      }
    ];
  }

  if (lang === 'kn') {
    return [
      {
        year: 'ಜೂನ್ 2026 - ಪ್ರಸ್ತುತ',
        role: 'ಪ್ರಿನ್ಸಿಪಲ್ ಇಂಜಿನಿಯರ್ - ರೀಜನಲ್ ಲೀಡ್',
        company: 'AceMicromatic ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಟೆಕ್ನಾಲಜೀಸ್',
        location: 'ಬೆಂಗಳೂರು, ಭಾರತ',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          'MES, ಟ್ರೇಸಬಿಲಿಟಿ, OEE, SPC, TPM, ಟೂಲ್ ಲೈಫ್ ಮಾನಿಟರಿಂಗ್ ಮತ್ತು Industrial IoT ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಅಂತ್ಯದಿಂದ ಅಂತ್ಯದ ಕೈಗಾರಿಕಾ ಡಿಜಿಟಲ್ ರೂಪಾಂತರ ಉಪಕ್ರಮಗಳನ್ನು ಮುನ್ನಡೆಸುವುದು.',
          'ಗ್ರಾಹಕರ ಅಗತ್ಯಗಳ ವಿಶ್ಲೇಷಣೆ, ಪ್ರಿ-ಸೇಲ್ಸ್, ಪರಿಹಾರ ಕಲ್ಪನೆ, ಅಪ್ಲಿಕೇಶನ್/UI ಅಭಿವೃದ್ಧಿ, ಪರೀಕ್ಷೆ, ಕಮಿಷನಿಂಗ್ ಮತ್ತು ಯೋಜನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ತಲುಪಿಸುವುದು.',
          'ಉತ್ಪಾದನಾ ಘಟಕದ ಅಗತ್ಯಗಳನ್ನು ಸಾಫ್ಟ್‌ವೇರ್, ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ಮೆಷಿನ್ ಇಂಟಿಗ್ರೇಷನ್ ಪರಿಹಾರಗಳಾಗಿ ಪರಿವರ್ತಿಸುವುದು.'
        ]
      },
      {
        year: 'ಅಕ್ಟೋಬರ್ 2024 - ಪ್ರಸ್ತುತ (2 ವರ್ಷಗಳು)',
        role: 'ಹಿರಿಯ ಅಪ್ಲಿಕೇಶನ್ ಇಂಜಿನಿಯರ್ - ಚೀನಾ ಪ್ರಾಜೆಕ್ಟ್ ಕಾರ್ಯನಿಯೋಜನೆ',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: 'ಚೀನಾ (ಆನ್‌ಸೈಟ್ & ಭಾರತದ ರಿಮೋಟ್ ನಿರ್ವಹಣೆ)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          'ಸುಂದರಂ ಫಾಸ್ಟನರ್ಸ್ (ಝೆಜಿಯಾಂಗ್) ಲಿಮಿಟೆಡ್‌ನಲ್ಲಿ ಸಂಪೂರ್ಣ ಪ್ಲಾಂಟ್ MES ಮತ್ತು ಟ್ರೇಸಬಿಲಿಟಿ ಅನುಷ್ಠಾನಕ್ಕಾಗಿ ಚೀನಾದಲ್ಲಿ ಸ್ಥಳದಲ್ಲೇ ಜವಾಬ್ದಾರಿ ವಹಿಸಿಕೊಂಡಿದ್ದು (2 ವರ್ಷಗಳು ಪ್ರಸ್ತುತ ಭಾರತದಿಂದ ನಿರ್ವಹಣೆ).',
          'ಅಪ್ಲಿಕೇಶನ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್, ಕಮಿಷನಿಂಗ್, ಉತ್ಪಾದನಾ ನಿಯೋಜನೆ ಮತ್ತು ಹಳೆಯ ಯಂತ್ರಗಳ ಸಂಪರ್ಕವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸಲಾಗಿದೆ.',
          'MES, ಟ್ರೇಸಬಿಲಿಟಿ, ತಾಂತ್ರಿಕ ಸಮನ್ವಯ ಮತ್ತು ಭಾರತದಿಂದ ಹೊಸ ಅಗತ್ಯಗಳಿಗಾಗಿ ಚೀನಾ ಪ್ರಾಜೆಕ್ಟ್‌ ಅನ್ನು ಸಕ್ರಿಯವಾಗಿ ನಿರ್ವಹಿಸುತ್ತಿದ್ದೇನೆ.'
        ]
      },
      {
        year: 'ಜೂನ್ 2022 - ಸೆಪ್ಟೆಂಬರ್ 2024',
        role: 'ಹಿರಿಯ ಅಪ್ಲಿಕೇಶನ್ ಇಂಜಿನಿಯರ್',
        company: 'AceMicromatic ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಟೆಕ್ನಾಲಜೀಸ್',
        location: 'ಬೆಂಗಳೂರು, ಭಾರತ',
        tag: 'INDUSTRY_4.0',
        highlights: [
          'ಇಂಡಸ್ಟ್ರಿಯಲ್ IoT ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್ ಯೋಜನೆಗಳಿಗಾಗಿ ಪ್ರಾಜೆಕ್ಟ್ ಅನುಷ್ಠಾನ, ಗ್ರಾಹಕರ ಅಗತ್ಯಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ಬೆಂಬಲ ನಿರ್ವಹಣೆ.',
          'ತಾಂತ್ರಿಕ ಚರ್ಚೆಗಳು, ಉತ್ಪನ್ನ ಡೆಮೊಗಳು ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ಕೋಟೇಷನ್‌ಗಳು ಸೇರಿದಂತೆ ಪ್ರಿ-ಸೇಲ್ಸ್ ಇಂಜಿನಿಯರಿಂಗ್ ಚಟುವಟಿಕೆಗಳಿಗೆ ಬೆಂಬಲ.',
          'ಗ್ರಾಹಕ-ನಿರ್ದಿಷ್ಟ ಅಗತ್ಯಗಳಿಗಾಗಿ ಸಾಫ್ಟ್‌ವೇರ್ ಡೆವಲಪ್ಮೆಂಟ್ ತಂಡಗಳೊಂದಿಗೆ ನಿಕಟವಾಗಿ ಕೆಲಸ ಮಾಡಿರುವುದು.'
        ]
      },
      {
        year: 'ಜೂನ್ 2016 - ಮೇ 2022',
        role: 'ಅಪ್ಲಿಕೇಶನ್ ಇಂಜಿನಿಯರ್ & ಅಕಾಡೆಮಿಕ್ ತಜ್ಞತೆ',
        company: 'AceMicromatic ಗ್ರೂಪ್ / ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯ',
        location: 'ಬೆಂಗಳೂರು, ಭಾರತ',
        tag: 'DATA_SCIENCE',
        highlights: [
          'ಅಪ್ಲಿಕೇಶನ್ ಇಂಜಿನಿಯರಿಂಗ್, ಪ್ರಾಜೆಕ್ಟ್ ಅನುಷ್ಠಾನ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಗ್ರಾಹಕರ ನಾಯಕತ್ವದಲ್ಲಿ ವೃತ್ತಿಪರ ಬೆಳವಣಿಗೆ.',
          'ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯದಲ್ಲಿ ಡೇಟಾ ಸೈನ್ಸ್ & ಅನಾಲಿಟಿಕ್ಸ್ ವಿಷಯದಲ್ಲಿ ಕಂಪ್ಯೂಟರ್ ಅಪ್ಲಿಕೇಶನ್ (BCA) ಪದವಿ.',
          '10+ ವರ್ಷಗಳ ಕೈಗಾರಿಕಾ ಅನುಭವವನ್ನು AI-ಸಹಾಯದ ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಟ್ರಾನ್ಸ್‌ಫಾರ್ಮೇಷನ್ ಪರಿಹಾರಗಳೊಂದಿಗೆ ಸಂಯೋಜಿಸುವುದು.'
        ]
      }
    ];
  }

  if (lang === 'hi') {
    return [
      {
        year: 'जून 2026 - वर्तमान',
        role: 'प्रिंसिपल इंजीनियर - रीजनल लीड',
        company: 'AceMicromatic मैन्युफैक्चरिंग इंटेलिजेंस टेक्नोलॉजीज',
        location: 'बेंगलुरु, भारत',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          'MES, ट्रेसिबिलिटी, OEE, SPC, TPM, टूल लाइफ मॉनिटरिंग और इंडस्ट्रियल IoT समाधानों सहित एंड-टू-एंड औद्योगिक डिजिटल परिवर्तन पहलों का नेतृत्व करना।',
          'ग्राहक आवश्यकताओं के विश्लेषण और प्री-सेल्स से लेकर समाधान विचार, एप्लिकेशन/UI विकास, परीक्षण, कमीशनिंग और परियोजना वितरण तक जीवनचक्र का प्रबंधन करना।',
          'शॉप-फ्लोर विनिर्माण आवश्यकताओं को सॉफ़्टवेयर, एप्लिकेशन और मशीन-एकीकरण समाधानों में अनुवादित करना।'
        ]
      },
      {
        year: 'अक्टूबर 2024 - वर्तमान (2 साल जारी)',
        role: 'सीनियर एप्लिकेशन इंजीनियर - चीन प्रोजेक्ट असाइनमेंट',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: 'चीन (ऑन-साइट और भारत रिमोट प्रबंधन)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          'सुंदरम फास्टनर्स (झेजियांग) लिमिटेड में पूरे प्लांट के MES और ट्रेसिबिलिटी कार्यान्वयन के लिए चीन में ऑनसाइट जिम्मेदारी संभाली (2 साल जारी, वर्तमान में भारत से प्रबंधन)।',
          'एप्लिकेशन इंस्टॉल, कमीशनिंग, प्रोडक्शन डिप्लॉयमेंट और पुरानी मशीनों की कनेक्टिविटी निष्पादित की।',
          'MES, ट्रेसिबिलिटी, तकनीकी समन्वय और भारत से नई आवश्यकताओं के लिए चीन खाते का निरंतर स्वामित्व बनाए रखना।'
        ]
      },
      {
        year: 'जून 2022 - सितंबर 2024',
        role: 'सीनियर एप्लिकेशन इंजीनियर',
        company: 'AceMicromatic मैन्युफैक्चरिंग इंटेलिजेंस टेक्नोलॉजीज',
        location: 'बेंगलुरु, भारत',
        tag: 'INDUSTRY_4.0',
        highlights: [
          'इंडस्ट्रियल IoT और मैन्युफैक्चरिंग सॉफ्टवेयर प्रोजेक्ट्स के लिए प्रोजेक्ट एग्जीक्यूशन, ग्राहक आवश्यकताओं और सिस्टम सपोर्ट का प्रबंधन किया।',
          'तकनीकी चर्चाओं, उत्पाद प्रदर्शनों और प्रोजेक्ट कोटेशन सहित प्री-सेल्स इंजीनियरिंग गतिविधियों का समर्थन किया।',
          'कस्टम एप्लिकेशन आवश्यकताओं के लिए सॉफ्टवेयर डेवलपमेंट टीमों के साथ मिलकर काम किया।'
        ]
      },
      {
        year: 'जून 2016 - मई 2022',
        role: 'एप्लिकेशन इंजीनियर और अकादमिक विशेषज्ञता',
        company: 'AceMicromatic ग्रुप / विश्वेश्वरैया प्रौद्योगिकी विश्वविद्यालय',
        location: 'बेंगलुरु, भारत',
        tag: 'DATA_SCIENCE',
        highlights: [
          'एप्लिकेशन इंजीनियरिंग, प्रोजेक्ट एग्जीक्यूशन और क्षेत्रीय ग्राहक नेतृत्व में निरंतर प्रगतिशील विकास।',
          'विश्वेश्वरैया प्रौद्योगिकी विश्वविद्यालय में डेटा साइंस और डेटा एनालिटिक्स में कंप्यूटर एप्लीकेशन (BCA) स्नातक।',
          '10+ वर्षों के औद्योगिक अनुभव को एआई-सहायता प्राप्त सॉफ्टवेयर और डिजिटल समाधानों के साथ जोड़ना।'
        ]
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        year: 'ஜூன் 2026 - தற்பொழுது',
        role: 'முதன்மை பொறியாளர் - பிராந்திய தலைவர்',
        company: 'AceMicromatic உற்பத்தி நுண்ணறிவு தொழில் நுட்பங்கள்',
        location: 'பெங்களூரு, இந்தியா',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          'MES, டிரேசிபிலிட்டி, OEE, SPC, TPM மற்றும் தொழில்துறை IoT தீர்வுகளை உள்ளடக்கிய டிஜிட்டல் மாற்ற முயற்சிகளை முன்னெடுப்பது.',
          'வாடிக்கையாளர் தேவைகள் பகுப்பாய்வு முதல் திட்டம் செயல்படுத்தல் மற்றும் விநியோகம் வரை முழுமையான மேலாண்மை.',
          'உற்பத்தித் தேவைகளை மென்பொருள் மற்றும் இயந்திர ஒருங்கிணைப்பு தீர்வுகளாக மாற்றுதல்.'
        ]
      },
      {
        year: 'அக்டோபர் 2024 - தற்பொழுது (2 ஆண்டுகள்)',
        role: 'மூத்த பயன்பாட்டு பொறியாளர் - சீனா திட்டப்பணி',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: 'சீனா (ஆன்-சைட் & இந்தியா ரிமோட் மேற்பார்வை)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          'சுந்தரம் ஃபாஸ்டனர்ஸ் (ஜேஜியாங்) லிமிடெட்டில் MES மற்றும் டிரேசிபிலிட்டி அமலாக்கத்திற்கான பொறுப்பு (2 ஆண்டுகள், தற்போது இந்தியாவில் இருந்து நிர்வாகம்).',
          'பயன்பாட்டு நிறுவல், உற்பத்தி வரிசைப்படுத்தல் மற்றும் இயந்திர இணைப்பு.',
          'தொழில்நுட்ப ஒருங்கிணைப்பு மற்றும் புதிய தேவைகளுக்கான முழு கணக்கு உரிமை.'
        ]
      },
      {
        year: 'ஜூன் 2022 - செப்டம்பர் 2024',
        role: 'மூத்த பயன்பாட்டு பொறியாளர்',
        company: 'AceMicromatic உற்பத்தி நுண்ணறிவு தொழில் நுட்பங்கள்',
        location: 'பெங்களூரு, இந்தியா',
        tag: 'INDUSTRY_4.0',
        highlights: [
          'தொழில்துறை IoT மற்றும் மென்பொருள் திட்டங்களுக்கான திட்ட அமலாக்கம் மற்றும் வாடிக்கையாளர் ஆதரவு.',
          'தொழில்நுட்ப விவாதங்கள் மற்றும் தயாரிப்பு விளக்கங்கள் உள்ளிட்ட விற்பனை முன் ஆதரவு.',
          'வாடிக்கையாளர் குறிப்பிட்ட தேவைகளுக்காக மென்பொருள் மேம்பாட்டுக் குழுக்களுடன் இணைந்து பணியாற்றுதல்.'
        ]
      },
      {
        year: 'ஜூன் 2016 - மே 2022',
        role: 'பயன்பாட்டு பொறியாளர் & கல்வி சிறப்பு',
        company: 'AceMicromatic குரூப் / விஸ்வேஸ்வரய்யா தொழில்நுட்ப பல்கலைக்கழகம்',
        location: 'பெங்களூரு, இந்தியா',
        tag: 'DATA_SCIENCE',
        highlights: [
          'பயன்பாட்டு பொறியியல் மற்றும் திட்ட அமலாக்கத்தில் தொடர்ச்சியான தொழில் வளர்ச்சி.',
          'விஸ்வேஸ்வரய்யா தொழில்நுட்ப பல்கலைக்கழகத்தில் தரவு அறிவியலில் இளங்கலை (BCA) பட்டம்.',
          '10+ ஆண்டுகால தொழில்துறை அனுபவத்தை AI-உதவி மென்பொருள் தீர்வுகளுடன் இணைத்தல்.'
        ]
      }
    ];
  }

  if (lang === 'ml') {
    return [
      {
        year: 'ജൂൺ 2026 - നിലവിൽ',
        role: 'പ്രിൻസിപ്പൽ എഞ്ചിനീയർ - റീജിയണൽ ലീഡ്',
        company: 'AceMicromatic മാനുഫാക്ചറിംഗ് ഇന്റലിജൻസ് ടെക്നോളജീസ്',
        location: 'ബംഗളൂരു, ഇന്ത്യ',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          'MES, ട്രെയ്സബിലിറ്റി, OEE, SPC, TPM, ഇൻഡസ്ട്രിയൽ IoT പരിഹാരങ്ങൾ എന്നിവയുൾപ്പെടെയുള്ള വ്യാവസായിക ഡിജിറ്റൽ പരിവർത്തനങ്ങൾക്ക് നേതൃത്വം നൽകുന്നു.',
          'ഉപഭോക്തൃ ആവശ്യങ്ങളുടെ വിശകലനം മുതൽ പ്രോജക്റ്റ് ഡെലിവറി വരെയുള്ള പൂർണ്ണ ഉത്തരവാദിത്തം.',
          'ഫാക്ടറി ആവശ്യങ്ങളെ സോഫ്റ്റ്‌വെയർ, ആപ്ലിക്കേഷൻ, മെഷീൻ ഇന്റഗ്രേഷൻ പരിഹാരങ്ങളാക്കി മാറ്റുന്നു.'
        ]
      },
      {
        year: 'ഒക്ടോബർ 2024 - നിലവിൽ (2 വർഷം)',
        role: 'സീനിയർ ആപ്ലിക്കേഷൻ എഞ്ചിനീയർ - ചൈന പ്രോജക്റ്റ് ചുമതല',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: 'ചൈന (ഓൺ-സൈറ്റ് & ഇന്ത്യ റിമോട്ട് മേൽനോട്ടം)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          'സുന്ദരം ഫാസ്റ്റനേഴ്‌സിൽ പൂർണ്ണ പ്ലാന്റ് MES, ട്രെയ്സബിലിറ്റി നടപ്പിലാക്കൽ നിർവ്വഹിച്ചു (2 വർഷം, നിലവിൽ ഇന്ത്യയിൽ നിന്ന് നിയന്ത്രിക്കുന്നു).',
          'ആപ്ലിക്കേഷൻ ഇൻസ്റ്റാളേഷൻ, കമ്മീഷനിംഗ്, ഉൽപ്പാദന വിന്യാസം എന്നിവ നടത്തി.',
          'സാങ്കേതിക ഏകോപനവും പുതിയ ആവശ്യങ്ങളും സജീവമായി കൈകാര്യം ചെയ്യുന്നു.'
        ]
      },
      {
        year: 'ജൂൺ 2022 - സെപ്റ്റംബർ 2024',
        role: 'സീനിയർ ആപ്ലിക്കേഷൻ എഞ്ചിനീയർ',
        company: 'AceMicromatic മാനുഫാക്ചറിംഗ് ഇന്റലിജൻസ് ടെക്നോളജീസ്',
        location: 'ബംഗളൂരു, ഇന്ത്യ',
        tag: 'INDUSTRY_4.0',
        highlights: [
          'ഇൻഡസ്ട്രിയൽ IoT പ്രോജക്റ്റുകളുടെ നിർവ്വഹണവും ഉപഭോക്തൃ പിന്തുണയും കൈകാര്യം ചെയ്തു.',
          'സാങ്കേതിക ചർച്ചകളും ഉൽപ്പന്ന പ്രദർശനങ്ങളും ഉൾപ്പെടെയുള്ള പ്രീ-സെയിൽസ് പിന്തുണ.',
          'സോഫ്റ്റ്‌വെയർ വികസന ടീമുകളുമായി ചേർന്ന് പ്രവർത്തിച്ചു.'
        ]
      },
      {
        year: 'ജൂൺ 2016 - മേയ് 2022',
        role: 'ആപ്ലിക്കേഷൻ എഞ്ചിനീയർ & അക്കാദമിക് വിദഗ്ദ്ധത',
        company: 'AceMicromatic ഗ്രൂപ്പ് / വിശ്വേശ്വരയ്യ സാങ്കേതിക സർവ്വകലാശാല',
        location: 'ബംഗളൂരു, ഇന്ത്യ',
        tag: 'DATA_SCIENCE',
        highlights: [
          'ആപ്ലിക്കേഷൻ എഞ്ചിനീയറിംഗിലും പ്രോജക്റ്റ് നിർവ്വഹണത്തിലും മികച്ച തൊഴിൽ വളർച്ച.',
          'വിശ്വേശ്വരയ്യ സാങ്കേതിക സർവ്വകലാശാലയിൽ നിന്ന് ഡാറ്റാ സയൻസിൽ ബിരുദം (BCA).',
          '10+ വർഷത്തെ വ്യാവസായിക പരിചയം AI സാങ്കേതികവിദ്യയുമായി സമന്വയിപ്പിക്കുന്നു.'
        ]
      }
    ];
  }

  if (lang === 'es') {
    return [
      {
        year: 'JUNIO 2026 - PRESENTE',
        role: 'Ingeniero Principal - Líder Regional',
        company: 'AceMicromatic Manufacturing Intelligence Technologies',
        location: 'Bengaluru, India',
        tag: 'REGIONAL_LEAD',
        isHighlighted: true,
        highlights: [
          'Liderar iniciativas de transformación digital industrial de extremo a extremo que cubren MES, trazabilidad, OEE, SPC, TPM y soluciones de IoT industrial.',
          'Gestionar el ciclo de vida completo de la solución desde el análisis de requisitos del cliente hasta la entrega del proyecto.',
          'Traducir los requisitos de fabricación del taller en software desplegable y soluciones de integración de máquinas.'
        ]
      },
      {
        year: 'OCT 2024 - PRESENTE (2 AÑOS EN CURSO)',
        role: 'Ingeniero de Aplicaciones Senior - Asignación China',
        company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
        location: 'China (En sitio y supervisión remota desde India)',
        tag: 'GLOBAL_STATION',
        isHighlighted: true,
        highlights: [
          'Asumió la responsabilidad en China para la implementación de MES y trazabilidad en toda la planta (2 años en curso, actualmente gestionando desde India).',
          'Ejecutó instalación de aplicaciones, puesta en marcha, despliegue de producción y conectividad de máquinas legadas.',
          'Mantener la propiedad continua de la cuenta de China para MES, trazabilidad y coordinación técnica.'
        ]
      },
      {
        year: 'JUNIO 2022 - SEP 2024',
        role: 'Ingeniero de Aplicaciones Senior',
        company: 'AceMicromatic Manufacturing Intelligence Technologies',
        location: 'Bengaluru, India',
        tag: 'INDUSTRY_4.0',
        highlights: [
          'Gestión de ejecución de proyectos, requisitos de clientes y soporte de aplicaciones para IoT industrial.',
          'Soporte en actividades de ingeniería de preventa, discusiones técnicas y demostraciones de productos.',
          'Trabajo cercano con equipos de desarrollo de software en requisitos de aplicaciones personalizadas.'
        ]
      },
      {
        year: 'JUNIO 2016 - MAYO 2022',
        role: 'Ingeniero de Aplicaciones y Especialización Académica',
        company: 'Grupo AceMicromatic / Universidad Tecnológica Visweswaraya',
        location: 'Bengaluru, India',
        tag: 'DATA_SCIENCE',
        highlights: [
          'Crecimiento profesional progresivo en ingeniería de aplicaciones y liderazgo de clientes regionales.',
          'Estudiante de Licenciatura en Aplicaciones Informáticas (BCA) especializándose en Ciencia de Datos en la Universidad Visweswaraya.',
          'Uniendo 10+ años de experiencia industrial en el campo con software asistido por IA.'
        ]
      }
    ];
  }

  // Default English
  return [
    {
      year: 'JUNE 2026 - PRESENT',
      role: 'Principal Engineer - Regional Lead',
      company: 'AceMicromatic Manufacturing Intelligence Technologies',
      location: 'Bengaluru, India',
      tag: 'REGIONAL_LEAD',
      isHighlighted: true,
      highlights: [
        'Lead end-to-end Industrial Digital Transformation initiatives covering MES, Traceability, OEE, SPC, TPM, Tool Life Monitoring, and Industrial IoT solutions.',
        'Manage complete solution lifecycle from customer requirement analysis and pre-sales through solution ideation, application/UI development, testing, commissioning, and project delivery.',
        'Translate shop-floor manufacturing requirements into deployable software, application, and machine-integration solutions.'
      ]
    },
    {
      year: 'OCT 2024 - PRESENT (2 YRS ONGOING)',
      role: 'Senior Application Engineer - China Project Assignment',
      company: 'Sundram Fasteners (Zhejiang) Limited / AceMicromatic',
      location: 'China (Onsite & India Remote Oversight)',
      tag: 'GLOBAL_STATION',
      isHighlighted: true,
      highlights: [
        'Took onsite responsibility in China for full-plant MES and Traceability implementation at Sundram Fasteners (Zhejiang) Limited (2 years ongoing, currently managing from India).',
        'Executed application installation, commissioning, production deployment, and legacy machine connectivity.',
        'Maintaining ongoing ownership of China account for MES, Traceability, technical coordination, and new requirements from India.'
      ]
    },
    {
      year: 'JUNE 2022 - SEP 2024',
      role: 'Senior Application Engineer',
      company: 'AceMicromatic Manufacturing Intelligence Technologies',
      location: 'Bengaluru, India',
      tag: 'INDUSTRY_4.0',
      highlights: [
        'Managed project execution, customer requirements, solution discussions, and application support for Industrial IoT and manufacturing software projects.',
        'Supported pre-sales engineering activities including technical discussions, product demonstrations, project quotations, and stakeholder coordination.',
        'Worked closely with software development teams on customized application requirements and customer-specific enhancements.'
      ]
    },
    {
      year: 'JUNE 2016 - MAY 2022',
      role: 'Application Engineer & Academic Specialization',
      company: 'AceMicromatic Group / Visweswaraya Technological University',
      location: 'Bengaluru, India',
      tag: 'DATA_SCIENCE',
      highlights: [
        'Progressive career growth across application engineering, project execution, and regional customer leadership.',
        'Bachelor in Computer Application (BCA) student specializing in Data Science & Data Analytics at Visweswaraya Technological University.',
        'Bridging 10+ years of industrial field experience with AI-assisted software and digital transformation solutions.'
      ]
    }
  ];
};

interface TimelineProps {
  lang: Language;
}

const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  const t = translations[lang] || translations.en;
  const timelineData = getTimelineData(lang);

  return (
    <section id="timeline" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300 relative">
      {/* Title */}
      <div className="mb-16">
        <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          // CAREER_TRAJECTORY_LOGS
        </span>
        <h2 className="text-4xl md:text-5xl text-[var(--accent-pink)] uppercase tracking-widest font-bold border-l-[6px] border-[var(--accent-cyan)] pl-5">
          {t.sec_timeline}
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-[var(--accent-cyan)] pl-6 md:pl-10 ml-4 md:ml-8 space-y-12">
        {timelineData.map((item, index) => (
          <div 
            key={index} 
            onMouseEnter={playHover}
            className={`relative bg-[var(--bg-secondary)] border p-6 md:p-8 clip-corner transition-all duration-300 group hover:-translate-y-1 ${
              item.isHighlighted 
                ? 'border-[var(--accent-yellow)] shadow-[0_0_20px_rgba(252,238,10,0.15)]' 
                : 'border-[var(--border-dim)] hover:border-[var(--accent-cyan)]'
            }`}
          >
            {/* Timeline Node Dot */}
            <div className={`absolute -left-[31px] md:-left-[47px] top-8 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-[var(--bg-primary)] transition-all ${
              item.isHighlighted 
                ? 'border-[var(--accent-yellow)] bg-[var(--accent-yellow)] text-black' 
                : 'border-[var(--accent-cyan)] text-[var(--accent-cyan)]'
            }`}>
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>

            {/* Header Badge & Date */}
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold px-3 py-1 bg-[var(--bg-primary)] border border-[var(--accent-cyan)] text-[var(--accent-cyan)] clip-corner-top-right">
                // {item.tag}
              </span>
              <span className="text-sm font-mono font-extrabold text-[var(--accent-yellow)]">
                {item.year}
              </span>
            </div>

            {/* Role & Company */}
            <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-1 group-hover:text-[var(--accent-cyan)] transition-colors">
              {item.role}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] font-mono mb-4 flex items-center gap-2 flex-wrap">
              <i className="fas fa-building text-[var(--accent-pink)]"></i>
              <span>{item.company}</span>
              <span className="text-[var(--text-muted)]">•</span>
              <i className="fas fa-map-marker-alt text-[var(--accent-cyan)]"></i>
              <span>{item.location}</span>
            </p>

            {/* Highlights */}
            <ul className="space-y-2">
              {item.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-3 text-sm md:text-base text-[var(--text-primary)] leading-relaxed">
                  <i className="fas fa-chevron-right text-[var(--accent-yellow)] text-xs mt-1.5"></i>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
