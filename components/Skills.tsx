import React, { useState } from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface SkillItem {
  name: string;
  level: number; // 0-100
  tag: string;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

const getSkillCategories = (lang: Language): SkillCategory[] => {
  if (lang === 'zh') {
    return [
      {
        id: 'cnc',
        title: '工业4.0与CNC系统',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNC系统与运动控制', level: 90, tag: 'HARDWARE', description: '高级调试、控制器集成及高精度故障诊断。' },
          { name: 'PLC与传感器集成', level: 85, tag: 'AUTOMATION', description: '传感器、PLC和IO模块与工业软件的无缝对接。' },
          { name: '批次跟踪与FIFO先进先出', level: 88, tag: 'LOGISTICS', description: '优化物料流转、追溯性与缓冲规则。' },
          { name: '现场调试与交付', level: 92, tag: 'FIELD_ENG', description: '10年以上高风险现场部署与验证经验。' },
          { name: '生产自动排程算法', level: 75, tag: 'OPTIMIZATION', description: '数据驱动的工厂产能与设备利用率排程算法。' },
        ]
      },
      {
        id: 'datascience',
        title: '数据科学与AI',
        icon: 'fa-brain',
        skills: [
          { name: 'AI辅助解决方案与提示工程', level: 75, tag: 'AI_TOOLS', description: '利用 AI 模型和 LLM 工具设计智能应用与自动化工作流。' },
          { name: 'SQL与数据库基础', level: 35, tag: 'DATA', description: '基础 SQL 查询、数据筛选及数据库基本操作。' },
          { name: '预测性分析与OEE效率', level: 80, tag: 'ANALYTICS', description: '分析客户数据并提供运营洞察。' },
          { name: '数据可视化与仪表盘', level: 80, tag: 'BI', description: '将遥测与生产数据转化为直观的运营洞察。' },
        ]
      },
      {
        id: 'techfoundations',
        title: '编程与技术基础',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (基础)', level: 35, tag: 'CORE_LANG', description: '工业控制逻辑、语法基础及内存控制概念。' },
          { name: 'SQL与数据查询', level: 25, tag: 'DATABASE', description: '基础 SQL 查询执行、数据表筛选及数据库操作。' },
          { name: 'Python与数据科学逻辑 (进行中)', level: 30, tag: 'DATA_SCIENCE', description: 'BCA 数据科学课程中的分析脚本、数据处理与逻辑。' },
          { name: 'AI辅助解决方案构建', level: 85, tag: 'AI_TOOLING', description: '利用 AI 模型和提示工程构建现代应用与自动化工作流。' },
        ]
      },
      {
        id: 'management',
        title: '项目管理与交付',
        icon: 'fa-tasks',
        skills: [
          { name: '全球客户项目管理', level: 90, tag: 'LEADERSHIP', description: '管理 15+ 全球大型客户的项目实施与交付全生命周期。' },
          { name: 'Scrum敏捷开发 (进行中)', level: 75, tag: 'PROCESS', description: '迭代交付、Sprint 冲刺规划及团队协调。' },
          { name: '售前技术方案与演示', level: 68, tag: 'ENABLEMENT', description: '解决方案架构讲解、技术演示与客户培训。' },
          { name: '工业人机工程与 UX 设计', level: 66, tag: 'DESIGN', description: '面向工厂一线操作员的以人为本交互界面设计。' },
        ]
      }
    ];
  }

  if (lang === 'ja') {
    return [
      {
        id: 'cnc',
        title: 'インダストリー4.0＆CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNCシステム＆モーション制御', level: 90, tag: 'HARDWARE', description: '高度なチューニング、コントローラー統合、精密診断。' },
          { name: 'PLC＆传感器統合', level: 85, tag: 'AUTOMATION', description: 'センサー、PLC、IOモジュールを産業用ソフトに統合。' },
          { name: 'バッチ追跡＆FIFOシステム', level: 88, tag: 'LOGISTICS', description: '資材フロー、トレーサビリティ、バッファ最適化。' },
          { name: '現地試運転・検証', level: 92, tag: 'FIELD_ENG', description: '10年以上の高難度現地構築・現地納入実績。' },
          { name: '生産自動スケジューリング', level: 75, tag: 'OPTIMIZATION', description: 'データ駆動型の設備稼働率スケジュール。' },
        ]
      },
      {
        id: 'datascience',
        title: 'データサイエンス＆AI',
        icon: 'fa-brain',
        skills: [
          { name: 'AI支援ソリューション＆プロンプト', level: 75, tag: 'AI_TOOLS', description: 'AIモデルとLLMツールで自動化を設計。' },
          { name: 'SQL＆データベース基礎', level: 35, tag: 'DATA', description: '基本SQLクエリ、データ抽出およびDB基本操作。' },
          { name: '予測分析＆OEE効率', level: 80, tag: 'ANALYTICS', description: '顧客データを分析しインサイトを提供。' },
          { name: 'データ可視化＆ダッシュボード', level: 80, tag: 'BI', description: '稼働データを視覚的インサイトに変換。' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'プログラミング＆技術基礎',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (基礎)', level: 35, tag: 'CORE_LANG', description: '産業制御ロジックと基礎C/C++文法概念。' },
          { name: 'SQL＆データクエリ', level: 25, tag: 'DATABASE', description: '基本SQLクエリとテーブル抽出。' },
          { name: 'Python＆データサイエンス (進行中)', level: 30, tag: 'DATA_SCIENCE', description: 'BCAデータサイエンス課程における分析スクリプトとロジック。' },
          { name: 'AI支援ソリューション構築', level: 85, tag: 'AI_TOOLING', description: 'AIツールを活用した現代的アプリ構築。' },
        ]
      },
      {
        id: 'management',
        title: 'マネジメント＆デリバリー',
        icon: 'fa-tasks',
        skills: [
          { name: 'グローバル顧客プロジェクト管理', level: 90, tag: 'LEADERSHIP', description: '15社以上の大型海外案件を統括。' },
          { name: 'Scrum＆アジャイル手法 (進行中)', level: 75, tag: 'PROCESS', description: 'スプリント計画とチームコーディネート。' },
          { name: 'プリセールス＆デモ実演', level: 68, tag: 'ENABLEMENT', description: '構成提案、技術デモ、顧客トレーニング。' },
          { name: '産業UXデザイン', level: 66, tag: 'DESIGN', description: '現場オペレーター向け人間工学UI設計。' },
        ]
      }
    ];
  }

  if (lang === 'es') {
    return [
      {
        id: 'cnc',
        title: 'Industria 4.0 y CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'Sistemas CNC y Control de Movimiento', level: 90, tag: 'HARDWARE', description: 'Ajuste avanzado, integración de controladores y diagnóstico.' },
          { name: 'Integración de PLC y Sensores', level: 85, tag: 'AUTOMATION', description: 'Interconexión de sensores, PLCs y módulos con software industrial.' },
          { name: 'Seguimiento por Lotes y FIFO', level: 88, tag: 'LOGISTICS', description: 'Optimización de flujo de materiales y trazabilidad.' },
          { name: 'Puesta en Marcha en Planta', level: 92, tag: 'FIELD_ENG', description: '10+ años de despliegue y validación en plantas industriales.' },
          { name: 'Programación Automática de Producción', level: 75, tag: 'OPTIMIZATION', description: 'Algoritmos basados en datos para capacidad de planta.' },
        ]
      },
      {
        id: 'datascience',
        title: 'Ciencia de Datos e IA',
        icon: 'fa-brain',
        skills: [
          { name: 'Soluciones Asistidas por IA & Prompting', level: 75, tag: 'AI_TOOLS', description: 'Uso de modelos IA y herramientas LLM para automatizar flujos.' },
          { name: 'Fundamentos de SQL y Bases de Datos', level: 35, tag: 'DATA', description: 'Consultas básicas de SQL y filtrado de datos.' },
          { name: 'Analítica Predictiva y OEE', level: 80, tag: 'ANALYTICS', description: 'Análisis de datos de clientes y entrega de información clave.' },
          { name: 'Visualización de Datos y Cuadros de Mando', level: 80, tag: 'BI', description: 'Conversión de datos operativos en paneles intuitivos.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'Programación y Bases Técnicas',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (Fundacional)', level: 35, tag: 'CORE_LANG', description: 'Lógica procedimental y fundamentos de sintaxis para control.' },
          { name: 'SQL y Consultas de Datos', level: 25, tag: 'DATABASE', description: 'Ejecución básica de consultas SQL y filtrado de tablas.' },
          { name: 'Python y Lógica de Ciencia de Datos (En Progreso)', level: 30, tag: 'DATA_SCIENCE', description: 'Scripting analítico y lógica de datos del programa BCA.' },
          { name: 'Construcción de Soluciones Asistidas por IA', level: 85, tag: 'AI_TOOLING', description: 'Uso de herramientas IA para diseñar aplicaciones modernas.' },
        ]
      },
      {
        id: 'management',
        title: 'Gestión de Proyectos y Entrega',
        icon: 'fa-tasks',
        skills: [
          { name: 'Gestión de Proyectos Globales', level: 90, tag: 'LEADERSHIP', description: 'Gestión de ciclo de vida de proyectos para 15+ clientes globales.' },
          { name: 'Metodologías Scrum y Agile (En Progreso)', level: 75, tag: 'PROCESS', description: 'Planificación de sprints y coordinación de equipos.' },
          { name: 'Preventa y Demostraciones Técnicas', level: 68, tag: 'ENABLEMENT', description: 'Presentación de arquitectura de soluciones y capacitación.' },
          { name: 'Ergonomía Industrial y UX', level: 66, tag: 'DESIGN', description: 'Diseño de interfaces enfocadas en operadores de planta.' },
        ]
      }
    ];
  }

  if (lang === 'fr') {
    return [
      {
        id: 'cnc',
        title: 'Industrie 4.0 et CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'Systèmes CNC & Contrôle de Mouvement', level: 90, tag: 'HARDWARE', description: 'Réglage avancé, intégration et diagnostic de précision.' },
          { name: 'Intégration API & Capteurs', level: 85, tag: 'AUTOMATION', description: 'Interfaçage de capteurs, API et modules industriels.' },
          { name: 'Suivi de Lot & Systèmes FIFO', level: 88, tag: 'LOGISTICS', description: 'Optimisation du flux de matières et traçabilité.' },
          { name: 'Mise en Service sur Site', level: 92, tag: 'FIELD_ENG', description: '10+ ans de déploiement et validation sur sites industriels.' },
          { name: 'Ordonnancement Automatique', level: 75, tag: 'OPTIMIZATION', description: 'Algorithmes basés sur les données de production.' },
        ]
      },
      {
        id: 'datascience',
        title: 'Science des Données & IA',
        icon: 'fa-brain',
        skills: [
          { name: 'Solutions Assistées par IA & Prompting', level: 75, tag: 'AI_TOOLS', description: 'Modèles IA et LLM pour automatiser les flux industriels.' },
          { name: 'Bases de SQL & Bases de Données', level: 35, tag: 'DATA', description: 'Requêtes SQL de base et filtrage de données.' },
          { name: 'Analyse Prédictive & OEE', level: 80, tag: 'ANALYTICS', description: 'Analyse des données clients et fourniture d\'insights.' },
          { name: 'Visualisation & Tableaux de Bord', level: 80, tag: 'BI', description: 'Transformation des données usine en graphiques clairs.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'Programmation & Bases Techniques',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (Fondamental)', level: 35, tag: 'CORE_LANG', description: 'Logique procédurale et principes de base pour systèmes industriels.' },
          { name: 'SQL & Requêtes de Données', level: 25, tag: 'DATABASE', description: 'Requêtes SQL simples et filtrage de tables.' },
          { name: 'Python & Science des Données (En cours)', level: 30, tag: 'DATA_SCIENCE', description: 'Logique d\'analyse de données issue du cursus BCA.' },
          { name: 'Création de Solutions par IA', level: 85, tag: 'AI_TOOLING', description: 'Conception d\'applications modernes via ingénierie de prompt.' },
        ]
      },
      {
        id: 'management',
        title: 'Gestion de Projet & Livraison',
        icon: 'fa-tasks',
        skills: [
          { name: 'Gestion de Projets Mondiaux', level: 90, tag: 'LEADERSHIP', description: 'Gestion de déploiements pour 15+ grands clients internationaux.' },
          { name: 'Méthodes Scrum & Agile (En cours)', level: 75, tag: 'PROCESS', description: 'Planification de sprints et coordination d\'équipe.' },
          { name: 'Avant-Vente & Démos Techniques', level: 68, tag: 'ENABLEMENT', description: 'Présentations d\'architecture et formation d\'utilisateurs.' },
          { name: 'Ergonomie Industrielle & UX', level: 66, tag: 'DESIGN', description: 'Interfaces adaptées aux opérateurs de fabrication.' },
        ]
      }
    ];
  }

  if (lang === 'de') {
    return [
      {
        id: 'cnc',
        title: 'Industrie 4.0 & CNC-Systeme',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNC-Systeme & Antriebssteuerung', level: 90, tag: 'HARDWARE', description: 'Erweitertes Tuning, Steuerungsintegration & Diagnose.' },
          { name: 'SPS & Sensor-Integration', level: 85, tag: 'AUTOMATION', description: 'Anbindung von Sensoren, SPS und E/A-Modulen.' },
          { name: 'Chargenverfolgung & FIFO', level: 88, tag: 'LOGISTICS', description: 'Optimierung von Materialfluss und Rückverfolgbarkeit.' },
          { name: 'Inbetriebnahme vor Ort', level: 92, tag: 'FIELD_ENG', description: '10+ Jahre Erfahrung bei weltweiten Industrie-Einsätzen.' },
          { name: 'Automatische Produktionsplanung', level: 75, tag: 'OPTIMIZATION', description: 'Datenbasierte Algorithmen für Anlagenauslastung.' },
        ]
      },
      {
        id: 'datascience',
        title: 'Data Science & KI',
        icon: 'fa-brain',
        skills: [
          { name: 'KI-gestützte Lösungen & Prompting', level: 75, tag: 'AI_TOOLS', description: 'Nutzung von KI-Modellen zur Automatisierung von Prozessen.' },
          { name: 'SQL & Datenbank-Grundlagen', level: 35, tag: 'DATA', description: 'Grundlegende SQL-Abfragen und Datenfilterung.' },
          { name: 'Vorausschauende Wartung & OEE', level: 80, tag: 'ANALYTICS', description: 'Analyse von Kundendaten und Bereitstellung von Erkenntnissen.' },
          { name: 'Datenvisualisierung & Dashboards', level: 80, tag: 'BI', description: 'Umwandlung von Betriebsdaten in intuitive Dashboards.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'Programmierung & Grundlagen',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (Grundwissen)', level: 35, tag: 'CORE_LANG', description: 'Prozedurale Logik und Syntaxgrundlagen für Steuerungssysteme.' },
          { name: 'SQL & Datenabfragen', level: 25, tag: 'DATABASE', description: 'Basis-SQL-Abfragen und Tabellenfilterung.' },
          { name: 'Python & Data Science Logik (In Bearbeitung)', level: 30, tag: 'DATA_SCIENCE', description: 'Analytische Logik aus dem BCA-Hochschulstudium.' },
          { name: 'KI-gestützte Anwendungsentwicklung', level: 85, tag: 'AI_TOOLING', description: 'Entwicklung moderner Anwendungen mittels KI-Tools.' },
        ]
      },
      {
        id: 'management',
        title: 'Projektmanagement & Abwicklung',
        icon: 'fa-tasks',
        skills: [
          { name: 'Globales Projektmanagement', level: 90, tag: 'LEADERSHIP', description: 'Abwicklung komplexer Projekte für 15+ internationale Kunden.' },
          { name: 'Scrum & Agile Methoden (In Bearbeitung)', level: 75, tag: 'PROCESS', description: 'Sprintplanung, Arbeitsabläufe und Teamkoordination.' },
          { name: 'Pre-Sales & Technische Demos', level: 68, tag: 'ENABLEMENT', description: 'Lösungsarchitektur-Präsentationen und Anwenderschulungen.' },
          { name: 'Industriedesign & UX', level: 66, tag: 'DESIGN', description: 'Benutzerfreundliche Schnittstellen für Maschinenbediener.' },
        ]
      }
    ];
  }

  if (lang === 'kn') {
    return [
      {
        id: 'cnc',
        title: 'ಇಂಡಸ್ಟ್ರಿ 4.0 & CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNC ಸಿಸ್ಟಮ್ಸ್ ಮತ್ತು ಮೋಷನ್ ಕಂಟ್ರೋಲ್', level: 90, tag: 'HARDWARE', description: 'ಸುಧಾರಿತ ಟ್ಯೂನಿಂಗ್ ಮತ್ತು ಸಿಸ್ಟಮ್ ನಿಯಂತ್ರಣ.' },
          { name: 'PLC ಮತ್ತು ಸೆನ್ಸರ್ ಇಂಟಿಗ್ರೇಷನ್', level: 85, tag: 'AUTOMATION', description: 'ಸಂವೇದಕಗಳು ಮತ್ತು PLC ಗಳ ನಿಯಂತ್ರಣ.' },
          { name: 'ಬ್ಯಾಚ್ ಟ್ರ್ಯಾಕಿಂಗ್ & FIFO ಸಿಸ್ಟಮ್ಸ್', level: 88, tag: 'LOGISTICS', description: 'ಉತ್ಪಾದನಾ ಸಾಮಗ್ರಿಗಳ ಸುಗಮ ನಿರ್ವಹಣೆ.' },
          { name: 'ಆನ್‌ಸೈಟ್ ಕಮಿಷನಿಂಗ್', level: 92, tag: 'FIELD_ENG', description: '10+ ವರ್ಷಗಳ ಅನುಭವದೊಂದಿಗೆ ಸ್ಥಳದಲ್ಲೇ ಅನುಷ್ಠಾನ.' },
          { name: 'ಉತ್ಪಾದನಾ ಆಟೋ-ಶೆಡ್ಯೂಲಿಂಗ್', level: 75, tag: 'OPTIMIZATION', description: 'ಡೇಟಾ-ಚಾಲಿತ ಸ್ವಯಂಚಾಲಿತ ವೇಳಾಪಟ್ಟಿ.' },
        ]
      },
      {
        id: 'datascience',
        title: 'ಡೇಟಾ ಸೈನ್ಸ್ & AI',
        icon: 'fa-brain',
        skills: [
          { name: 'AI-ಸಹಾಯದ ಪರಿಹಾರಗಳು', level: 75, tag: 'AI_TOOLS', description: 'AI ಮತ್ತು LLM ಉಪಕರಣಗಳನ್ನು ಬಳಸಿ ಅಪ್ಲಿಕೇಶನ್‌ಗಳ ವಿನ್ಯಾಸ.' },
          { name: 'SQL ಮತ್ತು ಡೇಟಾಬೇಸ್ ಮೂಲಭೂತ', level: 35, tag: 'DATA', description: 'ಮೂಲಭೂತ SQL ಕ್ವೆರಿಗಳು ಮತ್ತು ಡೇಟಾಬೇಸ್ ಕಾರ್ಯಗಳು.' },
          { name: 'ಪ್ರಿಡಿಕ್ಟಿವ್ ಅನಾಲಿಟಿಕ್ಸ್ & OEE', level: 80, tag: 'ANALYTICS', description: 'ಗ್ರಾಹಕರ ಡೇಟಾವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಮುನ್ನೋಟಗಳನ್ನು ನೀಡುವುದು.' },
          { name: 'ಡೇಟಾ ವಿಜುಲೈಸೇಶನ್ & ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', level: 80, tag: 'BI', description: 'ಉತ್ಪಾದನಾ ಡೇಟಾವನ್ನು ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಆಗಿ ಪರಿವರ್ತಿಸುವುದು.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'ಪ್ರೋಗ್ರಾಮಿಂಗ್ & ತಾಂತ್ರಿಕ ಮೂಲಭೂತ',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (ಮೂಲಭೂತ)', level: 35, tag: 'CORE_LANG', description: 'ಕೈಗಾರಿಕಾ ಸಿಸ್ಟಮ್ಸ್‌ಗಾಗಿ ಸಿ/ಸಿ++ ಪ್ರೋಗ್ರಾಮಿಂಗ್ ಮೂಲಭೂತ ಜ್ಞಾನ.' },
          { name: 'SQL & ಡೇಟಾಬೇಸ್ ಮೂಲಭೂತ', level: 25, tag: 'DATABASE', description: 'ಮೂಲಭೂತ SQL ಕ್ವೆರಿಗಳು ಮತ್ತು ಡೇಟಾ ಫಿಲ್ಟರಿಂಗ್.' },
          { name: 'ಪೈಥಾನ್ & ಡೇಟಾ ಸೈನ್ಸ್ (ಪ್ರಗತಿಯಲ್ಲಿದೆ)', level: 30, tag: 'DATA_SCIENCE', description: 'BCA ಅಭ್ಯಾಸದ ಭಾಗವಾಗಿ ಡೇಟಾ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಪೈಥಾನ್ ಜ್ಞಾನ.' },
          { name: 'AI-ಆಧಾರಿತ ಪರಿಹಾರಗಳ ನಿರ್ಮಾಣ', level: 85, tag: 'AI_TOOLING', description: 'AI ಉಪಕರಣಗಳನ್ನು ಬಳಸಿ ಅತ್ಯಾಧುನಿಕ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.' },
        ]
      },
      {
        id: 'management',
        title: 'ಮ್ಯಾನೇಜ್ಮೆಂಟ್ & ಡೆಲಿವರಿ',
        icon: 'fa-tasks',
        skills: [
          { name: 'ಜಾಗತಿಕ ಗ್ರಾಹಕ ಪ್ರಾಜೆಕ್ಟ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್', level: 90, tag: 'LEADERSHIP', description: '15+ ಪ್ರಮುಖ ಜಾಗತಿಕ ಗ್ರಾಹಕರಿಗೆ ಯೋಜನೆಗಳ ನಿರ್ವಹಣೆ.' },
          { name: 'ಸ್ಕ್ರಮ್ ಮತ್ತು ಅಜೈಲ್ ಪದ್ಧತಿಗಳು (ಪ್ರಗತಿಯಲ್ಲಿದೆ)', level: 75, tag: 'PROCESS', description: 'ತಂಡದ ಸಮನ್ವಯ ಮತ್ತು ಯೋಜಿತ ಅನುಷ್ಠಾನ.' },
          { name: 'ಪ್ರಿ-ಸೇಲ್ಸ್ & ತಾಂತ್ರಿಕ ಡೆಮೊಗಳು', level: 68, tag: 'ENABLEMENT', description: 'ತಾಂತ್ರಿಕ ವಿವರಣೆಗಳು ಮತ್ತು ಬಳಕೆದಾರರ ತರಬೇತಿ.' },
          { name: 'ಕೈಗಾರಿಕಾ UX ವಿನ್ಯಾಸ', level: 66, tag: 'DESIGN', description: 'ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಇಂಟರ್ಫೇಸ್ ವಿನ್ಯಾಸ.' },
        ]
      }
    ];
  }

  if (lang === 'hi') {
    return [
      {
        id: 'cnc',
        title: 'इंडस्ट्री 4.0 और सीएनसी',
        icon: 'fa-cogs',
        skills: [
          { name: 'सीएनसी सिस्टम और मोशन कंट्रोल', level: 90, tag: 'HARDWARE', description: 'उन्नत ट्यूनिंग और कंट्रोलर एकीकरण।' },
          { name: 'पीएलसी और सेंसर एकीकरण', level: 85, tag: 'AUTOMATION', description: 'सेंसर और PLC का औद्योगिक सॉफ्टवेयर के साथ एकीकरण।' },
          { name: 'बैच ट्रैकिंग और FIFO सिस्टम', level: 88, tag: 'LOGISTICS', description: 'सामग्री की सुगम आवाजाही का अनुकूलन।' },
          { name: 'ऑन-साइट कमीशनिंग', level: 92, tag: 'FIELD_ENG', description: '10+ वर्षों का ऑन-साइट कार्यान्वयन अनुभव।' },
          { name: 'उत्पादन ऑटो-शेड्यूलिंग', level: 75, tag: 'OPTIMIZATION', description: 'डेटा-संचालित शेड्यूलिंग एल्गोरिदम।' },
        ]
      },
      {
        id: 'datascience',
        title: 'डेटा साइंस और एआई',
        icon: 'fa-brain',
        skills: [
          { name: 'एआई-सहायता प्राप्त समाधान', level: 75, tag: 'AI_TOOLS', description: 'स्मार्ट एप्लिकेशन डिजाइन करने के लिए एआई मॉडल का उपयोग।' },
          { name: 'SQL और डेटाबेस मूल बातें', level: 35, tag: 'DATA', description: 'बुनियादी SQL प्रश्न और डेटाबेस संचालन।' },
          { name: 'पूर्वानुमानित विश्लेषण और OEE', level: 80, tag: 'ANALYTICS', description: 'ग्राहक डेटा का विश्लेषण और इनसाइट प्रदान करना।' },
          { name: 'डेटा विसावलाइज़ेशन और डैशबोर्ड', level: 80, tag: 'BI', description: 'उत्पादन डेटा को डैशबोर्ड में बदलना।' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'प्रोग्रामिंग और तकनीकी बुनियादी बातें',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (बुनियादी ज्ञान)', level: 35, tag: 'CORE_LANG', description: 'औद्योगिक प्रणालियों के लिए C/C++ का बुनियादी ज्ञान।' },
          { name: 'SQL और डेटाबेस मूल बातें', level: 25, tag: 'DATABASE', description: 'बुनियादी SQL प्रश्न और डेटा फ़िल्टरिंग।' },
          { name: 'पायथन और डेटा साइंस (प्रगति पर)', level: 30, tag: 'DATA_SCIENCE', description: 'BCA अध्ययन के तहत डेटा विश्लेषण और पायथन लॉजिक।' },
          { name: 'एआई-सहायता प्राप्त समाधान निर्माण', level: 85, tag: 'AI_TOOLING', description: 'एआई टूल्स का उपयोग करके आधुनिक एप्लिकेशन और वर्कफ़्लो का निर्माण।' },
        ]
      },
      {
        id: 'management',
        title: 'प्रबंधन और डिलीवरी',
        icon: 'fa-tasks',
        skills: [
          { name: 'वैश्विक ग्राहक परियोजना प्रबंधन', level: 90, tag: 'LEADERSHIP', description: '15+ प्रमुख वैश्विक ग्राहकों के लिए प्रबंधन।' },
          { name: 'स्क्रम और एजाइल पद्धतियां (प्रगति पर)', level: 75, tag: 'PROCESS', description: 'टीम समन्वय और योजनाबद्ध डिलीवरी।' },
          { name: 'प्री-सेल्स और तकनीकी प्रदर्शन', level: 68, tag: 'ENABLEMENT', description: 'तकनीकी प्रस्तुतियाँ और ग्राहक प्रशिक्षण।' },
          { name: 'औद्योगिक यूएक्स डिजाइन', level: 66, tag: 'DESIGN', description: 'उपयोगकर्ता के अनुकूल इंटरफेस।' },
        ]
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        id: 'cnc',
        title: 'இண்டஸ்ட்ரி 4.0 & CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNC அமைப்புகள் & இயக்கக் கட்டுப்பாடு', level: 90, tag: 'HARDWARE', description: 'மேம்பட்ட கணினி அமைப்பு மற்றும் கட்டுப்பாடு.' },
          { name: 'PLC & சென்சார் ஒருங்கிணைப்பு', level: 85, tag: 'AUTOMATION', description: 'தொழில்துறை மென்பொருளுடன் சென்சார்கள் மற்றும் PLC களின் இணைப்பு.' },
          { name: 'தொகுதி கண்காணிப்பு & FIFO அமைப்புகள்', level: 88, tag: 'LOGISTICS', description: 'பொருட்கள் நகர்வு மற்றும் கண்காணிப்பு மேலாண்மை.' },
          { name: 'ஆன்-சைட் சேவைகள்', level: 92, tag: 'FIELD_ENG', description: '10+ ஆண்டுகால கள அனுபவத்துடன் அமலாக்கம்.' },
          { name: 'தானியங்கி உற்பத்தி அட்டவணை', level: 75, tag: 'OPTIMIZATION', description: 'தரவு அடிப்படையிலான தானியங்கி அட்டவணை அமைப்பு.' },
        ]
      },
      {
        id: 'datascience',
        title: 'தரவு அறிவியல் & AI',
        icon: 'fa-brain',
        skills: [
          { name: 'AI-உதவி தீர்வுகள்', level: 75, tag: 'AI_TOOLS', description: 'AI மாதிரிகளைப் பயன்படுத்தி பயன்பாடுகளின் வடிவமைப்பு.' },
          { name: 'SQL & தரவுத்தள அடிப்படை', level: 35, tag: 'DATA', description: 'அடிப்படை SQL வினவல்கள் மற்றும் தரவுத்தள செயல்பாடுகள்.' },
          { name: 'கணிப்பு பகுப்பாய்வு & OEE', level: 80, tag: 'ANALYTICS', description: 'வாடிக்கையாளர் தரவை பகுப்பாய்வு செய்து புரிதல்களை வழங்குதல்.' },
          { name: 'தரவு காட்சிப்படுத்தல் & டாஷ்போர்டு', level: 80, tag: 'BI', description: 'உற்பத்தி தரவை டாஷ்போர்டுகளாக மாற்றுதல்.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'நிரலாக்கம் & தொழில்நுட்ப அடிப்படைகள்',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (அடிப்படை)', level: 35, tag: 'CORE_LANG', description: 'தொழில்துறை அமைப்புகளுக்கான C/C++ அடிப்படை நிரலாக்க அறிவு.' },
          { name: 'SQL & தரவுத்தள அடிப்படை', level: 25, tag: 'DATABASE', description: 'அடிப்படை SQL வினவல்கள் மற்றும் தரவுத்தள செயல்பாடுகள்.' },
          { name: 'பைதான் & தரவு அறிவியல் (நடைபெறுகிறது)', level: 30, tag: 'DATA_SCIENCE', description: 'BCA படிப்பின் ஒரு பகுதியாக தரவு பகுப்பாய்வு மற்றும் பைதான் தர்க்கம்.' },
          { name: 'AI-உதவி தீர்வுகள் உருவாக்கம்', level: 85, tag: 'AI_TOOLING', description: 'AI கருவிகளைப் பயன்படுத்தி நவீன பயன்பாடுகளை உருவாக்குதல்.' },
        ]
      },
      {
        id: 'management',
        title: 'மேலாண்மை & விநியோகம்',
        icon: 'fa-tasks',
        skills: [
          { name: 'உலகளாவிய திட்ட மேலாண்மை', level: 90, tag: 'LEADERSHIP', description: '15+ உலகளாவிய வாடிக்கையாளர்களுக்கான திட்ட மேலாண்மை.' },
          { name: 'ஸ்க்ரம் மற்றும் அஜைல் முறைகள் (நடைபெறுகிறது)', level: 75, tag: 'PROCESS', description: 'குழு ஒருங்கிணைப்பு மற்றும் திட்டமிட்ட விநியோகம்.' },
          { name: 'விற்பனைக்கு முந்தைய ஆதரவு', level: 68, tag: 'ENABLEMENT', description: 'தொழில்நுட்ப விளக்கக்காட்சிகள் மற்றும் பயிற்சிகள்.' },
          { name: 'தொழில்துறை UX வடிவமைப்பு', level: 66, tag: 'DESIGN', description: 'எளிமையான பயனர் இடைமுகங்கள்.' },
        ]
      }
    ];
  }

  if (lang === 'ml') {
    return [
      {
        id: 'cnc',
        title: 'ഇൻഡസ്ട്രി 4.0 & CNC',
        icon: 'fa-cogs',
        skills: [
          { name: 'CNC സിസ്റ്റങ്ങളും മോഷൻ കൺട്രോളും', level: 90, tag: 'HARDWARE', description: 'വിപുലമായ ട്യൂണിംഗും കൺട്രോളർ സംയോജനവും.' },
          { name: 'PLC & സെൻസർ ഇന്റഗ്രേഷൻ', level: 85, tag: 'AUTOMATION', description: 'സെൻസറുകളും PLCകളും വ്യാവസായിക സോഫ്റ്റ്‌വെയറുമായി ബന്ധിപ്പിക്കൽ.' },
          { name: 'ബാച്ച് ട്രാക്കിംഗ് & FIFO സിസ്റ്റങ്ങൾ', level: 88, tag: 'LOGISTICS', description: 'സാമഗ്രികളുടെ നീക്കവും ട്രാക്കിംഗും മെച്ചപ്പെടുത്തൽ.' },
          { name: 'ഓൺ-സൈറ്റ് സേവനങ്ങൾ', level: 92, tag: 'FIELD_ENG', description: '10+ വർഷത്തെ തൊഴിൽ പരിചയത്തോടെയുള്ള സേവനം.' },
          { name: 'ഉൽപ്പാദന ഓട്ടോ-ഷെഡ്യൂളിംഗ്', level: 75, tag: 'OPTIMIZATION', description: 'ഡാറ്റ അധിഷ്ഠിത ഷെഡ്യൂളിംഗ് ആൽഗരിതങ്ങൾ.' },
        ]
      },
      {
        id: 'datascience',
        title: 'ഡാറ്റാ സയൻസ് & AI',
        icon: 'fa-brain',
        skills: [
          { name: 'AI-സഹായത്തോടെയുള്ള പരിഹാരങ്ങൾ', level: 75, tag: 'AI_TOOLS', description: 'AI മോഡലുകൾ ഉപയോഗിച്ച് ആപ്ലിക്കേഷനുകൾ രൂപകൽപ്പന ചെയ്യൽ.' },
          { name: 'SQL & ഡാറ്റാബേസ് അടിസ്ഥാനങ്ങൾ', level: 35, tag: 'DATA', description: 'അടിസ്ഥാന SQL ക്വറികളും ഡാറ്റാബേസ് പ്രവർത്തനങ്ങളും.' },
          { name: 'പ്രവചന വിശകലനവും OEE', level: 80, tag: 'ANALYTICS', description: 'കസ്റ്റമർ ഡാറ്റ വിശകലനം ചെയ്ത് ഉൾക്കാഴ്ചകൾ നൽകൽ.' },
          { name: 'ഡാറ്റാ വിഷ്വലൈസേഷനും ഡാഷ്‌ബോർഡുകളും', level: 80, tag: 'BI', description: 'ഉൽപ്പാദന ഡാറ്റയെ ഡാഷ്‌ബോർഡുകളാക്കി മാറ്റൽ.' },
        ]
      },
      {
        id: 'techfoundations',
        title: 'പ്രോഗ്രാമിംഗും സാങ്കേതിക അടിസ്ഥാനങ്ങളും',
        icon: 'fa-terminal',
        skills: [
          { name: 'C / C++ (അടിസ്ഥാനം)', level: 35, tag: 'CORE_LANG', description: 'വ്യാവസായിക സിസ്റ്റങ്ങൾക്കായുള്ള C/C++ അടിസ്ഥാന പ്രോഗ്രാമിംഗ് അറിവ്.' },
          { name: 'SQL & ഡാറ്റാബേസ് അടിസ്ഥാനങ്ങൾ', level: 25, tag: 'DATABASE', description: 'അടിസ്ഥാന SQL ക്വറികളും ഡാറ്റാബേസ് പ്രവർത്തനങ്ങളും.' },
          { name: 'പൈത്തൺ & ഡാറ്റാ സയൻസ് (പുരോഗമിക്കുന്നു)', level: 30, tag: 'DATA_SCIENCE', description: 'BCA പഠനത്തിന്റെ ഭാഗമായുള്ള ഡാറ്റാ വിശകലനവും പൈത്തൺ അറിവും.' },
          { name: 'AI-അധിഷ്ഠിത പരിഹാര നിർമ്മാണം', level: 85, tag: 'AI_TOOLING', description: 'AI ടൂളുകൾ ഉപയോഗിച്ച് ആധുനിക ആപ്ലിക്കേഷനുകൾ നിർമ്മിക്കൽ.' },
        ]
      },
      {
        id: 'management',
        title: 'മാനേജ്‌മെന്റും ഡെലിവറിയും',
        icon: 'fa-tasks',
        skills: [
          { name: 'ഗ്ലോബൽ ക്ലയന്റ് പ്രോജക്റ്റ് മാനേജ്മെന്റ്', level: 90, tag: 'LEADERSHIP', description: '15+ ആഗോള ഉപഭോക്താക്കൾക്കായി പ്രോജക്റ്റ് മാനേജ്മെന്റ്.' },
          { name: 'സ്ക്രം രീതികൾ (പുരോഗമിക്കുന്നു)', level: 75, tag: 'PROCESS', description: 'ടീം ഏകോപനവും ആസൂത്രിത പൂർത്തീകരണവും.' },
          { name: 'പ്രീ-സെയിൽസ് പിന്തുണ', level: 68, tag: 'ENABLEMENT', description: 'സാങ്കേതിക അവതരണങ്ങളും പരിശീലനങ്ങളും.' },
          { name: 'ഇൻഡസ്ട്രിയൽ UX ഡിസൈൻ', level: 66, tag: 'DESIGN', description: 'ലളിതമായ ഉപയോക്തൃ ഇന്റർഫേസുകൾ.' },
        ]
      }
    ];
  }

  // Default English
  return [
    {
      id: 'cnc',
      title: 'Industry 4.0 & CNC',
      icon: 'fa-cogs',
      skills: [
        { name: 'CNC Systems & Motion Control', level: 90, tag: 'HARDWARE', description: 'Advanced tuning, controller integration, and precision diagnostics.' },
        { name: 'PLC & Sensor Integration', level: 85, tag: 'AUTOMATION', description: 'Interfacing sensors, PLCs, and IO modules with industrial software.' },
        { name: 'Batch Tracking & FIFO Systems', level: 88, tag: 'LOGISTICS', description: 'Optimizing material movement, traceability, and buffer rules.' },
        { name: 'On-Site Commissioning', level: 92, tag: 'FIELD_ENG', description: '10+ years of high-stakes onsite deployment and validation.' },
        { name: 'Production Auto-Scheduling', level: 75, tag: 'OPTIMIZATION', description: 'Data-driven scheduling algorithms for plant utilization.' },
      ]
    },
    {
      id: 'datascience',
      title: 'Data Science & AI',
      icon: 'fa-brain',
      skills: [
        { name: 'AI-Assisted Solutions & Prompting', level: 75, tag: 'AI_TOOLS', description: 'Leveraging AI models and LLM tools to design smart applications and automate workflows.' },
        { name: 'SQL & Database Basics', level: 35, tag: 'DATA', description: 'Basic queries, data filtering, and foundational database operations.' },
        { name: 'Predictive Analytics & OEE', level: 80, tag: 'ANALYTICS', description: 'Analyzing customers data and providing Insights' },
        { name: 'Data Visualization & Dashboards', level: 80, tag: 'BI', description: 'Translating telemetry and operational data into visual insights.' },
      ]
    },
    {
      id: 'techfoundations',
      title: 'Programming & Tech Foundations',
      icon: 'fa-terminal',
      skills: [
        { name: 'C / C++ (Foundational)', level: 35, tag: 'CORE_LANG', description: 'Procedural logic, syntax fundamentals, and memory control concepts for industrial systems.' },
        { name: 'SQL & Data Querying', level: 25, tag: 'DATABASE', description: 'Basic SQL query execution, table filtering, and database operations.' },
        { name: 'Python & Data Science Logic...In Progress', level: 30, tag: 'DATA_SCIENCE', description: 'Analytical scripting, data handling, and coursework logic from BCA Data Science.' },
        { name: 'AI-Assisted Solution Building', level: 85, tag: 'AI_TOOLING', description: 'Leveraging AI models & prompt engineering to architect modern applications and automated workflows.' },
      ]
    },
    {
      id: 'management',
      title: 'Management & Delivery',
      icon: 'fa-tasks',
      skills: [
        { name: 'Global Client Project Management', level: 90, tag: 'LEADERSHIP', description: 'Managing deployment lifecycles for 15+ major clients.' },
        { name: 'Scrum & Agile Methodologies..In progress', level: 75, tag: 'PROCESS', description: 'Iterative delivery, sprint planning, and team coordination.' },
        { name: 'Pre-Sales & Technical Demos', level: 68, tag: 'ENABLEMENT', description: 'Solution architecture presentations and client technical training.' },
        { name: 'Industrial Ergonomics & UX', level: 66, tag: 'DESIGN', description: 'Human-centered interfaces for factory floor operators.' },
      ]
    }
  ];
};

interface SkillsProps {
  lang: Language;
}

const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const t = translations[lang] || translations.en;
  const skillCategories = getSkillCategories(lang);

  const handleTabChange = (tabId: string) => {
    playClick();
    setActiveTab(tabId);
  };

  const getFilteredCategories = () => {
    if (activeTab === 'all') return skillCategories;
    return skillCategories.filter(cat => cat.id === activeTab);
  };

  return (
    <section id="skills" className="px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300 relative">
      {/* Title & Filter Tabs Layout */}
      <div className="flex flex-col mb-12 border-b border-[var(--border-dim)] pb-6 gap-6">
        <div>
          <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase block mb-2">
            // NEURAL_CAPABILITIES_MATRIX
          </span>
          <h2 className="text-3xl md:text-5xl text-[var(--accent-pink)] uppercase tracking-widest font-bold border-l-[6px] border-[var(--accent-cyan)] pl-5 break-words">
            {t.sec_skills}
          </h2>
        </div>

        {/* Filter Tabs - Clean Horizontal Flex Grid */}
        <div className="flex flex-wrap items-center gap-2.5 w-full">
          <button
            onClick={() => handleTabChange('all')}
            onMouseEnter={playHover}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-all clip-corner whitespace-nowrap flex-shrink-0 ${
              activeTab === 'all'
                ? 'bg-[var(--accent-yellow)] text-black shadow-[0_0_10px_var(--accent-yellow)]'
                : 'bg-[var(--bg-secondary)] border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]'
            }`}
          >
            All Protocols
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              onMouseEnter={playHover}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-all clip-corner whitespace-nowrap flex-shrink-0 flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-[var(--accent-cyan)] text-black shadow-[0_0_10px_var(--accent-cyan)]'
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-dim)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]'
              }`}
            >
              <i className={`fas ${cat.icon}`}></i>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {getFilteredCategories().map(cat => (
          <div 
            key={cat.id} 
            className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-6 clip-corner relative hover:border-[var(--accent-cyan)] transition-all group shadow-[0_0_15px_rgba(0,0,0,0.4)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-dim)] pb-3">
              <div className="w-10 h-10 bg-[var(--bg-primary)] border border-[var(--accent-cyan)] flex items-center justify-center text-[var(--accent-cyan)] text-lg">
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-[var(--text-primary)] tracking-wide">
                  {cat.title}
                </h3>
                <span className="text-xs font-mono text-[var(--accent-yellow)]">// CATEGORY_ACTIVE</span>
              </div>
            </div>

            {/* List */}
            <div className="space-y-5">
              {cat.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1 group/item">
                  <div className="flex justify-between items-center text-sm font-mono">
                    <span className="text-[var(--text-primary)] font-bold flex items-center gap-2">
                      <span className="text-[var(--accent-pink)] text-xs">■</span>
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[var(--accent-cyan)] font-bold">[{skill.tag}]</span>
                      <span className="text-xs text-[var(--accent-yellow)] font-bold">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-[var(--bg-primary)] border border-[var(--border-dim)] overflow-hidden p-[1px]">
                    <div 
                      className="h-full bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-yellow)] to-[var(--accent-pink)] transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] italic pl-4 border-l border-[var(--border-dim)] mt-1">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
