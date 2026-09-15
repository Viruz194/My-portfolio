import React from 'react';
import Card from './Card';
import { Language, translations } from '../utils/translations';

interface ResumeProps {
  lang: Language;
}

const Resume: React.FC<ResumeProps> = ({ lang }) => {
  const t = translations[lang] || translations.en;

  const services = [
    {
      tag: "01_DEPLOYMENT",
      title: t.serv_1_title,
      description: t.serv_1_desc
    },
    {
      tag: "02_EXECUTION",
      title: t.serv_2_title,
      description: t.serv_2_desc
    },
    {
      tag: "03_INTEGRATION",
      title: t.serv_3_title,
      description: t.serv_3_desc
    },
    {
      tag: "04_ENABLEMENT",
      title: t.serv_4_title,
      description: t.serv_4_desc
    },
    {
      tag: "05_OPTIMIZATION",
      title: t.serv_5_title,
      description: t.serv_5_desc
    },
    {
      tag: "06_LEADERSHIP",
      title: t.serv_6_title,
      description: t.serv_6_desc
    },
    {
      tag: "07_CREATIVE",
      title: t.serv_7_title,
      description: t.serv_7_desc
    }
  ];

  return (
    <section id="resume" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300">
      <h2 className="text-4xl text-[var(--accent-pink)] uppercase mb-12 border-l-[6px] border-[var(--accent-cyan)] pl-5 tracking-widest font-bold transition-colors duration-300">
        {t.sec_services}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {services.map((service, index) => (
          <Card 
            key={index}
            tag={service.tag}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Resume;