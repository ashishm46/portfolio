/* ===== Mini CMS Data ===== */
const DATA = {
  // ABOUT → SKILLS content pulled from your resume
  skillsTech: [
    "Python (Tkinter, PyQt, Django)",
    "LLM (SFT, RLHF, DPO, GPT-4, LLaMA 3.1, RAG)",
    "AIML (Action Recognition, Face Recognition, OpenCV, NumPy, Panda & TensorFlow)",
    "JavaScript / TypeScript",
    "C++ QT/QML (Beginner Level)",
    "C (Basic)",
    "HTML and XML"
  ],
  skillsTools: [
    "Windows, Ubuntu",
    "QT Creator, Visual Code, Visual Studio",
    "GIT"
  ],

  /* ===== Projects ===== */
  projects: [
    // {
    //   title: "LLM Ops & Agentic AI",
    //   cover: "https://images.unsplash.com/photo-1534759846116-57968a6b6b77?q=80&w=1200&auto=format&fit=crop",
    //   tags: ["SFT", "DPO", "RLHF", "LLaMA 3.1", "Agentic AI"],
    //   text: [
    //     "Led SFT and DPO tasks at CharacterAI → ~40% increase in process efficiency.",
    //     "Used LLaMA 3.1 and RLHF methodologies at MetaAI to optimize productivity.",
    //     "Applied LLaMA & RLHF at Microsoft → ~20% improvement in task completion time.",
    //     "Collaborating with ServiceNow on SFT, complex instruction following, reasoning, AgenticAI, and data-viz tasks."
    //   ].join(" ")
    //   // (Buttons removed as requested)
    // },
    {
      title: "Language Translator — QML & PyQt",
      cover: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
      tags: ["QML", "PyQt", "Qt Linguist", "TypeScript", "Python"],
      text: "Generated QM files with Qt Linguist for translations (French, Spanish, Japanese). Used TypeScript + Python. Built a full translator app in QML & PyQt."
    },
    {
      title: "Driver Monitoring System",
      cover: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1200&auto=format&fit=crop",
      tags: ["NVIDIA TAO", "Action Recognition", "Computer Vision"],
      text: "Action recognition for driver distraction on custom dataset; 2D RGB, CNN-16 (~120 epochs)."
    },
    {
      title: "PCAN GUI Tester",
      cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      tags: ["Python", "Tkinter", "PCANBasic.dll"],
      text: "Hex-over-CAN test harness with controller ↔ GUI communication and button-triggered test cases."
    },
    {
      title: "Cluster Dashboard UI",
      cover: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      tags: ["C++", "Qt/QML", "HMI"],
      text: "7\" cluster with gauges, speedometer (canvas), warnings & time features."
    }
  ],

  /* ===== Experience / Education / Certs remain (shown in Resume) ===== */
  experience: [
    {
      role: "Python Data Scientist",
      company: "Turing",
      location: "Los Angeles, United States",
      period: "Feb 2024 – Present",
      bullets: [
        "Lead SFT & DPO tasks; streamlined processes with measurable efficiency improvements.",
        "Worked across LLM stacks (Meta LLaMA 3.1, RLHF, complex instruction following).",
        "Collaborated with stakeholders on Agentic AI and data visualization initiatives."
      ]
    },
    {
      role: "Software Developer",
      company: "Veethree (Indication Instrument Limited)",
      location: "Faridabad, India",
      period: "Aug 2022 – Feb 2024",
      bullets: [
        "Python GUI (Tkinter) with PCANBasic.dll for controller ↔ GUI comms; hex over CAN via test-case triggers.",
        "Language Translator using QML & PyQt, leveraging Qt Linguist and TypeScript/Python.",
        "Dashboard app for 7\" cluster using C++ Qt/QML: gauges, speedometer (canvas), warnings & time features.",
        "Driver Monitoring System with NVIDIA TAO; action recognition on custom data (2D RGB, CNN-16, ~120 epochs)."
      ]
    },
    {
      role: "AIML Intern",
      company: "Prutor@IITK",
      location: "Kanpur, India",
      period: "Sep 2021 – Nov 2021",
      bullets: [
        "Email spam filtering and ML lifecycle on live project during internship/training."
      ]
    }
  ],
  education: [
    {
      title: "B.Tech in Computer Science & Engineering",
      org: "KIPM College of Engineering & Technology",
      city: "Gorakhpur, India",
      period: "2018 – 2022",
      extra: "Final grade: 7.4 CGPA"
    },
    {
      title: "Intermediate/+2, Science",
      org: "Kamla Rai Science College",
      city: "Gopalganj, India",
      period: "2015 – 2017"
    },
    {
      title: "Matriculation",
      org: "DAV High School, Gopalganj",
      city: "Gopalganj, India",
      period: "2014 – 2015"
    }
  ],
  certs: [
    { name: "AI & Machine Learning — Prutor@IITK", issuer: "IIT Kanpur (Prutor)", when: "Sep–Nov 2021" },
    { name: "Python Programming", issuer: "E&ICT Academy, IIT Kanpur", when: "Aug–Dec 2019" },
    { name: "AWS Cloud Practitioner Essentials", issuer: "AWS Training & Certification", when: "2021" },
    { name: "Full Stack Web Development", issuer: "Udemy", when: "Aug–Oct 2021" },
    { name: "Python for Data Science", issuer: "GREYATOM / AICTE", when: "May–Jun 2020" },
    { name: "C++ / C Summer Training", issuer: "NEW ERA – Gorakhpur", when: "May–Jun 2019" }
  ],

  /* ===== Writing (Blog) ===== */
//   posts: [
//     {
//       title: "Practical RLHF Notes",
//       date: "2025-02-10",
//       minutes: 6,
//       link: "#",
//       excerpt: "Collecting preference data and stabilizing PPO with sensible KL control."
//     },
//     {
//       title: "PyQt vs Tkinter for Production GUIs",
//       date: "2024-11-22",
//       minutes: 5,
//       link: "#",
//       excerpt: "When you need docking, translators, and designer tooling, PyQt shines."
//     },
//     {
//       title: "CAN Bus Testing with PCAN",
//       date: "2024-08-03",
//       minutes: 4,
//       link: "#",
//       excerpt: "A lightweight test rig for controller comms with reproducible hex payloads."
//     }
//   ]
};

/* ===== DOM helpers ===== */
const el = (tag, opts = {}) => Object.assign(document.createElement(tag), opts);

/* ===== Render functions ===== */
function renderSkills(){
  const tech = document.getElementById("skillsListTech");
  const tools = document.getElementById("skillsListTools");
  tech.innerHTML = ""; tools.innerHTML = "";
  DATA.skillsTech.forEach(t => tech.appendChild(el("li", { textContent:t })));
  DATA.skillsTools.forEach(t => tools.appendChild(el("li", { textContent:t })));
}

function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  DATA.projects.forEach(p => {
    const card = el("article", { className:"project" });
    const cover = el("div", { className:"project-cover" });
    const img = el("img", { src: p.cover, alt: `${p.title} cover` });
    cover.appendChild(img);

    const body = el("div", { className:"project-body" });
    const title = el("h3", { className:"project-title", textContent: p.title });
    const text = el("p", { textContent: p.text });

    const tags = el("div", { className:"project-tags" });
    p.tags.forEach(t => tags.appendChild(el("span", { className:"tag", textContent: t })));

    body.append(title, tags, text);
    card.append(cover, body); // (no actions)
    grid.appendChild(card);
  });
}

function renderExperience(){
  const root = document.getElementById("experience");
  root.innerHTML = "";
  DATA.experience.forEach(exp => {
    const card = el("article", { className:"item" });
    const h = el("h4", { textContent: `${exp.role} — ${exp.company}` });
    const meta = el("div", { className:"meta", textContent: `${exp.location} • ${exp.period}` });
    const ul = el("ul");
    exp.bullets.forEach(b => ul.appendChild(el("li", { textContent:b })));
    card.append(h, meta, ul);
    root.appendChild(card);
  });
}

function renderEducation(){
  const ul = document.getElementById("education");
  ul.innerHTML = "";
  DATA.education.forEach(ed => {
    const li = el("li");
    const title = el("strong", { textContent: ed.title });
    const extra = ed.extra ? el("div",{textContent:ed.extra}) : null;
    const meta = el("div", { className:"meta", textContent: `${ed.org} — ${ed.city} • ${ed.period}` });
    li.append(title);
    if (extra) li.append(extra);
    li.append(meta);
    ul.appendChild(li);
  });
}

function renderCerts(){
  const grid = document.getElementById("certGrid");
  grid.innerHTML = "";
  DATA.certs.forEach(c => {
    const card = el("article", { className:"cert" });
    card.append(
      el("h4", { textContent: c.name }),
      el("div", { className:"issuer", textContent: c.issuer }),
      el("div", { className:"meta", textContent: c.when })
    );
    grid.appendChild(card);
  });
}

// function renderPosts(){
//   const grid = document.getElementById("postsGrid");
//   grid.innerHTML = "";
//   DATA.posts.forEach(post => {
//     const card = el("article", { className:"post" });
//     const h = el("h3");
//     const a = el("a", { href: post.link, target: "_blank", rel: "noopener", textContent: post.title });
//     h.appendChild(a);
//     const meta = el("div", { className:"meta", textContent: new Date(post.date).toLocaleDateString() + ` • ${post.minutes} min read` });
//     const p = el("p", { textContent: post.excerpt });
//     card.append(h, meta, p);
//     grid.appendChild(card);
//   });
// }

/* ===== Theme toggle ===== */
function initTheme(){
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if(saved) root.setAttribute("data-theme", saved);
  const btn = document.getElementById("themeToggle");
  const setIcon = () => btn.textContent = root.getAttribute("data-theme")==="dark" ? "🌙" : "☀️";
  setIcon();
  btn.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIcon();
  });
}

/* ===== Smooth scroll & scrollspy ===== */
function initNav(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",(e)=>{
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:"smooth", block:"start"});
        history.replaceState(null,"",id);
      }
    });
  });

  // Active link highlight
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...document.querySelectorAll(".nav-link")];
  const byId = id => links.find(l=>l.getAttribute("href")==="#"+id);

  const spy = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const link = byId(entry.target.id);
      if(!link) return;
      if(entry.isIntersecting) link.classList.add("active");
      else link.classList.remove("active");
    });
  },{ rootMargin: "-40% 0px -50% 0px", threshold: 0.01 });

  sections.forEach(s=>spy.observe(s));
}

/* ===== Reveal animations (reduced motion aware) ===== */
function initReveals(){
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".observe").forEach(n=>n.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },{ threshold: .15 });
  document.querySelectorAll(".observe").forEach(n=>io.observe(n));
}

/* ===== Contact form (mailto auto-open) ===== */
function initContact(){
  const form = document.getElementById("contactForm");
  const msg  = document.getElementById("formMsg");
  const btn  = form.querySelector('button[type="submit"]');
  let sending = false;

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    if (sending) return;

    const name = document.getElementById("name").value.trim();
    const from = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if(!name || !from || !text){
      msg.style.color = "tomato";
      msg.textContent = "❌ Please fill all fields.";
      return;
    }

    sending = true;
    btn.disabled = true; btn.textContent = "Sending…";
    msg.style.color = "var(--muted)";
    msg.textContent = "📨 Sending…";

    try {
      // 1) Owner notification (to YOU)
      await emailjs.send(
        "service_c27pocc",     // ✅ your Service ID
        "template_b3hud8m",    // ✅ your Template ID
        {
          from_name: name,
          reply_to: from,
          message: text
        }
      );

      msg.style.color = "var(--text)";
      msg.textContent = "✅ Sent! I’ll reply soon.";
      form.reset();
    } catch (err){
      console.error(err);
      msg.style.color = "tomato";
      msg.textContent = "❌ Send failed. Check EmailJS IDs / Domain allow.";
    } finally {
      sending = false;
      btn.disabled = false; btn.textContent = "Send";
    }
  });
}


/* ===== Parallax motion (mouse + scroll) ===== */
function initParallax(){
  const layers = document.querySelectorAll(".layer");
  // mouse parallax
  window.addEventListener("mousemove", (e)=>{
    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    layers.forEach((el, i)=>{
      const depth = (i+1) * 8;
      el.style.transform = `translate(${x*depth}px, ${y*depth}px)`;
    });
  });
  // subtle scroll parallax
  window.addEventListener("scroll", ()=>{
    const y = window.scrollY * 0.05;
    layers.forEach((el, i)=>{
      el.style.transform += ` translateY(${y}px)`;
    });
  }, { passive: true });
}

/* ===== Top button ===== */
function initToTop(){
  const btn = document.getElementById("toTop");
  btn.addEventListener("click", ()=> window.scrollTo({ top:0, behavior:"smooth" }) );
}
function initMenu(){
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("primaryNav");
  if(!btn || !nav) return;

  btn.addEventListener("click", ()=>{
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu after clicking a link
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", ()=>{
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderCerts();
  // renderPosts();

  initTheme();
  initMenu();   // ← add this
  initNav();
  initReveals();
  initContact();
  initParallax();
  initToTop();

  document.getElementById("year").textContent = new Date().getFullYear();
});

