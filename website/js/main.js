document.addEventListener('DOMContentLoaded', () => {

  // ===== AUTO ACTIVE NAV LINK =====
  let currentPage = window.location.pathname.split('/').pop();

  // Agar empty hai toh index.html samjho
  if (currentPage === '' || currentPage === 'website') {
    currentPage = 'index.html';
  }

  // Agar .html nahi hai toh add karo
  if (currentPage !== '' && !currentPage.includes('.html')) {
    currentPage = currentPage + '.html';
  }

  const navLinkItems = document.querySelectorAll('.nav-links a');
  navLinkItems.forEach(link => {
    link.classList.remove('active');
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  });

  // ===== PORTFOLIO FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        portfolioCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Min date set karo
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

});

// ===== CONTACT FORM =====
function submitForm() {
  let isValid = true;

  const firstName = document.getElementById('firstName');
  const firstNameError = document.getElementById('firstNameError');
  if (firstName && firstName.value.trim() === '') {
    firstNameError.textContent = 'First name is required';
    firstNameError.classList.add('show');
    isValid = false;
  } else if (firstNameError) {
    firstNameError.classList.remove('show');
  }

  const lastName = document.getElementById('lastName');
  const lastNameError = document.getElementById('lastNameError');
  if (lastName && lastName.value.trim() === '') {
    lastNameError.textContent = 'Last name is required';
    lastNameError.classList.add('show');
    isValid = false;
  } else if (lastNameError) {
    lastNameError.classList.remove('show');
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && email.value.trim() === '') {
    emailError.textContent = 'Email is required';
    emailError.classList.add('show');
    isValid = false;
  } else if (email && !emailRegex.test(email.value)) {
    emailError.textContent = 'Please enter a valid email';
    emailError.classList.add('show');
    isValid = false;
  } else if (emailError) {
    emailError.classList.remove('show');
  }

  const message = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  if (message && message.value.trim() === '') {
    messageError.textContent = 'Message is required';
    messageError.classList.add('show');
    isValid = false;
  } else if (messageError) {
    messageError.classList.remove('show');
  }

  if (isValid) {
    document.getElementById('successMsg').classList.add('show');
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('service').value = '';
  }
}

// ===== BOOKING FORM =====
let selectedTime = '';
let selectedMeeting = 'Video Call';

function selectMeeting(type) {
  document.querySelectorAll('.meeting-type').forEach(btn => {
    btn.classList.remove('active');
  });
  document.getElementById(type + 'Btn').classList.add('active');
  const types = {
    video: 'Video Call',
    phone: 'Phone Call',
    inperson: 'In Person'
  };
  selectedMeeting = types[type];
}

function selectTime(btn) {
  document.querySelectorAll('.time-slot').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedTime = btn.textContent.trim();
}

function nextToStep2() {
  const name = document.getElementById('bookName');
  const email = document.getElementById('bookEmail');
  const phone = document.getElementById('bookPhone');
  const service = document.getElementById('bookService');
  let valid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || name.value.trim() === '') {
    document.getElementById('bookNameError').textContent = 'Name is required';
    document.getElementById('bookNameError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookNameError').classList.remove('show');
  }

  if (!email || !emailRegex.test(email.value)) {
    document.getElementById('bookEmailError').textContent = 'Valid email is required';
    document.getElementById('bookEmailError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookEmailError').classList.remove('show');
  }

  if (!phone || phone.value.trim() === '') {
    document.getElementById('bookPhoneError').textContent = 'Phone is required';
    document.getElementById('bookPhoneError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookPhoneError').classList.remove('show');
  }

  if (!service || service.value === '') {
    document.getElementById('bookServiceError').textContent = 'Please select a service';
    document.getElementById('bookServiceError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookServiceError').classList.remove('show');
  }

  if (valid) {
    document.getElementById('step1').classList.add('hidden-step');
    document.getElementById('step2').classList.remove('hidden-step');
    document.getElementById('step1Indicator').classList.remove('active');
    document.getElementById('step2Indicator').classList.add('active');
  }
}

function backToStep1() {
  document.getElementById('step2').classList.add('hidden-step');
  document.getElementById('step1').classList.remove('hidden-step');
  document.getElementById('step2Indicator').classList.remove('active');
  document.getElementById('step1Indicator').classList.add('active');
}

function nextToStep3() {
  const date = document.getElementById('bookDate');
  let valid = true;

  if (!date || date.value === '') {
    document.getElementById('bookDateError').textContent = 'Please select a date';
    document.getElementById('bookDateError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookDateError').classList.remove('show');
  }

  if (selectedTime === '') {
    document.getElementById('bookTimeError').textContent = 'Please select a time slot';
    document.getElementById('bookTimeError').classList.add('show');
    valid = false;
  } else {
    document.getElementById('bookTimeError').classList.remove('show');
  }

  if (valid) {
    document.getElementById('sumName').textContent = document.getElementById('bookName').value;
    document.getElementById('sumEmail').textContent = document.getElementById('bookEmail').value;
    document.getElementById('sumPhone').textContent = document.getElementById('bookPhone').value;
    document.getElementById('sumService').textContent = document.getElementById('bookService').value;
    document.getElementById('sumDate').textContent = date.value;
    document.getElementById('sumTime').textContent = selectedTime;
    document.getElementById('sumMeeting').textContent = selectedMeeting;

    document.getElementById('step2').classList.add('hidden-step');
    document.getElementById('step3').classList.remove('hidden-step');
    document.getElementById('step2Indicator').classList.remove('active');
    document.getElementById('step3Indicator').classList.add('active');
  }
}

function backToStep2() {
  document.getElementById('step3').classList.add('hidden-step');
  document.getElementById('step2').classList.remove('hidden-step');
  document.getElementById('step3Indicator').classList.remove('active');
  document.getElementById('step2Indicator').classList.add('active');
}

function confirmBooking() {
  document.getElementById('bookingSuccess').classList.add('show');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 3000);
}