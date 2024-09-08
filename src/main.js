bsres();
const styleElement = document.createElement("style");
styleElement.textContent = `
    .badge {
        padding: 3px 5px;
        font-weight: normal;
        font-size: 11px;
    }
    .badge-left {
        border-radius: 3px 0 0 3px;
        background-color: #ededed;
    }
    .badge-right {
        border-radius: 0 3px 3px 0;
    }
`;

document.head.appendChild(styleElement);

const themeStylesheet = document.getElementById("theme-stylesheet");
const themeToggler = document.getElementById("theme-toggler");

let themePreference;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  themePreference = "dark";
}
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  themePreference = "light";
}

setTheme(themePreference);

if (typeof Storage !== "undefined") {
  if (localStorage.getItem("themePreference")) {
    themePreference = localStorage.getItem("themePreference");
    setTheme(themePreference);
  }
  themeToggler.onclick = function () {
    if (themePreference == "dark") {
      themePreference = "light";
    } else {
      themePreference = "dark";
    }
    localStorage.setItem("themePreference", themePreference);
    setTheme(themePreference);
  };
}

function setTheme(themePreference) {
  if (themePreference === "dark") {
    document.getElementById("theme-stylesheet").dataset.bsTheme = "dark";
    document.getElementById("theme-toggler").innerHTML =
      '<i class="bi bi-sun-fill"></i>';
  } else {
    document.getElementById("theme-stylesheet").dataset.bsTheme = "light";
    document.getElementById("theme-toggler").innerHTML =
      '<i class="bi bi-moon-fill"></i>';
  }
}

function toggleTheme() {
  const newThemePreference = themePreference === "dark" ? "light" : "dark";
  setTheme(newThemePreference);
  themePreference = newThemePreference;
  localStorage.setItem("themePreference", themePreference);
}

function bsres() {
    if (!document.querySelector('link[href*="bootstrap.min.css"]')) {
      const bscss = document.createElement("link");
      bscss.rel = "stylesheet";
      bscss.href =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
      document.head.appendChild(bscss);
    }

    if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
      const bsjs = document.createElement("script");
      bsjs.src =
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
      document.body.appendChild(bsjs);
    }

    if (!document.querySelector('link[href*="bootstrap-icons"]')) {
      const bsicons = document.createElement("link");
      bsicons.rel = "stylesheet";
      bsicons.href =
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css";
      document.head.appendChild(bsicons);
    }
  }

  
