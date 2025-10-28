(function ($) {
  "use strict";


  // Back to top button//// Back to top button//// Back to top button//// Back to top button//
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });


  // Date and time picker
  $('.date').datetimepicker({
    format: 'L'
  });
  $('.time').datetimepicker({
    format: 'LT'
  });

  // Back to top button//// Back to top button//// Back to top button//// Back to top button//



  // Testimonials carousel //// Testimonials carousel //// Testimonials carousel //// Testimonials carousel //

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

})(jQuery);

// Testimonials carousel //// Testimonials carousel //// Testimonials carousel //// Testimonials carousel //


// booking room whataspp//// booking room whataspp//// booking room whataspp//
document.getElementById('submitBtn').addEventListener('click', function () {
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
// booking room whataspp//// booking room whataspp//// booking room whataspp//







// service image section//// service image section//// service image section//// service image section//

document.addEventListener("DOMContentLoaded", function () {
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

function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  const buttons = document.querySelectorAll('.menu-tabs .btn');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
      item.style.opacity = '1';
    } else {
      item.style.display = 'none';
      item.style.opacity = '0';
    }
  });
}
// service image section//// service image section//// service image section//// service image section//


// Simple filter menu functionality//// Simple filter menu functionality//// Simple filter menu functionality//


function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  if (category === 'all') {
    items.forEach(i => i.style.display = 'block');
  } else {
    items.forEach(i => i.style.display = i.classList.contains(category) ? 'block' : 'none');
  }

  // update active button
  document.querySelectorAll('.menu-tabs .btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Simple filter menu functionality//// Simple filter menu functionality//// Simple filter menu functionality//


// index.HTML AOS ANIMATION 
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800, // animation speed in ms
    once: true,    // run animation only once
    offset: 100,   // trigger offset
  });
});


