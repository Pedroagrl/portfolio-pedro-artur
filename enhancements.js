const translations = [];
function translateGroup(selector, english) {
  const elements = [...document.querySelectorAll(selector)];
  if (elements.length !== english.length) console.warn(`Translation count: ${selector}`);
  elements.forEach((element, index) => {
    if (english[index] != null) translations.push({element, original:element.innerHTML, english:english[index]});
  });
}

translateGroup('.desktop-nav a', ['Experience','Projects','Expertise','Skills']);
translateGroup('.mobile-nav nav a', ['Experience','Projects','Expertise','Skills','Contact']);
translateGroup('.header-contact', ['Contact <span aria-hidden="true">↗</span>']);
translateGroup('.skip-link', ['Skip to content']);
translateGroup('.mobile-nav summary', ['Menu <span aria-hidden="true">＋</span>']);
translateGroup('.eyebrow-sticker', ['DATA ANALYST · SQL &amp; PYTHON']);
translateGroup('.hero h1', ['<span>HELLO,</span><span>I’M <em>PEDRO.</em></span>']);
translateGroup('.hero-role', ['Python, SQL and data modeling. From raw data to analytical applications.']);
translateGroup('.hero-description', ['I build analytical pipelines, validate data and develop applications with Pandas, Streamlit and Plotly. Modular code, automated tests and visualizations make data easier to explore with confidence.']);
translateGroup('.hero-actions .button', ['Explore projects <span aria-hidden="true">↘</span>','Contact me <span aria-hidden="true">↗</span>']);
translateGroup('.scroll-cue', ['SCROLL TO EXPLORE <span aria-hidden="true">↓</span>']);
translateGroup('.ticker-track span', Array(2).fill('DATA ANALYTICS <b>✳</b> POWER BI <b>✳</b> SQL <b>✳</b> PYTHON <b>✳</b> PANDAS <b>✳</b> STREAMLIT <b>✳</b> PLOTLY <b>✳</b> ETL <b>✳</b> VISUALIZATION <b>✳</b>'));
translateGroup('.section-index', ['01 / EXPERIENCE','02 / PROJECTS','03 / EXPERTISE','04 / SKILLS &amp; TOOLS','05 / EDUCATION &amp; LEARNING']);
translateGroup('#experience-title', ['EXPERIENCE<span class="heading-dot">.</span>']);
translateGroup('.experience .section-heading>p', ['Data, code and automation applied to real problems.']);
translateGroup('.timeline-company h3', ['Grupo Energisa','Freelance']);
translateGroup('.timeline-company p', ['Eusébio, Brazil','Dr. Jéssica Tavares Clinic']);
translateGroup('.date-tag', ['JUN 2026 — PRESENT','SEP 2026 — PRESENT']);
translateGroup('.current-label', ['CURRENT ROLE','PROJECT IN DEVELOPMENT']);
translateGroup('.timeline-body h3', ['Data Intern','Automation &amp; AI Developer']);
translateGroup('.timeline-body>ul:not(.tags) li', [
  'Served as the first data professional at Grupo Energisa’s Eusébio unit, building its analytical ecosystem from the ground up.',
  'Contributed directly to July 2026 becoming the best month of the year, with portfolio growth of 35% compared with June.',
  'Modeled, cleaned and prepared datasets using SQL, advanced Excel and CRM integration, including analytical queries and views that ensured data quality, consistency and traceability for decision making.',
  'Built Power Automate workflows for SLA tracking and Microsoft Teams notifications, among other automations, reducing manual work and improving team efficiency.',
  'Built a Power Apps application to improve the sales team’s funnel and sales performance.',
  'Developed strategic dashboards that turned operational data into accessible visualizations for technical and nontechnical stakeholders.',
  'Designed and implemented an LLM based multiagent system to support analytics operations, with specialized agents and separated responsibilities.',
  'Developing an AI agent in n8n for an aesthetic clinic’s commercial support, including lead qualification, service queries and negotiation rules.',
  'Structured contact, opportunity and offer datasets in n8n Data Tables for agent development and testing, with a planned migration to Supabase for production.',
  'Planning a web dashboard and data architecture with Supabase to manage the sales funnel, leads, payments, appointments and pending items, including reservations, confirmations and handoff between AI and the human team.',
  'Created and ran simulated conversation tests to identify failures and refine prompts, response consistency, tool use and compliance with business rules.',
  'Applied Kanban and created an architecture diagram to give the manager visibility into priorities, blockers and deliveries, as well as the support workflows and planned integrations.'
]);
translateGroup('.timeline-body .tags', ['<li>SQL</li><li>Data quality</li><li>Power Automate</li><li>Generative AI</li>','<li>n8n</li><li>AI agents</li><li>Kanban</li><li>Supabase</li>']);
translateGroup('#projects-title', ['DATA, CODE<br><span class="outlined">IN PRACTICE.</span>']);
translateGroup('.projects .section-heading>p', ['Five projects focused on data preparation, modeling, analytical applications and validation. Explore the implementations and source code.']);
translateGroup('.project-topline span:first-child', ['PYTHON / FEATURED PROJECT','WEB BI &amp; AUTOMATION','SALES &amp; CONVERSION','BUSINESS INTELLIGENCE','HEALTH DATA']);
translateGroup('.project h3', ['SALES ANALYSIS<br>WITH PYTHON','SALES MANAGEMENT<br>BI','SALES FUNNEL','SALES PERFORMANCE','CARDIAC ANALYSIS']);
translateGroup('.project-details p:not(.project-note), .project-card .card-body > p', [
  'Pipeline covering 9,435 synthetic records: loading, validation, type conversion, transformation and Pandas metrics. Streamlit app with global filters, Plotly charts, Pareto analysis and CSV export.',
  'A solution to track sales, conversion, team performance and funnel progression. I organized datasets and KPIs, built six analytical views and used AI agents to help validate calculations.',
  'Extracted and consolidated more than 150,000 records in PostgreSQL. SQL queries produced six KPIs and an Excel dashboard with analyses by state, brand, store and weekday.',
  'Star schema, DAX measures and role based access control for analyzing sales, promotions, margins and products in Power BI.',
  'Visualized symptoms, ECG results and physiological indicators to explore patterns and discrepancies in cardiac risk assessment.'
]);
translateGroup('.project-note', ['Modular code, calculations separated from the interface, and 53 tests using unittest and Streamlit AppTest, integrated with GitHub Actions.','The public demo uses synthetic data and generic identifiers.']);
translateGroup('.project .tags', [
  '<li>Python</li><li>Pandas</li><li>Streamlit</li><li>Plotly</li><li>CI / testing</li>',
  '<li>Business Intelligence</li><li>Multiagent AI</li><li>HTML · CSS · JS</li>',
  '<li>SQL</li><li>PostgreSQL</li><li>Excel</li>',
  '<li>Power BI</li><li>DAX</li><li>RLS</li>',
  '<li>Power BI</li><li>Clinical data</li><li>Visualization</li>'
]);
translateGroup('.project .text-link', ['Watch video ↗','Code and documentation ↗','Watch project <span aria-hidden="true">↗</span>','Video <span aria-hidden="true">↗</span>','Code <span aria-hidden="true">↗</span>','View project <span aria-hidden="true">↗</span>','Video <span aria-hidden="true">↗</span>','Code <span aria-hidden="true">↗</span>']);
translateGroup('#expertise-title', ['WHAT I<br><span class="outlined">BUILD.</span>']);
translateGroup('.expertise-grid h3', ['Python Analytics','SQL &amp; Modeling','BI &amp; Automation']);
translateGroup('.expertise-grid li', [
  'Cleaning and transformation with Pandas','Aggregations, rankings and time series','Streamlit apps and Plotly charts','Tests with unittest and AppTest',
  'Analytical queries and views','PostgreSQL and MySQL','ETL and data validation','Dimensional modeling and Star Schema',
  'Power BI, DAX and Power Query','Dashboards and access control (RLS)','Power Automate workflows','Generative AI for development'
]);
translateGroup('#tools-title', ['SKILLS &amp; TOOLS']);
translateGroup('.skill-cloud-group h3', ['Skills','Tools','Languages']);
translateGroup('.skill-cloud-group .large-tags', [
  '<li>Python</li><li>SQL</li><li>Pandas</li><li>NumPy</li><li>PostgreSQL</li><li>MySQL</li><li>DAX</li><li>Power Query</li><li>RLS</li><li>Generative AI</li>',
  '<li>Power BI</li><li>Streamlit</li><li>Plotly</li><li>Advanced Excel</li><li>GitHub Actions</li><li>Power Automate</li><li>n8n</li><li>Power Apps</li>',
  '<li>Portuguese · Native</li><li>English · Intermediate (B2)</li>'
]);
translateGroup('#education-title', ['ALWAYS<br>LEARNING<span>.</span>']);
translateGroup('.degree h3', ['Computer Science']);
translateGroup('.degree p', ['University of Fortaleza · UNIFOR']);
translateGroup('.degree small', ['Bachelor’s degree · 2024 — 2028 · In progress']);
translateGroup('.microsoft-heading h3', ['Microsoft credentials']);
translateGroup('.microsoft-heading p', ['Microsoft Learn · verifiable achievements']);
translateGroup('.credential-kind', ['MICROSOFT APPLIED SKILLS','MICROSOFT LEARN · MODULE','MICROSOFT LEARN · LEARNING PATH']);
translateGroup('.credential-open', ['View credential ↗','View achievement ↗','View achievement ↗']);
translateGroup('.courses h4', ['Other training']);
translateGroup('.courses li', ['Data Analysis with Python and Pandas','SQL for Data Analysis: From basic to advanced','SQL Databases from Beginner to Advanced + Real Projects']);
translateGroup('.courses .text-link', ['View on LinkedIn ↗']);
translateGroup('#contact-title', ['LET’S<br />TALK']);
translateGroup('.contact-intro p', ['Available for new data opportunities and projects.']);
translateGroup('.site-footer span:first-of-type', ['© 2026 PEDRO ARTUR. ALL RIGHTS RESERVED.']);
translateGroup('.site-footer span:last-of-type', ['FORTALEZA, CE · BRAZIL']);

const translatedAttributes = [
  ['.brand','aria-label','Pedro Artur, back to top'],
  ['.desktop-nav','aria-label','Main navigation'],
  ['.mobile-nav summary','aria-label','Open menu'],
  ['.mobile-nav nav','aria-label','Mobile navigation'],
  ['.hero-portrait img','alt','Portrait of Pedro Artur'],
  ['.company-logo img','alt','Grupo Energisa logo'],
  ['.ticker','aria-label','Areas and tools: data analytics, SQL, Python, Pandas, Streamlit, Plotly, ETL and Power BI'],
  ['.python-featured .project-image','aria-label','Watch the Sales Analysis with Python video'],
  ['.python-featured .project-image img','alt','Sales analysis app in Streamlit, with filters and data table'],
  ['.project-card:nth-child(1) .project-image','aria-label','Watch the Sales Funnel dashboard video'],
  ['.project-card:nth-child(2) .project-image','aria-label','View the Sales Performance repository'],
  ['.project-card:nth-child(3) .project-image','aria-label','Watch the Cardiac Analysis dashboard video']
].map(([selector,attribute,english]) => {
  const element = document.querySelector(selector);
  return element && {element,attribute,english,original:element.getAttribute(attribute)};
}).filter(Boolean);

function setLanguage(language) {
  const useEnglish = language === 'en';
  translations.forEach(({element,original,english}) => { element.innerHTML = useEnglish ? english : original; });
  translatedAttributes.forEach(({element,attribute,english,original}) => element.setAttribute(attribute,useEnglish ? english : original));
  document.documentElement.lang = useEnglish ? 'en' : 'pt-BR';
  document.title = useEnglish ? 'Pedro Artur — Data Analyst | SQL & Python' : 'Pedro Artur — Analista de Dados | SQL & Python';
  document.querySelector('meta[name="description"]').content = useEnglish
    ? 'Pedro Artur is a data analyst focused on SQL and Python. Explore projects using Pandas, Streamlit, Plotly and Power BI.'
    : 'Pedro Artur é Analista de Dados com foco em SQL e Python. Conheça projetos em Python, SQL, Pandas, Streamlit, Plotly e Power BI.';
  document.querySelectorAll('.language-button').forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
document.querySelectorAll('.language-button').forEach(button => button.addEventListener('click', () => {
  const language = button.dataset.language;
  setLanguage(language);
  const url = new URL(location.href);
  if (language === 'en') url.searchParams.set('lang','en'); else url.searchParams.delete('lang');
  history.replaceState(null,'',url);
}));
setLanguage(new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'pt');
window.addEventListener('popstate', () => setLanguage(new URL(location.href).searchParams.get('lang') === 'en' ? 'en' : 'pt'));

if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.section-heading,.skills-heading,.timeline-item,.project,.expertise-grid article,.skill-cloud-group,.degree,.credential,.contact-layout');
  targets.forEach((target,index) => {
    target.classList.add('reveal');
    target.style.setProperty('--reveal-delay',`${index % 3 * 70}ms`);
  });
  document.body.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), {threshold:.08,rootMargin:'0px 0px 30px 0px'});
  targets.forEach(target => observer.observe(target));
}
let ticking = false;
function updateScrollProgress() {
  const range = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('.site-header').style.setProperty('--scroll-progress',`${range > 0 ? scrollY/range*100 : 0}%`);
  ticking = false;
}
addEventListener('scroll',() => {if (!ticking) {requestAnimationFrame(updateScrollProgress);ticking=true;}},{passive:true});
updateScrollProgress();
