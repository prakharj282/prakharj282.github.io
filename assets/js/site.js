(function () {
  const toggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark") {
    root.dataset.theme = "dark";
  }

  if (!toggle) return;

  const updateLabel = () => {
    const isDark = root.dataset.theme === "dark";
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  };

  updateLabel();

  toggle.addEventListener("click", () => {
    const isDark = root.dataset.theme === "dark";
    if (isDark) {
      delete root.dataset.theme;
      localStorage.setItem("theme", "light");
    } else {
      root.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    updateLabel();
  });
})();