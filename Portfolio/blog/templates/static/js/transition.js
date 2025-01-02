document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="http"], a[href^="/"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.href;

      document.getElementById("page-container").classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });
});
