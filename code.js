const tools = [
  { name: "Chat Assistant", icon: "🤖", desc: "KI Chat zum Fragen stellen" },
  { name: "Image Generator", icon: "🎨", desc: "Bilder aus Text erstellen" },
  { name: "Code Helper", icon: "💻", desc: "Hilft dir beim Programmieren" },
  { name: "Text Writer", icon: "✍️", desc: "Schreibt Texte automatisch" },
  { name: "SEO Optimizer", icon: "📈", desc: "Verbessert Webseiten Texte" },
  { name: "Idea Generator", icon: "💡", desc: "Gibt dir neue Ideen" },
  { name: "Logo Maker", icon: "🖌️", desc: "Erstellt einfache Logos" },
  { name: "Email Writer", icon: "📧", desc: "Schreibt professionelle Mails" }
];

const container = document.querySelector(".heroRight .glass");

tools.forEach(tool => {
  const div = document.createElement("div");
  div.classList.add("tool");

  div.innerHTML = `${tool.icon} ${tool.name}`;

  container.appendChild(div);
});
