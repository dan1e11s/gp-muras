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

const roomImages = [
  {
    id: '1',
    url: 'assets/president-appartament1.jpeg',
    alt: 'room',
  },
  {
    id: '1',
    url: 'assets/president-appartament1.jpeg',
    alt: 'room',
  },
  {
    id: '1',
    url: 'assets/president-appartament1.jpeg',
    alt: 'room',
  },
  {
    id: '1',
    url: 'assets/president-appartament1.jpeg',
    alt: 'room',
  },
  {
    id: '2',
    url: 'assets/bashnya1.jpeg',
    alt: 'room',
  },
  {
    id: '2',
    url: 'assets/bashnya1.jpeg',
    alt: 'room',
  },
  {
    id: '3',
    url: 'assets/kolizey1.jpeg',
    alt: 'room',
  },
  {
    id: '4',
    url: 'assets/korpus1.jpeg',
    alt: 'room',
  },
  {
    id: '5',
    url: 'assets/kub1.jpeg',
    alt: 'room',
  },
  {
    id: '6',
    url: 'assets/skvorechnik.jpeg',
    alt: 'room',
  },
  {
    id: '7',
    url: 'assets/finskiydom.jpg',
    alt: 'room',
  },
  {
    id: '8',
    url: 'assets/korpus.jpg',
    alt: 'room',
  },
  {
    id: '9',
    url: 'assets/kubik.jpg',
    alt: 'room',
  },
  {
    id: '10',
    url: 'assets/kub.jpg',
    alt: 'room',
  },
  {
    id: '11',
    url: 'assets/townhouse.jpg',
    alt: 'room',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');
  const swiperWrapper = document.getElementById('swiper-wrapper');
  const rooms = document.querySelectorAll('.room__card');

  function openModal(filteredImages) {
    swiperWrapper.innerHTML = '';

    filteredImages.forEach((image) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      const img = document.createElement('img');
      img.src = image.url;
      slide.appendChild(img);
      swiperWrapper.appendChild(slide);
    });

    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    modal.style.display = 'flex';
  }

  rooms.forEach((room) => {
    const button = room.querySelector('.view-all');
    const roomId = room.getAttribute('id');

    button.addEventListener('click', (event) => {
      event.preventDefault();

      const filteredImages = roomImages.filter((image) => image.id === roomId);

      openModal(filteredImages);
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
      modalContent.style.display = 'none';
    }
  });
});
