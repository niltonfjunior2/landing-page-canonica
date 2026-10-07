/**
 * Script Principal - Vanilla JavaScript
 * Responsável pelo comportamento e interatividades da Landing Page.
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing page carregada com sucesso.");

  // Exemplo de manipulação para rolagem suave com foco acessível
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
          targetElement.setAttribute("tabindex", "-1");
          targetElement.focus();
        }
      }
    });
  });
});
