const skills=[
["fa-server","Backend & .NET",["C#","NET 8/7/6","ASP.NET Core","Web API","EF Core","LINQ","Dapper","Dependency Injection","Background Services","Legacy C# Maintenance"]],
["fa-plug","REST APIs",["RESTful APIs","OpenAPI/Swagger","API Versioning","API-First Design","JSON","SOAP","Postman"]],
["fa-database","Databases",["SQL Server","Azure SQL","T-SQL","Stored Procedures","Indexing","Query Tuning","PostgreSQL","Oracle","Redis","MongoDB"]],
["fa-diagram-project","Enterprise Integrations",["Dynamics 365","Coupa","Trackunit","Power Automate","Logic Apps","Azure Service Bus","Kafka","Event Grid","RabbitMQ","Webhooks"]],
["fa-cloud","Cloud & DevOps",["Azure App Service","Azure Functions","Key Vault","AKS","Docker","Kubernetes","Azure DevOps","GitHub Actions","Terraform","SonarQube"]],
["fa-brands fa-angular","Frontend",["Angular 14–19","Signals","RxJS","NgRx","TypeScript","React.js","Node.js","Bootstrap","Sass","WCAG"]],
["fa-shield-halved","Security & Identity",["OAuth 2.0","OpenID Connect","JWT","Azure Entra ID","RBAC","OWASP Top 10","Secure Coding"]],
["fa-robot","AI & AI-Assisted Dev",["GitHub Copilot","Azure OpenAI","LLMs","RAG","Embeddings","Vector Search","Prompt Engineering","Responsible AI"]],
["fa-vial-circle-check","Testing & Quality",["xUnit","NUnit","MSTest","Moq","Playwright","Selenium","TDD","Integration Testing"]],
["fa-chart-line","Observability",["Application Insights","Azure Monitor","Distributed Tracing","Health Checks","Prometheus","Grafana","ELK"]],
["fa-sitemap","Architecture",["Microservices","Clean Architecture","DDD","SOLID","Design Patterns","Event-Driven","Distributed Systems"]],
["fa-clipboard-list","WorkPro & Domain",["Operations","Dispatch","Asset Management","Field Service","Work Order Lifecycle","Billing Workflows","Audit History"]]
];
const jobs=[
["Senior .NET Full Stack Lead / Technical Lead","Wells Fargo","Feb 2024 – Present","Enterprise financial services platform with secure APIs, operational workflows and AI-enabled capabilities.",[
"Build production-grade REST APIs with C#, .NET 8/7, ASP.NET Core, EF Core and SQL Server for order processing, scheduling, billing and asset management.",
"Developed WorkPro backend modules across Operations, Dispatch, Asset Management and Field Service, including work order lifecycle and technician allocation logic.",
"Integrated Dynamics 365, Coupa and Trackunit using REST, webhooks, Azure Service Bus and Kafka; automated flows with Power Automate and Logic Apps.",
"Secured APIs with OAuth 2.0, OpenID Connect, JWT, Entra ID and RBAC; added audit history, structured logging and OWASP hardening.",
"Deployed .NET microservices on Docker and AKS with Azure DevOps and GitHub Actions pipelines; monitored with Application Insights.",
"Led 2–4 engineers, co-owned architecture and standards, and set review rules for AI-generated code (GitHub Copilot)."]],
["Senior .NET Full Stack Developer / Technical Lead","Prodigy Health","Mar 2022 – Jan 2024","Healthcare platform for member management, claims-related processing and enterprise integrations.",[
"Designed REST APIs and microservices with .NET Core, EF Core and SQL Server; optimized high-volume transactional workloads.",
"Migrated legacy .NET applications toward .NET Core and cloud-native architecture without disrupting production.",
"Built Azure Functions and Logic Apps automation; shipped Docker/AKS deployments with CI/CD and security scanning.",
"Ran WCAG accessibility audits (axe, WAVE, Lighthouse) and built reusable Design System components.",
"Led design discussions and code reviews, and mentored junior and mid-level developers."]],
["Senior .NET Full Stack Developer","Bank of America","Jan 2021 – Feb 2022","Enterprise banking application for customer servicing, account workflows and secure transactions.",[
"Built REST APIs and backend services with ASP.NET Core, MVC, Web API, EF Core and SQL Server.",
"Developed an Angular/React Enterprise Design System integrated with ASP.NET Core Web APIs.",
"Implemented OAuth 2.0/JWT, RBAC, auditing and WCAG-compliant form validation.",
"Improved performance through async programming, SQL and API tuning, and caching."]],
["Senior .NET Developer","State of Maryland","Nov 2018 – Dec 2020","Modernization of government applications for citizen services, case management and reporting.",[
"Built reusable REST APIs with ASP.NET Core and migrated selected legacy components to .NET Core.",
"Integrated state systems through REST and SOAP, secured with JWT/OAuth and role-based authorization.",
"Applied layered architecture, dependency injection and centralized logging; built Angular forms and routing."]],
[".NET Developer","AIG Insurance","May 2016 – Oct 2018","Insurance policy and claims management platform.",[
"Built ASP.NET MVC and Web API applications with Entity Framework and SQL Server for policy and claims workflows.",
"Enhanced legacy .NET Framework code and integrated enterprise systems via REST and SOAP.",
"Wrote NUnit/MSTest tests and handled production troubleshooting and root-cause analysis."]],
["Junior .NET Developer","PepsiCo","Feb 2013 – Apr 2016","Enterprise application for internal operations, reporting and workflow processes.",[
"Developed ASP.NET MVC and Web Forms applications with ADO.NET and SQL Server.",
"Wrote stored procedures, views and functions for data processing and reporting.",
"Delivered releases across Dev, QA, UAT and production with unit and regression testing."]]
];
document.getElementById('skillGrid').innerHTML=skills.map(s=>`<div class="card rv"><h3><i class="${s[0].includes('brands')?s[0]:'fa-solid '+s[0]}"></i>${s[1]}</h3><div class="chips">${s[2].map(c=>`<span>${c}</span>`).join('')}</div></div>`).join('');
document.getElementById('tl').innerHTML=jobs.map((j,i)=>`<article class="job rv${i==0?' open':''}"><button aria-expanded="${i==0}"><div><h3>${j[0]}</h3><div class="co">${j[1]}</div><small><i class="fa-regular fa-calendar"></i> ${j[2]}</small></div><i class="fa-solid fa-chevron-down ch"></i></button><div class="body"><div class="in"><p class="pr">${j[3]}</p><ul>${j[4].map(x=>`<li>${x}</li>`).join('')}</ul></div></div></article>`).join('');
document.querySelectorAll('.job button').forEach(b=>b.onclick=()=>{const j=b.parentElement,o=j.classList.toggle('open');b.setAttribute('aria-expanded',o)});
// menu
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger.onclick=()=>{const s=menu.classList.toggle('show');burger.setAttribute('aria-expanded',s)};
menu.onclick=e=>{if(e.target.tagName=='A'){menu.classList.remove('show');burger.setAttribute('aria-expanded',false)}};
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(c=>{const t=+c.dataset.n;let v=0;const id=setInterval(()=>{c.textContent=++v+(t==13?'+':'');if(v>=t)clearInterval(id)},90)});io.unobserve(e.target)}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// rotating role
const roles=['C# | .NET 8 | REST APIs','SQL Server | Performance Tuning','WorkPro | Dispatch | Field Service','Azure | Angular | AI-assisted dev'];
const re=document.getElementById('role'),still=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(still){re.textContent='Senior Full Stack Developer – Backend'}else{let ri=0,ci=0,del=false;(function t(){const w=roles[ri];re.textContent=w.slice(0,ci);if(!del&&ci<w.length){ci++;setTimeout(t,70)}else if(!del){del=true;setTimeout(t,1500)}else if(ci>0){ci--;setTimeout(t,35)}else{del=false;ri=(ri+1)%roles.length;setTimeout(t,300)}})()}
// typed API response
const out=`{
  <span class="k">"name"</span>: <span class="s">"Rohith Reddy"</span>,
  <span class="k">"title"</span>: <span class="s">"Senior Full Stack Developer"</span>,
  <span class="k">"experienceYears"</span>: <span class="n">13</span>,
  <span class="k">"primaryStack"</span>: [<span class="s">"C#"</span>, <span class="s">".NET 8"</span>, <span class="s">"SQL Server"</span>],
  <span class="k">"domains"</span>: [<span class="s">"Dispatch"</span>, <span class="s">"Field Service"</span>],
  <span class="k">"cloud"</span>: [<span class="s">"Azure"</span>, <span class="s">"AKS"</span>, <span class="s">"Kafka"</span>],
  <span class="k">"security"</span>: <span class="s">"OAuth2 · JWT · RBAC"</span>,
  <span class="k">"openToWork"</span>: <span class="n">true</span>
}`;
const code=document.getElementById('code');
if(still){code.innerHTML=out}else{let i=0;(function t(){while(i<out.length&&out[i]=='<'){i=out.indexOf('>',i)+1}
 code.innerHTML=out.slice(0,++i);if(i<out.length)setTimeout(t,22)})()}