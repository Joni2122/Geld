const tools = [
  { name: "Chat Assistant", icon: "🤖", desc: "KI Chat zum Fragen stellen" },
  { name: "Image Generator", icon: "🎨", desc: "Bilder aus Text erstellen" },
  { name: "Code Helper", icon: "💻", desc: "Hilft beim Programmieren" },
  { name: "Text Writer", icon: "✍️", desc: "Schreibt Texte automatisch" },
  { name: "SEO Optimizer", icon: "📈", desc: "Verbessert Webseiten Texte" },
  { name: "Idea Generator", icon: "💡", desc: "Gibt dir neue Ideen" },
  { name: "Logo Maker", icon: "🖌️", desc: "Erstellt einfache Logos" },
  { name: "Email Writer", icon: "📧", desc: "Schreibt E-Mails" }
];

const container = document.querySelector(".heroRight .glass");
const searchInput = document.createElement("input");

searchInput.placeholder = "Tools suchen...";
searchInput.style = `
  width:100%;
  padding:12px;
  margin-bottom:15px;
  border-radius:12px;
  border:none;
  outline:none;
  background:rgba(255,255,255,0.08);
  color:white;
`;

container.prepend(searchInput);

function renderTools(filter = "") {
  container.querySelectorAll(".tool").forEach(t => t.remove());

  tools
    .filter(t => t.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(tool => {
      const div = document.createElement("div");
      div.classList.add("tool");

      div.innerHTML = `
        <div style="display:flex; gap:12px; align-items:center; cursor:pointer;">
          <span style="font-size:24px;">${tool.icon}</span>
          <div>
            <div style="font-weight:600;">${tool.name}</div>
            <div style="font-size:12px; color:#9aa4c7;">${tool.desc}</div>
          </div>
        </div>
      `;

      div.addEventListener("click", () => {
        alert("Du hast geöffnet: " + tool.name);
      });

      container.appendChild(div);
    });
}

searchInput.addEventListener("input", e => {
  renderTools(e.target.value);
});

renderTools();
