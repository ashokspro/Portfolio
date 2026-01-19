// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

$(document).ready(function () {

  const toast = $('#toast');
  const submitBtn = $('.contact__btn');

  function showToast(message, type) {
    toast
      .removeClass('success error loading show')
      .addClass(type)
      .text(message)
      .addClass('show');

    // Auto-hide after 4s (except loading)
    if (type !== 'loading') {
      setTimeout(() => {
        toast.removeClass('show');
      }, 4000);
    }
  }

  $('#contact-form').on('submit', function (event) {
    event.preventDefault();

    submitBtn.prop('disabled', true);
    showToast('Sending message...', 'loading');

    var formData = new FormData(this);
    formData.append('service_id', 'service_yggrsv8');
    formData.append('template_id', 'template_xu3pa1n');
    formData.append('user_id', '8HAPNVDFFORoUPWnW');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
    .done(function () {
      showToast('Message sent successfully!', 'success');
      $('#contact-form')[0].reset();
    })
    .fail(function () {
      showToast('Failed to send message. Please try again.', 'error');
    })
    .always(function () {
      submitBtn.prop('disabled', false);
    });
  });

});
