
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  });
});


document.querySelector("#clockButton").addEventListener("click", function (event) {
  event.preventDefault();
  var currentdate = new Date();
  var timenow = + currentdate.getHours() + ":"
    + currentdate.getMinutes();
  document.getElementById("datebtn").innerHTML = timenow;

}, false);

/* Fade and Opacity Observers */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      entry.target.classList.add(
        entry.target.dataset.direction === 'left' ? 'fadeInLeft' : 'fadeInRight'
      );
    });
  },
  {
    threshold: 0.1,
  }
);

const observerFade = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fadeCenter');
    });
  },
  {
    threshold: 0.1,
  }
);


(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

/* Form Control */

/* Form Control */

const formInputs = [
  ...document.querySelectorAll('.form-control'),
  document.querySelector('.form-control-textarea'),
];
const form = document.getElementById('contactForm');
const submitButton = document.querySelector('.submitButton');
const yaz = document.querySelector('.yaz');
let values = new Array(4).fill('');
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  let send;
  formInputs.forEach((input, index) => {
    if (input.value !== '') {
      values[index] = input.value;
    } else {
      yaz.classList.remove('hidden');
      send = false;
    }
  });

  if (values.every(val => val !== '')) send = true;
  if (!send) return;
  submitButton.disabled = true;
  yaz.classList.add('hidden');

  const url = $('#contactForm').attr('action');
  const type = $('#contactForm').attr('method');
  const data = $('#contactForm').serialize();

  $.ajax({
    url,
    type,
    data,
    success: function (msg) {
      if (msg.slice(-2) === 'no') {
        document.querySelector('.form-control-textarea').value = '';
        formInputs.forEach(el => {
          el.value = '';
        });
        submitButton.textContent = 'Gönderilmedi';
        submitButton.disabled = true;
      } else {
        document.querySelector('.form-control-textarea').value = '';
        formInputs.forEach(el => {
          el.value = '';
        });
        submitButton.textContent = 'Gönderildi';
        submitButton.disabled = true;
      }
    },
  });
});



