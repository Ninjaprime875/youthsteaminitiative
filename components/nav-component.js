const homepage = "Youth STEAM Initiative";

class Nav extends HTMLElement {
  connectedCallback() {
    const pages = [
      { title: "About Us", href: "index.html#Mission" },
      { title: "Projects", href: "projects.html" },
      { title: "Activity", href: "activity.html" },
      { title: "Learning Center", href: "learning-center.html" },
      { title: "Donate", href: "donate.html" }
    ];

    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img src="./images/Team logo.png" alt="Logo" style="height: 48px; margin-right: 8px;">
            ${homepage}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
              ${pages.map(page => `
                <li class="nav-item">
                  <a class="nav-link" href="${page.href}">${page.title}</a>
                </li>`).join("")}
            </ul>
          </div>
        </div>
      </nav>
    `;

    //  prevents reload for links that direct to current page
    this.querySelectorAll(".on-page").forEach(link => {
      link.addEventListener("click", e => e.preventDefault());
    });
  }
}

customElements.define("nav-component", Nav);