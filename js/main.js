(function ($) {
    "use strict";
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

const aboutImg = document.querySelector('.about-img');

function handleScroll() {
  const rect = aboutImg.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    // Image is in view → zoom in
    aboutImg.classList.add('scroll-in');
  } else {
    // Image is out of view → return to normal
    aboutImg.classList.remove('scroll-in');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // trigger on page load






document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const guests = document.getElementById('guests').value.trim();
    const fromDate = document.getElementById('fromDate').value.trim();
    const toDate = document.getElementById('toDate').value.trim();

    if (!name || !phone || !guests || !fromDate || !toDate) {
        alert("Please fill all fields!");
        return;
    }

    const ownerNumber = "9882606242"; // Owner's WhatsApp number with country code
    const message = `Hello! I want to book a bed.\nName: ${name}\nPhone: ${phone}\nGuests: ${guests}\nFrom: ${fromDate}\nTo: ${toDate}`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // Opens WhatsApp with pre-filled message
});

document.querySelectorAll('.menu-row-wrapper').forEach(wrapper => {
  const row = wrapper.querySelector('.menu-row');
  const leftBtn = wrapper.querySelector('.scroll-btn.left');
  const rightBtn = wrapper.querySelector('.scroll-btn.right');

  leftBtn.addEventListener('click', () => row.scrollBy({left: -250, behavior: 'smooth'}));
  rightBtn.addEventListener('click', () => row.scrollBy({left: 250, behavior: 'smooth'}));
});

// WhatsApp order
const whatsappNumber = "9882606242";
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.dataset.item;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I want to order ${item}.`)}`;
    window.open(url, '_blank');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".animate-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // optional: stop observing after animation
      }
    });
  }, { threshold: 0.2 });

  images.forEach(img => observer.observe(img));
});






