const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const emailBtn = document.getElementById("emailBtn");
const EMAIL = "loriacabillo06@gmail.com";
emailBtn.href =
  "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL) +
  "&su=" + encodeURIComponent("Hello from your portfolio");

const projects = {
  1: {
    title: "Happy Birthday Website",
    image: "images/project1.png",
    description: "A simple, animated birthday greeting website.",
    role: "Designed the layout and implemented the animations.",
    tools: "HTML, CSS, and JavaScript",
    links: [{ label: "Live demo", url: "https://loriacabillo.github.io/happy-birthday/" }, { label: "Source code", url: "https://github.com/loriacabillo?tab=repositories" }]
  },
  2: {
    title: "Patentiro Game",
    image: "images/project2.png",
    description: "A simple puzzle game created for a class assignment.",
    role: "Designed the game mechanics and implemented the user interface.",
    tools: "HTML, CSS, and JavaScript",
    links: [{ label: "Live demo", url: "https://loriacabillo.github.io/Patintero/" }, { label: "Source code", url: "https://github.com/loriacabillo?tab=repositories" }]
  },
  3: {
    title: "Group Demo",
    image: "images/project3.png",
    description: "A collaborative demonstration project created for a class assignment.",
    role: "Developed the front-end interface and integrated the back-end API.",
    tools: "HTML, CSS, and JavaScript",
    links: [{ label: "Live demo", url: "https://loriacabillo.github.io/EVDDemo/" }, { label: "Source code", url: "https://github.com/loriacabillo?tab=repositories" }]
  }
};

const modal = document.getElementById("projectModal");

document.querySelectorAll(".project-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];
    if (!p) return;
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDesc").textContent = p.description;
    document.getElementById("modalRole").textContent = p.role;
    document.getElementById("modalTools").textContent = p.tools;
    const img = document.getElementById("modalImg");
    img.src = p.image;
    img.alt = "Screenshot of " + p.title;
    const links = document.getElementById("modalLinks");
    links.innerHTML = "";
    p.links.forEach((l) => {
      const a = document.createElement("a");
      a.href = l.url; a.textContent = l.label; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    });
    modal.showModal();
  });
});

document.getElementById("modalClose").addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

const emailBox = document.getElementById("emailBox");
const copyBtn = document.getElementById("copyBtn");
emailBtn.addEventListener("click", () => { emailBox.hidden = false; });
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyBtn.textContent = "Copied!";
  } catch (err) {
    copyBtn.textContent = "Press Ctrl+C to copy";
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("emailText"));
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  setTimeout(() => { copyBtn.textContent = "Copy"; }, 2000);
});
