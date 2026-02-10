/* ================= PAGE LOADER ================= */
window.addEventListener('load', () => {
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 500);
  }
});

/* ================= NAVBAR STICKY ON SCROLL ================= */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ================= SCROLL REVEAL ANIMATION ================= */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

// Observe elements for scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));
  
  // Add scroll-reveal class to elements that should animate
  const animateElements = document.querySelectorAll('.split, .room-card, .facility, .testimonial');
  animateElements.forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });
});

/* ================= PARALLAX EFFECT ON HERO IMAGE ================= */
window.addEventListener('scroll', () => {
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    heroImg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

/* ================= FORM SUBMIT HANDLER ================= */
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    
    // Add loading state to button
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! We will get back to you soon.");
      form.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 1000);
  });
});

/* ================= MOBILE NAVIGATION TOGGLE ================= */
document.querySelectorAll(".menu-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const nav = toggle.parentElement.querySelector("nav");
    nav.classList.toggle("open");
    toggle.classList.toggle("active");
  });
});

/* ================= AUTO CLOSE MOBILE MENU ON LINK CLICK ================= */
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = link.closest("nav");
    const toggle = document.querySelector(".menu-toggle");
    nav.classList.remove("open");
    if (toggle) {
      toggle.classList.remove("active");
    }
  });
});

/* ================= SMOOTH SCROLL FOR SCROLL INDICATOR ================= */
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    window.scrollTo({
      top: window.innerHeight - 88, // Account for fixed navbar
      behavior: 'smooth'
    });
  });
}

/* ================= TESTIMONIAL NAVIGATION ================= */
// Simple testimonial data (can be expanded)
const testimonials = [
  {
    quote: "Calm, Serene, Retro – What a way to relax and enjoy",
    author: "Mr. and Mrs. Baxter, UK"
  },
  {
    quote: "An unforgettable experience! The luxury and comfort exceeded all expectations",
    author: "Sarah Johnson, USA"
  },
  {
    quote: "The perfect getaway. Impeccable service and stunning views throughout",
    author: "David Chen, Singapore"
  }
];

let currentTestimonial = 0;

function updateTestimonial() {
  const testimonialText = document.querySelector('.testimonial-text p');
  const testimonialAuthor = document.querySelector('.testimonial-text span');
  
  if (testimonialText && testimonialAuthor) {
    // Fade out
    testimonialText.style.opacity = '0';
    testimonialAuthor.style.opacity = '0';
    
    setTimeout(() => {
      testimonialText.textContent = `"${testimonials[currentTestimonial].quote}"`;
      testimonialAuthor.textContent = testimonials[currentTestimonial].author;
      
      // Fade in
      testimonialText.style.transition = 'opacity 0.5s ease';
      testimonialAuthor.style.transition = 'opacity 0.5s ease';
      testimonialText.style.opacity = '1';
      testimonialAuthor.style.opacity = '1';
    }, 300);
  }
}

document.querySelectorAll('.testimonial-arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    if (arrow.classList.contains('left')) {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    } else {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
    updateTestimonial();
  });
});

/* ================= BUTTON RIPPLE EFFECT ================= */
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

/* ================= LAZY LOADING IMAGES ================= */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/* ================= SMOOTH SCROLL FOR ALL ANCHOR LINKS ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 88; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

/* ================= HIDE SCROLL INDICATOR AFTER SCROLL ================= */
window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    if (window.scrollY > 200) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
    }
  }
});
