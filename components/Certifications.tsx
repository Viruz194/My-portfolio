import React from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface CertificationsProps {
  lang: Language;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

interface CertDict {
  protocolTag: string;
  auditBannerTag: string;
  auditBannerTitle: string;
  auditBannerBtn: string;
  auditBannerDesc: string;
  inquiryToast: string;
  slots: {
    slotId: string;
    title: string;
    status: string;
    tag: string;
    accent: string;
    icon: string;
  }[];
}

const certTranslations: Record<Language, CertDict> = {
  en: {
    protocolTag: '// CREDENTIAL_AUDIT_PROTOCOL_V4',
    auditBannerTag: '🟡 AUDIT_IN_PROGRESS // VERIFICATION_PENDING',
    auditBannerTitle: 'DOCUMENTATION & CREDENTIAL AUDIT UNDERWAY',
    auditBannerBtn: 'REQUEST CREDENTIAL AUDIT',
    auditBannerDesc: 'Official Industry 4.0, CNC Motion Control, Data Science (BCA), and Scrum Project Management certifications and accreditations are currently undergoing cryptographic audit, document scan digitization, and verification. Genuine certificate files will be published shortly. For immediate reference or verification inquiries, please reach out via the direct contact protocol below.',
    inquiryToast: 'Direct credential audit inquiry logged. Transmitting request to Koushik T. S.',
    slots: [
      { slotId: 'SLOT_01', title: 'Industry 4.0 & CNC Automation Accreditation', status: 'DIGITIZATION_IN_PROGRESS', tag: 'HARDWARE & CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'Industrial Data Science & Analytics Certification', status: 'AUDIT_VERIFICATION_PENDING', tag: 'DATA SCIENCE & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'Certified Scrum Master & Agile Project Lead', status: 'DOCUMENT_UPLOAD_IN_PROGRESS', tag: 'SCRUM & LEADERSHIP', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'Advanced Motion Control & IIOT Architecture', status: 'AUTHENTICATION_PENDING', tag: 'ROBOTICS & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  ml: {
    protocolTag: '// സർട്ടിഫിക്കറ്റ് പരിശോധനാ പ്രോട്ടോക്കോൾ_V4',
    auditBannerTag: '🟡 പരിശോധന പുരോഗമിക്കുന്നു // സ്ഥിരീകരണം കാത്തിരിക്കുന്നു',
    auditBannerTitle: 'രേഖകളുടെയും സർട്ടിഫിക്കറ്റുകളുടെയും പരിശോധന പുരോഗമിക്കുന്നു',
    auditBannerBtn: 'സർട്ടിഫിക്കറ്റ് പരിശോധനയ്ക്ക് അഭ്യർത്ഥിക്കുക',
    auditBannerDesc: 'ഇൻഡസ്ട്രി 4.0, സിഎൻസി മോഷൻ കൺട്രോൾ, ഡാറ്റാ സയൻസ് (ബിസിഎ), സ്‌ക്രം പ്രോജക്റ്റ് മാനേജ്‌മെന്റ് എന്നിവയുടെ ഔദ്യോഗിക സർട്ടിഫിക്കറ്റുകൾ പരിശോധനയിലാണ്. ഡിജിറ്റൽ രേഖകൾ ഉടൻ പ്രസിദ്ധീകരിക്കും.',
    inquiryToast: 'സർട്ടിഫിക്കറ്റ് പരിശോധനാ അഭ്യർത്ഥന രേഖപ്പെടുത്തി. കൗശിക് ടി. എസിന് സന്ദേശം അയക്കുന്നു.',
    slots: [
      { slotId: 'SLOT_01', title: 'ഇൻഡസ്ട്രി 4.0 & സിഎൻസി ഓട്ടോമേഷൻ അക്രഡിറ്റേഷൻ', status: 'ഡിജിറ്റൈസേഷൻ പുരോഗമിക്കുന്നു', tag: 'ഹാർഡ്‌വെയർ & സിഎൻസി', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'ഇൻഡസ്ട്രിയൽ ഡാറ്റാ സയൻസ് & അനലിറ്റിക്സ് സർട്ടിഫിക്കേഷൻ', status: 'പരിശോധന കാത്തിരിക്കുന്നു', tag: 'ഡാറ്റാ സയൻസ് & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'സെർട്ടിഫൈഡ് സ്‌ക്രം മാസ്റ്റർ & അജൈൽ പ്രോജക്ട് ലീഡ്', status: 'അപ്‌ലോഡ് പുരോഗമിക്കുന്നു', tag: 'സ്‌ക്രം & ലീഡർഷിപ്പ്', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'അഡ്വാൻസ്ഡ് മോഷൻ കൺട്രോൾ & IIOT ആർക്കിടെക്ചർ', status: 'സ്ഥിരീകരണം കാത്തിരിക്കുന്നു', tag: 'റോബോട്ടിക്സ് & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  kn: {
    protocolTag: '// ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲನಾ ಪ್ರೋಟೋಕಾಲ್_V4',
    auditBannerTag: '🟡 ಪರಿಶೀಲನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ // ದೃಢೀಕರಣ ಬಾಕಿ ಇದೆ',
    auditBannerTitle: 'ದಾಖಲೆಗಳು ಮತ್ತು ಪ್ರಮಾಣಪತ್ರಗಳ ಪರಿಶೀಲನೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ',
    auditBannerBtn: 'ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲನೆಗೆ ವಿನಂತಿಸಿ',
    auditBannerDesc: 'ಇಂಡಸ್ಟ್ರಿ 4.0, ಸಿಎನ್‌ಸಿ ಮೋಷನ್ ಕಂಟ್ರೋಲ್, ಡೇಟಾ ಸೈನ್ಸ್ (BCA) ಮತ್ತು ಸ್ಕ್ರಮ್ ಪ್ರಾಜೆಕ್ಟ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್‌ನ ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರಗಳು ಪ್ರಸ್ತುತ ಪರಿಶೀಲನೆಯಲ್ಲಿದ್ದು, ಶೀಘ್ರದಲ್ಲೇ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗುವುದು.',
    inquiryToast: 'ಪ್ರಮಾಣಪತ್ರ ಪರಿಶೀಲನಾ ವಿನಂತಿಯನ್ನು ದಾಖಲಿಸಲಾಗಿದೆ. ಕೌಶಿಕ್ ಅವರಿಗೆ ಸಂದೇಶ ರವಾನಿಸಲಾಗುತ್ತಿದೆ.',
    slots: [
      { slotId: 'SLOT_01', title: 'ಇಂಡಸ್ಟ್ರಿ 4.0 & CNC ಆಟೊಮೇಷನ್ ಪ್ರಮಾಣಪತ್ರ', status: 'ಡಿಜಿಟೈಸೇಶನ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ', tag: 'ಹಾರ್ಡ್‌ವೇರ್ & CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'ಇಂಡಸ್ಟ್ರಿಯಲ್ ಡೇಟಾ ಸೈನ್ಸ್ & ಅನಾಲಿಟಿಕ್ಸ್', status: 'ಪರಿಶೀಲನೆ ಬಾಕಿ ಇದೆ', tag: 'ಡೇಟಾ ಸೈನ್ಸ್ & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'ಸರ್ಟಿಫೈಡ್ ಸ್ಕ್ರಮ್ ಮಾಸ್ಟರ್ & ಅಜೈಲ್ ಪ್ರಾಜೆಕ್ಟ್ ಲೀಡ್', status: 'ಅಪ್‌ಲೋಡ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ', tag: 'ಸ್ಕ್ರಮ್ & ನಾಯಕತ್ವ', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'ಅಡ್ವಾನ್ಸ್ಡ್ ಮೋಷನ್ ಕಂಟ್ರೋಲ್ & IIOT ಆರ್ಕಿಟೆಕ್ಚರ್', status: 'ಪ್ರಮಾಣೀಕರಣ ಬಾಕಿ ಇದೆ', tag: 'ರೋಬೋಟಿಕ್ಸ್ & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  hi: {
    protocolTag: '// क्रेडेंशियल ऑडिट प्रोटोकॉल_V4',
    auditBannerTag: '🟡 ऑडिट प्रगति पर है // सत्यापन लंबित है',
    auditBannerTitle: 'दस्तावेज़ और क्रेडेंशियल ऑडिट जारी है',
    auditBannerBtn: 'क्रेडेंशियल ऑडिट का अनुरोध करें',
    auditBannerDesc: 'उद्योग 4.0, सीएनसी मोशन कंट्रोल, डेटा साइंस (बीसीए) और स्क्रम प्रोजेक्ट मैनेजमेंट के आधिकारिक प्रमाण पत्र वर्तमान में ऑडिट और सत्यापन प्रक्रिया के तहत हैं। प्रामाणिक दस्तावेज़ जल्द ही प्रकाशित किए जाएंगे।',
    inquiryToast: 'क्रेडेंशियल ऑडिट अनुरोध दर्ज किया गया। कौशिक टी. एस. को प्रेषित किया जा रहा है।',
    slots: [
      { slotId: 'SLOT_01', title: 'इंडस्ट्री 4.0 और CNC ऑटोमेशन प्रत्यायन', status: 'डिजिटलीकरण जारी है', tag: 'हार्डवेयर और CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'औद्योगिक डेटा विज्ञान और विश्लेषिकी प्रमाणन', status: 'सत्यापन लंबित है', tag: 'डेटा साइंस और BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'प्रमाणित स्क्रम मास्टर और एजाइल प्रोजेक्ट लीड', status: 'अपलोड जारी है', tag: 'स्क्रम और नेतृत्व', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'उन्नत मोशन कंट्रोल और IIOT आर्किटेक्चर', status: 'प्रमाणीकरण लंबित है', tag: 'रोबोटिक्स और IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  ta: {
    protocolTag: '// சான்றிதழ் தணிக்கை நெறிமுறை_V4',
    auditBannerTag: '🟡 தணிக்கை நடைபெறுகிறது // சரிபார்ப்பு நிலுவையில் உள்ளது',
    auditBannerTitle: 'ஆவணங்கள் மற்றும் சான்றிதழ்கள் தணிக்கை செய்யப்படுகின்றன',
    auditBannerBtn: 'சான்றிதழ் தணிக்கை கோரிக்கை',
    auditBannerDesc: 'இண்டஸ்ட்ரி 4.0, சிஎன்சி மோஷன் கண்ட்ரோல், டேட்டா சயின்ஸ் (பிசிஏ) மற்றும் ஸ்க்ரம் திட்ட மேலாண்மை சான்றிதழ்கள் தற்போது தணிக்கை செய்யப்படுகின்றன. அசல் ஆவணங்கள் விரைவில் பதிவேற்றப்படும்.',
    inquiryToast: 'சான்றிதழ் தணிக்கை கோரிக்கை பதிவு செய்யப்பட்டது.',
    slots: [
      { slotId: 'SLOT_01', title: 'இண்டஸ்ட்ரி 4.0 & CNC ஆட்டோமேஷன் அங்கீகாரம்', status: 'டிஜிட்டல் மயமாக்கல் நடைபெறுகிறது', tag: 'ஹார்டுவேர் & CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'தொழில்துறை தரவு அறிவியல் & பகுப்பாய்வு சான்றிதழ்', status: 'சரிபார்ப்பு நிலுவையில் உள்ளது', tag: 'தரவு அறிவியல் & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'சான்றளிக்கப்பட்ட ஸ்க்ரம் மாஸ்டர் & அஜைல் திட்ட தலைவர்', status: 'பதிவேற்றம் நடைபெறுகிறது', tag: 'ஸ்க்ரம் & தலைமைத்துவம்', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'மேம்பட்ட மோஷன் கண்ட்ரோல் & IIOT கட்டமைப்பு', status: 'உறுதிப்படுத்தல் நிலுவையில் உள்ளது', tag: 'ரோபாட்டிக்ஸ் & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  zh: {
    protocolTag: '// 证书审核协议_V4',
    auditBannerTag: '🟡 审核进行中 // 等待验证',
    auditBannerTitle: '文件与证书审核正在进行',
    auditBannerBtn: '请求证书审核',
    auditBannerDesc: '工业 4.0、CNC 运动控制、数据科学 (BCA) 和 Scrum 项目管理官方证书目前正在接受加密审核与扫描数字版验证。真实证书文件即将发布。',
    inquiryToast: '已记录证书审核请求。正发送给 Koushik T. S.。',
    slots: [
      { slotId: 'SLOT_01', title: '工业 4.0 与 CNC 自动化认证', status: '数字化处理中', tag: '硬件与 CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: '工业数据科学与分析认证', status: '等待审核验证', tag: '数据科学与 BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: '敏捷 Scrum Master 与项目负责人', status: '文件上传中', tag: 'Scrum 与领导力', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: '高级运动控制与 IIOT 架构', status: '等待身份验证', tag: '机器人与 IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  es: {
    protocolTag: '// PROTOCOLO_AUDITORÍA_CREDANCIALES_V4',
    auditBannerTag: '🟡 AUDITORÍA EN PROCESO // VERIFICACIÓN PENDIENTE',
    auditBannerTitle: 'AUDITORÍA DE DOCUMENTOS Y CREDENCIALES EN CURSO',
    auditBannerBtn: 'SOLICITAR AUDITORÍA DE CREDENCIALES',
    auditBannerDesc: 'Las certificaciones oficiales de Industria 4.0, Control de Movimiento CNC, Ciencia de Datos (BCA) y Gestión de Proyectos Scrum se encuentran actualmente en proceso de auditoría y digitalización. Los certificados auténticos se publicarán en breve.',
    inquiryToast: 'Solicitud de auditoría registrada. Transmitiendo a Koushik T. S.',
    slots: [
      { slotId: 'SLOT_01', title: 'Acreditación de Industria 4.0 y Automatización CNC', status: 'DIGITALIZACIÓN EN CURSO', tag: 'HARDWARE Y CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'Certificación de Ciencia de Datos Industrial y Analítica', status: 'VERIFICACIÓN PENDIENTE', tag: 'DATA SCIENCE Y BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'Certified Scrum Master y Líder de Proyecto Agile', status: 'SUBIDA DE DOCUMENTO EN CURSO', tag: 'SCRUM Y LIDERAZGO', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'Control de Movimiento Avanzado y Arquitectura IIOT', status: 'AUTENTICACIÓN PENDIENTE', tag: 'ROBÓTICA E IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  de: {
    protocolTag: '// ZERTIFIKATSPRÜFUNG_PROTOKOLL_V4',
    auditBannerTag: '🟡 PRÜFUNG LÄUFT // VERIFIZIERUNG AUSSTEHEND',
    auditBannerTitle: 'DOKUMENTEN- UND ZERTIFIKATSPRÜFUNG IM GANGE',
    auditBannerBtn: 'ZERTIFIKATSPRÜFUNG ANFORDERN',
    auditBannerDesc: 'Offizielle Zertifikate für Industrie 4.0, CNC-Antriebssteuerung, Data Science (BCA) und Scrum-Projektmanagement durchlaufen derzeit die digitale Prüfung und Verifizierung. Die Originaldateien werden in Kürze veröffentlicht.',
    inquiryToast: 'Anfrage zur Zertifikatsprüfung protokolliert. Übertragung an Koushik T. S.',
    slots: [
      { slotId: 'SLOT_01', title: 'Akkreditierung für Industrie 4.0 & CNC-Automatisierung', status: 'DIGITALISIERUNG LÄUFT', tag: 'HARDWARE & CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'Zertifikat für Industrielle Data Science & Analytik', status: 'PRÜFUNG AUSSTEHEND', tag: 'DATA SCIENCE & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'Zertifizierter Scrum Master & Agile Project Lead', status: 'DOKUMENTENUPLOAD LÄUFT', tag: 'SCRUM & FÜHRUNG', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'Fortgeschrittene Antriebssteuerung & IIOT-Architektur', status: 'AUTHENTIFIZIERUNG AUSSTEHEND', tag: 'ROBOTIK & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  fr: {
    protocolTag: '// PROTOCOLE_AUDIT_CERTIFICATS_V4',
    auditBannerTag: '🟡 AUDIT EN COURS // VÉRIFICATION EN ATTENTE',
    auditBannerTitle: 'AUDIT DES DOCUMENTS ET CERTIFICATS EN COURS',
    auditBannerBtn: 'DEMANDER UN AUDIT DE CERTIFICAT',
    auditBannerDesc: 'Les certifications officielles Industrie 4.0, Contrôle de Mouvement CNC, Science des Données (BCA) et Gestion de Projet Scrum sont actuellement en cours d\'audit et de numérisation. Les certificats authentiques seront publiés sous peu.',
    inquiryToast: 'Demande d\'audit enregistrée. Transmission à Koushik T. S.',
    slots: [
      { slotId: 'SLOT_01', title: 'Accréditation Industrie 4.0 & Automation CNC', status: 'NUMÉRISATION EN COURS', tag: 'MATÉRIEL & CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: 'Certification Science des Données Industrielles & Analytique', status: 'VÉRIFICATION EN ATTENTE', tag: 'DATA SCIENCE & BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: 'Scrum Master Certifié & Chef de Projet Agile', status: 'TÉLÉCHARGEMENT EN COURS', tag: 'SCRUM & LEADERSHIP', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: 'Contrôle de Mouvement Avancé & Architecture IIOT', status: 'AUTHENTIFICATION EN ATTENTE', tag: 'ROBOTIQUE & IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  },
  ja: {
    protocolTag: '// 資格監査プロトコル_V4',
    auditBannerTag: '🟡 監査進行中 // 検証手続き中',
    auditBannerTitle: 'ドキュメントおよび資格認定の監査進行中',
    auditBannerBtn: '資格監査を要求する',
    auditBannerDesc: 'インダストリー4.0、CNCモーション制御、データサイエンス(BCA)、Scrumプロジェクトマネジメントの公式認定証は現在、検証およびデジタル化の監査プロセス中です。間もなく公式証明書が掲載されます。',
    inquiryToast: '資格監査リクエストを記録しました。Koushik T. S. へ送信中。',
    slots: [
      { slotId: 'SLOT_01', title: 'インダストリー4.0＆CNC自動化認定', status: 'デジタル化進行中', tag: 'ハードウェア＆CNC', accent: 'var(--accent-yellow)', icon: 'fas fa-industry' },
      { slotId: 'SLOT_02', title: '産業用データサイエンス＆分析認定', status: '監査検証待ち', tag: 'データサイエンス＆BCA', accent: 'var(--accent-cyan)', icon: 'fas fa-brain' },
      { slotId: 'SLOT_03', title: '認定Scrum Master＆アジャイルプロジェクトリード', status: '書類アップロード中', tag: 'Scrum＆リーダーシップ', accent: 'var(--accent-pink)', icon: 'fas fa-tasks' },
      { slotId: 'SLOT_04', title: '高度モーション制御＆IIOTアーキテクチャ', status: '認証手続き待ち', tag: 'ロボティクス＆IIOT', accent: 'var(--accent-yellow)', icon: 'fas fa-cogs' },
    ]
  }
};

const Certifications: React.FC<CertificationsProps> = ({ lang, onShowToast }) => {
  const t = translations[lang] || translations.en;
  const certData = certTranslations[lang] || certTranslations.en;

  const handleInquire = () => {
    playClick();
    onShowToast(certData.inquiryToast, 'info');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isLatinScript = lang === 'en' || lang === 'de' || lang === 'es' || lang === 'fr';

  return (
    <section id="certifications" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300 overflow-hidden">
      {/* Title Header */}
      <div className="flex flex-col mb-12 border-b border-[var(--border-dim)] pb-6 gap-2">
        <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block">
          {certData.protocolTag}
        </span>
        <h2 className={`text-2xl sm:text-4xl md:text-5xl text-[var(--text-primary)] uppercase font-black border-l-[6px] border-[var(--accent-yellow)] pl-5 leading-snug break-words max-w-full ${
          isLatinScript ? 'tracking-widest' : 'tracking-normal'
        }`}>
          {t.sec_certs || '_VERIFIED_CERTIFICATIONS'}
        </h2>
      </div>

      {/* Audit In Progress Status Banner */}
      <div className="bg-[var(--bg-secondary)] border-2 border-[var(--accent-yellow)] p-6 sm:p-8 clip-corner relative mb-12 shadow-[0_0_30px_rgba(252,238,10,0.15)]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[var(--border-dim)] pb-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-[var(--accent-yellow)]/10 border border-[var(--accent-yellow)] flex items-center justify-center text-[var(--accent-yellow)] text-2xl animate-pulse shrink-0">
              <i className="fas fa-file-shield"></i>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-yellow)] animate-ping inline-block shrink-0"></span>
                <span className="text-xs font-mono text-[var(--accent-yellow)] uppercase font-extrabold tracking-wider">
                  {certData.auditBannerTag}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] uppercase tracking-wide leading-tight">
                {certData.auditBannerTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={handleInquire}
            onMouseEnter={playHover}
            className="bg-[var(--accent-yellow)] text-black px-6 py-3 font-mono font-bold text-xs uppercase tracking-wider clip-corner hover:bg-[var(--text-primary)] hover:text-black transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(252,238,10,0.3)] whitespace-nowrap shrink-0"
          >
            <i className="fas fa-paper-plane"></i> {certData.auditBannerBtn}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-4xl font-mono">
          {certData.auditBannerDesc}
        </p>
      </div>

      {/* Pending Credential Slots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certData.slots.map((slot) => (
          <div
            key={slot.slotId}
            className="bg-[var(--bg-secondary)]/60 border-2 border-dashed border-[var(--border-dim)] p-6 clip-corner hover:border-[var(--accent-cyan)] transition-all group relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="text-xs font-mono text-[var(--accent-cyan)] font-bold">
                  [{slot.slotId}]
                </span>
                <span className="text-[10px] font-mono text-[var(--accent-yellow)] bg-[var(--accent-yellow)]/10 px-2 py-0.5 border border-[var(--accent-yellow)]/30 clip-corner font-semibold">
                  ⌛ {slot.status}
                </span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <i className={`${slot.icon} text-lg text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors mt-1 shrink-0`}></i>
                <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] uppercase tracking-wide group-hover:text-[var(--accent-cyan)] transition-colors leading-snug">
                  {slot.title}
                </h4>
              </div>
            </div>

            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block mt-4 border-t border-[var(--border-dim)]/50 pt-2">
              // CATEGORY: {slot.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
