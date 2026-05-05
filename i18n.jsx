// Internationalization strings (FR / EN)
const I18N = {
  fr: {
    nav: { home: 'accueil', work: 'projets', about: 'à propos' },
    location: 'Paris, FR',
    status: 'Disponible ASAP',
    timezone: 'UTC+1',
    role_titles: [
      'Data Scientist',
      'Machine Learning Engineer',
      'NLP & LLM Researcher',
      'Statisticien curieux',
      'Builder de pipelines IA',
    ],
    hero: {
      label: 'portfolio / v2026',
      name_first: 'Théo',
      name_last: 'Dalex',
      bio: "Je transforme des données brutes en décisions concrètes. Spécialisé en machine learning, NLP et systèmes LLM en production. Toujours partant pour creuser un problème mal posé.",
      cta_primary: 'voir les projets',
      cta_secondary: 'télécharger CV',
      hud_top: 'SUBJECT::TD-01',
      hud_bottom: 'STATUS // ONLINE',
    },
    projects: {
      label: 'mes projets / 2024 — 2026',
      title: 'Sélection de travaux',
      sub: 'Projets répartis en trois catégories. Cliquez pour explorer.',
      categories: [
        {
          name: 'Jeux-vidéo',
          items: [
            { tag: 'GAME', title: 'Sentinel-LM', desc: "Système de détection d'hallucinations pour LLMs en production. Réduit le taux d'erreur de 34% sur les pipelines RAG.", stack: ['Python', 'PyTorch', 'FastAPI', 'Redis'] },
            { tag: 'GAME', title: 'GeoVision', desc: "Modèle de segmentation d'images satellites pour cartographier la végétation urbaine sur 12 grandes villes.", stack: ['TensorFlow', 'GDAL', 'GCP'] },
          ],
        },
        {
          name: 'Projet Kaggle',
          items: [
            { tag: 'KAGGLE', title: 'PulseGrid', desc: "Prévision de charge énergétique horaire avec ensembles de transformers. MAPE 4.1% sur 18 mois.", stack: ['XGBoost', 'Darts', 'MLflow'] },
            { tag: 'KAGGLE', title: 'Atlas Mobility', desc: "Dashboard interactif de mobilité urbaine. Traite 800M de points GPS anonymisés par jour.", stack: ['DuckDB', 'D3.js', 'Observable'] },
          ],
        },
        {
          name: 'Divers',
          items: [
            { tag: 'RESEARCH', title: 'Causal-Lab', desc: "Bibliothèque open-source pour l'inférence causale sur données observationnelles. 1.2k stars sur GitHub.", stack: ['Python', 'PyMC', 'NumPy'] },
            { tag: 'LLM-OPS', title: 'PromptForge', desc: "Plateforme d'évaluation et versioning de prompts. Tests A/B automatisés sur 14 modèles.", stack: ['TypeScript', 'Postgres', 'OpenAI'] },
          ],
        },
      ],
    },
    cv: {
      label: 'cv / à propos',
      title: 'Apprendre à me connaître',
      sub: "Cinq ans entre la recherche académique et l'industrie. Je crois aux solutions simples qui marchent, à la rigueur statistique, et au café noir.",
      skills_title: 'compétences',
      skills_count: '12 actives',
      skills: [
        { name: 'Python', pct: 95 },
        { name: 'PyTorch', pct: 88 },
        { name: 'SQL / DuckDB', pct: 92 },
        { name: 'NLP / LLMs', pct: 85 },
        { name: 'Statistiques', pct: 90 },
        { name: 'MLOps', pct: 78 },
        { name: 'R', pct: 70 },
        { name: 'Cloud (GCP/AWS)', pct: 75 },
      ],
      timeline_title: 'parcours',
      timeline_count: '5 étapes',
      timeline: [
        { date: '2025 — 2026', role: 'Tour du monde', org: 'autonome', desc: "18 pays visités , entierement en autonomie , finnassement & budgétisation autonome. Anglais parlé 70% , Espagnol 20%, Français 10% du temps" },
        { date: '2024 — 2025', role: 'Data Scientist', org: 'Stellantis, Poissy', desc: "Lead technique sur les systèmes ML pour projet d'entreprise. Modele RNN, evaluation, observabilité." },
        { date: '2023 — 2024', role: 'Data Analyst', org: "Stellantis, Poissy", desc: "Migration des bases de données Oracle vers Snowflake." },
        { date: '2022 — 2023', role: 'Data Analyst', org: 'Stellantis, Vellizy', desc: "Analyse des incidents techniques et optimisation des processus avec BI et organisation de vue et table SQL" },
        { date: '2021 — 2024', role: 'Master IA & Big Data', org: 'ESGI', desc: "Spécialisation IA et Big Data avec option robotique , 3 ans d'alternance chez Stellantis" },
      ],
      contact_title: 'contact',
      contact_count: 'always-on',
      stats: [
        { label: 'années xp', value: '3+' },
        { label: 'modèles en prod', value: '14' },
        { label: 'papiers publiés', value: '03' },
        { label: 'café / jour', value: '∞' },
      ],
    },
    footer: { left: '© 2026 Théo Dalex — built with care + caffeine', right: 'last deploy: 2026.05.04' },
  },
  en: {
    nav: { home: 'home', work: 'work', about: 'about' },
    location: 'Paris, FR',
    status: 'Available Q3 2026',
    timezone: 'UTC+1',
    role_titles: [
      'Data Scientist',
      'Machine Learning Engineer',
      'NLP & LLM Researcher',
      'Curious statistician',
      'AI pipeline builder',
    ],
    hero: {
      label: 'portfolio / v2026',
      name_first: 'Théo',
      name_last: 'Dalex',
      bio: 'I turn raw data into concrete decisions. Specialised in machine learning, NLP and production LLM systems. Always up for digging into an ill-posed problem.',
      cta_primary: 'view work',
      cta_secondary: 'download CV',
      hud_top: 'SUBJECT::TD-01',
      hud_bottom: 'STATUS // ONLINE',
    },
    projects: {
      label: 'selected work / 2024 — 2026',
      title: 'Selected work',
      sub: 'Projects split into three categories. Click to explore.',
      categories: [
        {
          name: 'Video Games',
          items: [
            { tag: 'GAME', title: 'Sentinel-LM', desc: 'Hallucination detection system for production LLMs. Cuts error rate by 34% on RAG pipelines.', stack: ['Python', 'PyTorch', 'FastAPI', 'Redis'] },
            { tag: 'GAME', title: 'GeoVision', desc: 'Satellite imagery segmentation model mapping urban vegetation across 12 major cities.', stack: ['TensorFlow', 'GDAL', 'GCP'] },
          ],
        },
        {
          name: 'Kaggle Projects',
          items: [
            { tag: 'KAGGLE', title: 'PulseGrid', desc: 'Hourly energy load forecasting with transformer ensembles. 4.1% MAPE over 18 months.', stack: ['XGBoost', 'Darts', 'MLflow'] },
            { tag: 'KAGGLE', title: 'Atlas Mobility', desc: 'Interactive urban mobility dashboard. Processes 800M anonymised GPS points daily.', stack: ['DuckDB', 'D3.js', 'Observable'] },
          ],
        },
        {
          name: 'Misc',
          items: [
            { tag: 'RESEARCH', title: 'Causal-Lab', desc: 'Open-source library for causal inference on observational data. 1.2k GitHub stars.', stack: ['Python', 'PyMC', 'NumPy'] },
            { tag: 'LLM-OPS', title: 'PromptForge', desc: 'Prompt evaluation and versioning platform. Automated A/B tests across 14 models.', stack: ['TypeScript', 'Postgres', 'OpenAI'] },
          ],
        },
      ],
    },
    cv: {
      label: 'cv / about',
      title: 'Get to know me',
      sub: 'Five years between academic research and industry. I believe in simple solutions that work, statistical rigour, and black coffee.',
      skills_title: 'skills',
      skills_count: '12 active',
      skills: [
        { name: 'Python', pct: 95 },
        { name: 'PyTorch', pct: 88 },
        { name: 'SQL / DuckDB', pct: 92 },
        { name: 'NLP / LLMs', pct: 85 },
        { name: 'Statistics', pct: 90 },
        { name: 'MLOps', pct: 78 },
        { name: 'R', pct: 70 },
        { name: 'Cloud (GCP/AWS)', pct: 75 },
      ],
      timeline_title: 'experience',
      timeline_count: '5 steps',
      timeline: [
        { date: '2025 — 2026', role: 'World Tour', org: 'Autonomous', desc: "18 countries visited, entirely self-managed, autonomous financing & budgeting. English spoken 70%, Spanish 20%, French 10% of the time" },
        { date: '2024 — 2025', role: 'Data Scientist', org: 'Stellantis, Poissy', desc: "Technical lead on ML systems for enterprise project. RNN model, evaluation, observability." },
        { date: '2023 — 2024', role: 'Data Analyst', org: "Stellantis, Poissy", desc: "Migration of Oracle databases to Snowflake." },
        { date: '2022 — 2023', role: 'Data Analyst', org: 'Stellantis, Vellizy', desc: "Analysis of technical incidents and process optimization with BI, SQL view and table organization." },
        { date: '2021 — 2024', role: 'Master AI & Big Data', org: 'ESGI', desc: "AI and Big Data specialization with robotics option, 3 years of work-study at Stellantis." },
      ],
      contact_title: 'contact',
      contact_count: 'always-on',
      stats: [
        { label: 'years xp', value: '3+' },
        { label: 'models in prod', value: '14' },
        { label: 'papers published', value: '03' },
        { label: 'coffee / day', value: '∞' },
      ],
    },
    footer: { left: '© 2026 Théo Dalex — built with care + caffeine', right: 'last deploy: 2026.05.04' },
  },
};

window.I18N = I18N;
