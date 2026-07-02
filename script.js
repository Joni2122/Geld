const tools = [
  {
    name: "Chat Assistant",
    icon: "🤖",
    desc: "KI Chat zum Fragen stellen"
  },
  {
    name: "Image Generator",
    icon: "🎨",
    desc: "Bilder aus Text erstellen"
  },
  {
    name: "Code Helper",
    icon: "💻",
    desc: "Hilft dir beim Programmieren"
  },
  {
    name: "Text Writer",
    icon: "✍️",
    desc: "Schreibt Texte automatisch"
  },
  {
    name: "SEO Optimizer",
    icon: "📈",
    desc: "Verbessert Webseiten Texte"
  },
  {
    name: "Idea Generator",
    icon: "💡",
    desc: "Gibt dir neue Ideen"
  },
  {
    name: "Logo Maker",
    icon: "🖌️",
    desc: "Erstellt einfache Logos"
  },
  {
    name: "Email Writer",
    icon: "📧",
    desc: "Schreibt professionelle E-Mails"
  }
];

const container = document.querySelector(".heroRight .glass");

// Animation: Tools nach und nach einfügen
let i = 0;

function addTool() {
  if (i >= tools.length) return;

  const tool = tools[i];

  const div = document.createElement("div");
  div.classList.add("tool");

  div.innerHTML = `
    <div style="display:flex; gap:12px; align-items:center;">
      <span style="font-size:24px;">${tool.icon}</span>
      <div>
        <div style="font-weight:600;">${tool.name}</div>
        <div style="font-size:12px; color:#9aa4c7;">${tool.desc}</div>
      </div>
    </div>
  `;

  container.appendChild(div);

  i++;
  setTimeout(addTool, 250);
}

addTool();
