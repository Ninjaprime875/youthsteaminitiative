class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-light py-5 footer-component">
        <div class="container px-4 px-lg-5">
          <div class="small text-center text-muted">
            Copyright &copy; 2026 - Youth STEAM Initiative
          </div>
          <br />
          <div class="small text-center text-muted footer-social">
            <a href="https://www.facebook.com/people/Youth-STEAM-Team/61569154958515/" target="_blank" aria-label="Facebook">
              <i class="bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/lystemteam/" target="_blank" aria-label="Instagram">
              <i class="bi-instagram"></i>
            </a>
            <a href="mailto:lyst.connect@gmail.com" target="_blank" aria-label="Email">
              <i class="bi-envelope"></i>
            </a>
          </div>
          <br />
          <div class="small text-center text-muted footer-button">
            <a href="visitorcount.html" class="btn btn-footer">
              <i class="bi bi-people-fill me-1"></i> View Visitor Count
            </a>
          </div>
        </div>
      </footer>
      <!-- Cloudflare Web Analytics -->
      <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "256ed5ab91584392aeb0701ebbf24e30"}'></script>
      <!-- End Cloudflare Web Analytics -->
      <style>
        .footer-component {
          background-color: #f8f9fa;
        }

        .footer-social a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          margin: 0 8px;
          color: rgb(80, 129, 229);
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .footer-social a:hover {
          transform: translateY(-2px);
        }

        .footer-social i {
          font-size: 1.5em;
        }

        .footer-button .btn-footer {
          color: white;
          background-color: rgb(80, 129, 229);
          border-color: rgb(80, 129, 229);
        }

        .footer-button .btn-footer:hover,
        .footer-button .btn-footer:focus {
          background-color: rgb(58, 98, 200);
          border-color: rgb(58, 98, 200);
        }
      </style>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
