const tools = [
  {
    name: "Chat Assistant",
    icon: "🤖",
    desc: "Chatte mit einer KI im Browser.",
    type: "chat"
  },
  {
    name: "Image Generator",
    icon: "🎨",
    desc: "Erstelle Bildideen aus Text.",
    type: "image"
  },
  {
    name: "Code Helper",
    icon: "💻",
    desc: "Hilft dir beim Programmieren.",
    type: "code"
  },
  {
    name: "Text Writer",
    icon: "✍️",
    desc: "Schreibt Texte für dich um.",
    type: "text"
  },
  {
    name: "SEO Optimizer",
    icon: "📈",
    desc: "Verbessert Texte für Webseiten.",
    type: "seo"
  },
  {
    name: "Idea Generator",
    icon: "💡",
    desc: "Gibt dir neue Ideen.",
    type: "idea"
  },
  {
    name: "Logo Maker",
    icon: "🖌️",
    desc: "Macht einfache Logo-Konzepte.",
    type: "logo"
  },
  {
    name: "Email Writer",
    icon: "📧",
    desc: "Schreibt bessere E-Mails.",
    type: "email"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const toolContainer = document.getElementById("toolContainer");
  const miniList = document.getElementById("miniList");
  const searchInput = document.getElementById("searchInput");
  const themeButton = document.getElementById("themeButton");
  const loginButton = document.getElementById("loginButton");
  const exploreTools = document.getElementById("exploreTools");
  const learnMore = document.getElementById("learnMore");

  const themeKey = "ai-toolbox-theme";

  function applyTheme(theme) {
    document.body.classList.toggle("lightTheme", theme === "light");
    localStorage.setItem(themeKey, theme);
    if (themeButton) {
      themeButton.textContent = theme === "light" ? "☀️" : "🌙";
    }
  }

  const savedTheme = localStorage.getItem(themeKey) || "dark";
  applyTheme(savedTheme);

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const current = localStorage.getItem(themeKey) || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      alert("Login kommt später.");
    });
  }

  if (exploreTools) {
    exploreTools.addEventListener("click", () => {
      document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (learnMore) {
    learnMore.addEventListener("click", () => {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function renderMiniTools() {
    if (!miniList) return;

    const topTools = tools.slice(0, 4);
    miniList.innerHTML = "";

    topTools.forEach(tool => {
      const item = document.createElement("div");
      item.className = "tool";
      item.innerHTML = `
        <div class="toolTop">
          <div class="toolIcon">${tool.icon}</div>
          <div>
            <div class="toolName">${tool.name}</div>
            <div class="toolDesc">${tool.desc}</div>
          </div>
        </div>
      `;
      item.addEventListener("click", () => openTool(tool));
      miniList.appendChild(item);
    });
  }

  function openTool(tool) {
    const url = `tool.html?name=${encodeURIComponent(tool.name)}&desc=${encodeURIComponent(tool.desc)}&type=${encodeURIComponent(tool.type)}`;
    window.location.href = url;
  }

  function renderTools(filter = "") {
    if (!toolContainer) return;

    toolContainer.innerHTML = "";
    const list = tools.filter(tool => {
      const text = `${tool.name} ${tool.desc}`.toLowerCase();
      return text.includes(filter.toLowerCase());
    });

    list.forEach(tool => {
      const card = document.createElement("div");
      card.className = "toolCard";
      card.innerHTML = `
        <div class="cardIcon">${tool.icon}</div>
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
        <button type="button">Öffnen</button>
      `;

      card.querySelector("button").addEventListener("click", () => openTool(tool));
      card.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") openTool(tool);
      });

      toolContainer.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", e => renderTools(e.target.value));
  }

  renderMiniTools();
  renderTools();
});
