fetch("Navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    const currentUrl = window.location.href;
    const links = document.querySelectorAll(".navbar-nav a");
    links.forEach((link) => {
      if (link.href === currentUrl) {
        link.classList.add("active");
      }
    });
  });
