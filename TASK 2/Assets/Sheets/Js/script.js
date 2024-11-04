// ==================== Toggle con Navbar =====================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ==================== Scroll Section Active Link =====================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ==================== Sticky navbar =====================
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ==================== Remove Toggle Icon and Navbar When Click Navbar Link(Scroll) =====================
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // ==================== Show Scroll Top Button =====================
  let scrollTopButton = document.getElementById("scroll-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopButton.classList.add("active");
  } else {
    scrollTopButton.classList.remove("active");
  }
};

// ==================== Scroll reveal =====================
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 200,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ==================== Typed Js =====================
const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Data Engineer",
    "Web Design",
    "Web Developer",
    "Android Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ========================== Email Js Function ==================
function sendEmail(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Message:", message);

  if (!name || !email || !phone || !message) {
    alert("All fields are required. Please fill in all the details.");
    return;
  }

  let parms = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  emailjs.send("service_lmuy8cg", "template_183ecwm", parms).then(
    (result) => {
      console.log("SUCCESS!", result.status, result.text);
      alert("Message Sent!!");
      document.getElementById("form-message").style.display = "block";
      document.getElementById("contact-form").reset();
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
