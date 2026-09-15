import React, { useState } from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface ContactProps {
  lang: Language;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

interface ContactDict {
  uplinkProtocol: string;
  connEstablished: string;
  locStation: string;
  location: string;
  electronicMail: string;
  commsVoice: string;
  copyBtn: string;
  socialNetworks: string;
  transmitMsg: string;
  senderNameLabel: string;
  senderNamePh: string;
  senderEmailLabel: string;
  senderEmailPh: string;
  msgPayloadLabel: string;
  msgPayloadPh: string;
  sendBtn: string;
  transmittingBtn: string;
  toastIncomplete: string;
  toastSuccess: string;
}

const contactTranslations: Record<Language, ContactDict> = {
  en: {
    uplinkProtocol: '// ESTABLISH_NEURAL_UPLINK',
    connEstablished: 'CONNECTION ESTABLISHED',
    locStation: '// LOCATION_STATION',
    location: 'Bengaluru, Karnataka, India',
    electronicMail: '// ELECTRONIC_MAIL',
    commsVoice: '// COMMS_VOICE',
    copyBtn: 'COPY',
    socialNetworks: '// SOCIAL_NETWORKS',
    transmitMsg: 'TRANSMIT_MESSAGE',
    senderNameLabel: '// SENDER_NAME',
    senderNamePh: 'Enter your name...',
    senderEmailLabel: '// SENDER_EMAIL',
    senderEmailPh: 'Enter your email address...',
    msgPayloadLabel: '// MESSAGE_PAYLOAD',
    msgPayloadPh: 'Write your transmission payload...',
    sendBtn: 'SEND_TRANSMISSION',
    transmittingBtn: 'TRANSMITTING...',
    toastIncomplete: 'Please complete all form fields before transmitting.',
    toastSuccess: 'Uplink packet transmitted successfully! Koushik will respond shortly.',
  },
  hi: {
    uplinkProtocol: '// न्यूरल अपलिंक स्थापित करें',
    connEstablished: 'सम्पर्क स्थापित हो गया',
    locStation: '// स्थान स्टेशन',
    location: 'बेंगलुरु, कर्नाटक, भारत',
    electronicMail: '// इलेक्ट्रॉनिक मेल',
    commsVoice: '// कॉम्स वॉइस',
    copyBtn: 'कॉपी',
    socialNetworks: '// सोशल नेटवर्क',
    transmitMsg: 'संदेश प्रेषित करें',
    senderNameLabel: '// प्रेषक का नाम',
    senderNamePh: 'अपना नाम दर्ज करें...',
    senderEmailLabel: '// प्रेषक का ईमेल',
    senderEmailPh: 'अपना ईमेल पता दर्ज करें...',
    msgPayloadLabel: '// संदेश विवरण',
    msgPayloadPh: 'अपना संदेश लिखें...',
    sendBtn: 'संदेश भेजें',
    transmittingBtn: 'भेजा जा रहा है...',
    toastIncomplete: 'कृपया संदेश भेजने से पहले सभी फ़ील्ड भरें।',
    toastSuccess: 'संदेश सफलतापूर्वक भेजा गया! कौशिक जल्द ही उत्तर देंगे।',
  },
  kn: {
    uplinkProtocol: '// ನ್ಯೂರಲ್ ಅಪ್‌ಲಿಂಕ್ ಸ್ಥಾಪಿಸಿ',
    connEstablished: 'ಸಂಪರ್ಕ ಸ್ಥಾಪಿಸಲಾಗಿದೆ',
    locStation: '// ಸ್ಥಳ ನಿಲ್ದಾಣ',
    location: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ',
    electronicMail: '// ಇಮೇಲ್ ವಿಳಾಸ',
    commsVoice: '// ದೂರವಾಣಿ ಸಂಪರ್ಕ',
    copyBtn: 'ಕಾಪಿ',
    socialNetworks: '// ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳು',
    transmitMsg: 'ಸಂದೇಶ ರವಾನಿಸಿ',
    senderNameLabel: '// ಕಳುಹಿಸುವವರ ಹೆಸರು',
    senderNamePh: 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ...',
    senderEmailLabel: '// ಇಮೇಲ್ ವಿಳಾಸ',
    senderEmailPh: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ...',
    msgPayloadLabel: '// ಸಂದೇಶ ವಿವರ',
    msgPayloadPh: 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಬರೆಯಿರಿ...',
    sendBtn: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    transmittingBtn: 'ರವಾನಿಸಲಾಗುತ್ತಿದೆ...',
    toastIncomplete: 'ದಯವಿಟ್ಟು ಸಂದೇಶ ಕಳುಹಿಸುವ ಮೊದಲು ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
    toastSuccess: 'ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ರವಾನೆಯಾಗಿದೆ! ಕೌಶಿಕ್ ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸಲಿದ್ದಾರೆ.',
  },
  ta: {
    uplinkProtocol: '// நியூரன் இணைப்பு நிறுவவும்',
    connEstablished: 'இணைப்பு நிறுவப்பட்டது',
    locStation: '// இருப்பிடம்',
    location: 'பெங்களூரு, கர்நாடகா, இந்தியா',
    electronicMail: '// மின்னஞ்சல்',
    commsVoice: '// தொலைபேசி தொடர்பு',
    copyBtn: 'நகலெடு',
    socialNetworks: '// சமூக வலைதளங்கள்',
    transmitMsg: 'செய்தி அனுப்பவும்',
    senderNameLabel: '// அனுப்புநர் பெயர்',
    senderNamePh: 'உங்கள் பெயரை உள்ளிடவும்...',
    senderEmailLabel: '// அனுப்புநர் மின்னஞ்சல்',
    senderEmailPh: 'மின்னஞ்சலை உள்ளிடவும்...',
    msgPayloadLabel: '// செய்தி உள்ளடக்கம்',
    msgPayloadPh: 'உங்கள் செய்தியை எழுதவும்...',
    sendBtn: 'செய்தியை அனுப்பு',
    transmittingBtn: 'அனுப்பப்படுகிறது...',
    toastIncomplete: 'செய்தியை அனுப்புவதற்கு முன் அனைத்து புலங்களையும் நிரப்பவும்.',
    toastSuccess: 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது! கௌசிக் விரைவில் பதிலளிப்பார்.',
  },
  ml: {
    uplinkProtocol: '// ന്യൂറൽ അപ്‌ലിങ്ക് സ്ഥാപിക്കുക',
    connEstablished: 'ബന്ധം സ്ഥാപിച്ചു',
    locStation: '// ലൊക്കേഷൻ സ്റ്റേഷൻ',
    location: 'ബെംഗളൂരു, കർണാടക, ഇന്ത്യ',
    electronicMail: '// ഇലക്ട്രോണിക് മെയിൽ',
    commsVoice: '// ഫോൺ ഫോൺ',
    copyBtn: 'കോപ്പി',
    socialNetworks: '// സോഷ്യൽ നെറ്റ്‌വർക്കുകൾ',
    transmitMsg: 'സന്ദേശം അയക്കുക',
    senderNameLabel: '// അയക്കുന്നയാളുടെ പേര്',
    senderNamePh: 'നിങ്ങളുടെ പേര് നൽകുക...',
    senderEmailLabel: '// ഇമെയിൽ വിലാസം',
    senderEmailPh: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക...',
    msgPayloadLabel: '// സന്ദേശ വിവരങ്ങൾ',
    msgPayloadPh: 'നിങ്ങളുടെ സന്ദേശം എഴുതുക...',
    sendBtn: 'സന്ദേശം പ്രേഷണം ചെയ്യുക',
    transmittingBtn: 'അയക്കുന്നു...',
    toastIncomplete: 'സന്ദേശം അയക്കുന്നതിന് മുമ്പ് എല്ലാ വിവരങ്ങളും നൽകുക.',
    toastSuccess: 'സന്ദേശം വിജയകരമായി അയച്ചു! കൗശിക് ഉടൻ മറുപടി നൽകും.',
  },
  zh: {
    uplinkProtocol: '// 建立神经链路',
    connEstablished: '连接已建立',
    locStation: '// 位置站点',
    location: '班加罗尔，卡纳塔克邦，印度',
    electronicMail: '// 电子邮件',
    commsVoice: '// 通讯电话',
    copyBtn: '复制',
    socialNetworks: '// 社交网络',
    transmitMsg: '传输消息',
    senderNameLabel: '// 发送者姓名',
    senderNamePh: '请输入您的姓名...',
    senderEmailLabel: '// 发送者邮箱',
    senderEmailPh: '请输入您的邮箱地址...',
    msgPayloadLabel: '// 消息内容',
    msgPayloadPh: '请输入要发送的信息...',
    sendBtn: '发送传输',
    transmittingBtn: '正在传输...',
    toastIncomplete: '请在传输前填写所有必填字段。',
    toastSuccess: '消息包传输成功！Koushik 将在不久后回复。',
  },
  es: {
    uplinkProtocol: '// ESTABLECER_ENLACE_NEURAL',
    connEstablished: 'CONEXIÓN ESTABLECIDA',
    locStation: '// ESTACIÓN_UBICACIÓN',
    location: 'Bengaluru, Karnataka, India',
    electronicMail: '// CORREO_ELECTRÓNICO',
    commsVoice: '// TELÉFONO_CONTACTO',
    copyBtn: 'COPIAR',
    socialNetworks: '// REDES_SOCIALES',
    transmitMsg: 'TRANSMITIR_MENSAJE',
    senderNameLabel: '// NOMBRE_REMITENTE',
    senderNamePh: 'Ingrese su nombre...',
    senderEmailLabel: '// CORREO_REMITENTE',
    senderEmailPh: 'Ingrese su dirección de correo...',
    msgPayloadLabel: '// CONTENIDO_MENSAJE',
    msgPayloadPh: 'Escriba su mensaje...',
    sendBtn: 'ENVIAR_TRANSMISIÓN',
    transmittingBtn: 'TRANSMITIENDO...',
    toastIncomplete: 'Por favor complete todos los campos antes de transmitir.',
    toastSuccess: '¡Paquete transmitido con éxito! Koushik responderá a la brevedad.',
  },
  de: {
    uplinkProtocol: '// NEURAL_UPLINK_HERSTELLEN',
    connEstablished: 'VERBINDUNG HERGESTELLT',
    locStation: '// STANDORT_STATION',
    location: 'Bengaluru, Karnataka, Indien',
    electronicMail: '// E_MAIL_ADRESSE',
    commsVoice: '// TELEFON_KONTAKT',
    copyBtn: 'KOPIEREN',
    socialNetworks: '// SOZIALE_NETZWERKE',
    transmitMsg: 'NACHRICHT_ÜBERMITTELN',
    senderNameLabel: '// ABSENDER_NAME',
    senderNamePh: 'Geben Sie Ihren Namen ein...',
    senderEmailLabel: '// ABSENDER_E_MAIL',
    senderEmailPh: 'Geben Sie Ihre E-Mail-Adresse ein...',
    msgPayloadLabel: '// NACHRICHTEN_INHALT',
    msgPayloadPh: 'Schreiben Sie Ihre Nachricht...',
    sendBtn: 'ÜBERTRAGUNG_SENDEN',
    transmittingBtn: 'WIRD ÜBERTRAGEN...',
    toastIncomplete: 'Bitte füllen Sie alle Felder vor dem Senden aus.',
    toastSuccess: 'Nachricht erfolgreich übertragen! Koushik wird in Kürze antworten.',
  },
  fr: {
    uplinkProtocol: '// ÉTABLIR_LIAISON_NEURALE',
    connEstablished: 'CONNEXION ÉTABLIE',
    locStation: '// STATION_LOCALISATION',
    location: 'Bengaluru, Karnataka, Inde',
    electronicMail: '// COURRIER_ÉLECTRONIQUE',
    commsVoice: '// TÉLÉPHONE_COMM',
    copyBtn: 'COPIER',
    socialNetworks: '// RÉSEAUX_SOCIAUX',
    transmitMsg: 'TRANSMETTRE_MESSAGE',
    senderNameLabel: '// NOM_EXPÉDITEUR',
    senderNamePh: 'Entrez votre nom...',
    senderEmailLabel: '// EMAIL_EXPÉDITEUR',
    senderEmailPh: 'Entrez votre adresse email...',
    msgPayloadLabel: '// CONTENU_MESSAGE',
    msgPayloadPh: 'Écrivez votre message...',
    sendBtn: 'ENVOYER_TRANSMISSION',
    transmittingBtn: 'TRANSMISSION EN COURS...',
    toastIncomplete: 'Veuillez remplir tous les champs avant de transmettre.',
    toastSuccess: 'Message transmis avec succès ! Koushik répondra sous peu.',
  },
  ja: {
    uplinkProtocol: '// ニューラルアップリンク確立',
    connEstablished: '通信回線確立',
    locStation: '// 拠点ステーション',
    location: 'インド・カルナータカ州ベンガルール',
    electronicMail: '// 電子メール',
    commsVoice: '// 通信電話',
    copyBtn: 'コピー',
    socialNetworks: '// ソーシャルネットワーク',
    transmitMsg: 'メッセージ送信',
    senderNameLabel: '// 送信者氏名',
    senderNamePh: 'お名前を入力してください...',
    senderEmailLabel: '// 送信者メールアドレス',
    senderEmailPh: 'メールアドレスを入力してください...',
    msgPayloadLabel: '// 送信本文',
    msgPayloadPh: '送信内容をご記入ください...',
    sendBtn: '送信実行',
    transmittingBtn: '送信処理中...',
    toastIncomplete: '送信前にすべての項目を入力してください。',
    toastSuccess: 'メッセージの送信が完了しました。Koushikより追って連絡いたします。',
  }
};

const Contact: React.FC<ContactProps> = ({ lang, onShowToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const t = translations[lang] || translations.en;
  const cData = contactTranslations[lang] || contactTranslations.en;

  const isLatinScript = lang === 'en' || lang === 'de' || lang === 'es' || lang === 'fr';

  const copyToClipboard = (text: string, label: string) => {
    playClick();
    navigator.clipboard.writeText(text);
    onShowToast(`${label}: ${text}`, 'success');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast(cData.toastIncomplete, 'warning');
      return;
    }

    playClick();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      onShowToast(cData.toastSuccess, 'terminal');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300">
      <div className="mb-12 text-center md:text-left">
        <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block mb-2">
          {cData.uplinkProtocol}
        </span>
        <h2 className={`text-3xl md:text-5xl text-[var(--accent-pink)] uppercase font-bold border-l-[6px] border-[var(--accent-cyan)] pl-5 inline-block transition-colors duration-300 leading-snug break-words max-w-full ${
          isLatinScript ? 'tracking-widest' : 'tracking-normal'
        }`}>
          {t.sec_contact}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto w-full">
        {/* Contact Info Card */}
        <div className="bg-[var(--bg-secondary)] p-8 md:p-10 border border-[var(--border-dim)] clip-corner relative transition-all duration-300 hover:border-[var(--accent-cyan)] hover:shadow-[0_0_20px_var(--shadow-glow)] group">
          <p className="text-[var(--accent-cyan)] font-mono font-extrabold mb-6 tracking-[2px] text-lg sm:text-xl transition-colors duration-300 flex items-center gap-2">
            <span className="w-3 h-3 bg-[var(--accent-cyan)] animate-ping inline-block rounded-full shrink-0"></span>
            {cData.connEstablished}
          </p>

          <div className="space-y-4 font-mono text-sm">
            <div className="bg-[var(--bg-primary)] p-4 border border-[var(--border-dim)] clip-corner flex items-center justify-between">
              <div>
                <span className="text-xs text-[var(--text-muted)] block uppercase">{cData.locStation}</span>
                <span className="text-[var(--text-primary)] font-bold">{cData.location}</span>
              </div>
              <i className="fas fa-map-marker-alt text-[var(--accent-pink)] text-lg"></i>
            </div>

            <div className="bg-[var(--bg-primary)] p-4 border border-[var(--border-dim)] clip-corner flex items-center justify-between group/item">
              <div>
                <span className="text-xs text-[var(--text-muted)] block uppercase">{cData.electronicMail}</span>
                <span className="text-[var(--accent-yellow)] font-bold">koushikts@outlook.com</span>
              </div>
              <button 
                onClick={() => copyToClipboard('koushikts@outlook.com', 'Email')}
                onMouseEnter={playHover}
                className="px-3 py-1 bg-[var(--accent-cyan)] text-black font-bold text-xs clip-corner hover:brightness-110"
              >
                <i className="fas fa-copy mr-1"></i> {cData.copyBtn}
              </button>
            </div>

            <div className="bg-[var(--bg-primary)] p-4 border border-[var(--border-dim)] clip-corner flex items-center justify-between group/item">
              <div>
                <span className="text-xs text-[var(--text-muted)] block uppercase">{cData.commsVoice}</span>
                <span className="text-[var(--accent-cyan)] font-bold">+91 797-515-4267</span>
              </div>
              <button 
                onClick={() => copyToClipboard('+91 797-515-4267', 'Phone')}
                onMouseEnter={playHover}
                className="px-3 py-1 bg-[var(--accent-yellow)] text-black font-bold text-xs clip-corner hover:brightness-110"
              >
                <i className="fas fa-copy mr-1"></i> {cData.copyBtn}
              </button>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-[var(--border-dim)]">
            <span className="text-xs text-[var(--text-muted)] font-mono block mb-3 uppercase">{cData.socialNetworks}</span>
            <div className="flex gap-4">
              {[
                { name: 'GitHub', icon: 'fa-github', link: 'https://github.com/Viruz194' },
                { name: 'LinkedIn', icon: 'fa-linkedin', link: 'https://linkedin.com/in/koushikts' },
                { name: 'Twitter', icon: 'fa-twitter', link: 'https://twitter.com/your-username' },
                { name: 'Instagram', icon: 'fa-instagram', link: 'https://instagram.com/your-username' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 clip-corner-top-right text-lg"
                  aria-label={social.name}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Transmission Form */}
        <form 
          onSubmit={handleSubmit}
          className="bg-[var(--bg-secondary)] p-8 md:p-10 border border-[var(--border-dim)] clip-corner relative hover:border-[var(--accent-yellow)] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        >
          <h3 className="text-xl sm:text-2xl font-bold uppercase text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <i className="fas fa-paper-plane text-[var(--accent-yellow)]"></i>
            {cData.transmitMsg}
          </h3>

          <div className="space-y-4 font-mono text-sm">
            <div>
              <label className="block text-xs uppercase text-[var(--text-muted)] mb-1">{cData.senderNameLabel}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={cData.senderNamePh}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-dim)] p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-cyan)] transition-colors clip-corner"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-[var(--text-muted)] mb-1">{cData.senderEmailLabel}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={cData.senderEmailPh}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-dim)] p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-cyan)] transition-colors clip-corner"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-[var(--text-muted)] mb-1">{cData.msgPayloadLabel}</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={cData.msgPayloadPh}
                className="w-full bg-[var(--bg-primary)] border border-[var(--border-dim)] p-3 text-[var(--text-primary)] outline-none focus:border-[var(--accent-cyan)] transition-colors clip-corner resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              onMouseEnter={playHover}
              className="w-full bg-[var(--accent-yellow)] text-black py-4 font-bold uppercase tracking-widest font-mono hover:bg-[var(--accent-cyan)] transition-colors clip-corner flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(252,238,10,0.3)] mt-2"
            >
              {isSending ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> {cData.transmittingBtn}
                </>
              ) : (
                <>
                  <i className="fas fa-satellite-dish"></i> {cData.sendBtn}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;