const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

document.addEventListener('DOMContentLoaded', function () {
  const checkInInput = flatpickr('#check-in', {
    dateFormat: 'Y-m-d',
    allowInput: true,
  });

  const checkOutInput = flatpickr('#check-out', {
    dateFormat: 'Y-m-d',
    allowInput: true,
  });

  document
    .getElementById('check-in-icon')
    .addEventListener('click', function () {
      checkInInput.open();
    });

  document
    .getElementById('check-out-icon')
    .addEventListener('click', function () {
      checkOutInput.open();
    });
});

document
  .getElementById('booking-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
      checkIn: document.getElementById('check-in').value,
      checkOut: document.getElementById('check-out').value,
      guest: document.getElementById('guest').value,
      phoneNumber: document.getElementById('phone-number').value,
    };

    fetch('http://localhost:3000/send-whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert(
            'Ваша заявка была принята в обработку. Скоро наши специалисты с вами свяжутся!'
          );
        } else {
          alert('Failed to send WhatsApp message.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending WhatsApp message.');
      });
  });

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

// header container
ScrollReveal().reveal('.header__container p', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.header__container h1', {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal('.about__image img', {
  ...scrollRevealOption,
  origin: 'left',
});

ScrollReveal().reveal('.about__content .section__subheader', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.about__content .section__header', {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal('.about__content .section__description', {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal('.about__btn', {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal('.room__card', {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal('.service__list li', {
  ...scrollRevealOption,
  interval: 500,
  origin: 'right',
});
