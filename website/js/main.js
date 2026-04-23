// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
// ===== DARK/LIGHT MODE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Saved theme load karo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
}

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
// ===== PORTFOLIO MODAL =====
const projects = {
  1: {
    icon: '<i class="fas fa-laptop-code"></i>',
    tag: 'Web Development',
    title: 'E-Commerce Platform',
    desc: 'A fully featured online store with payment integration, inventory management, and admin dashboard. Built with modern technologies for a seamless shopping experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Product catalog with filters',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Admin dashboard',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  2: {
    icon: '<i class="fas fa-robot"></i>',
    tag: 'AI Solutions',
    title: 'AI Customer Support Bot',
    desc: 'An intelligent chatbot that handles customer queries 24/7, reducing support costs by 60%. Powered by OpenAI GPT-4.',
    tech: ['Python', 'OpenAI', 'Node.js'],
    features: [
      '24/7 automated responses',
      'Natural language processing',
      'Multi-language support',
      'Analytics dashboard',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  3: {
    icon: '<i class="fas fa-chart-line"></i>',
    tag: 'Digital Marketing',
    title: 'SEO Growth Campaign',
    desc: 'Helped a retail brand increase organic traffic by 300% in just 6 months through targeted SEO and content strategy.',
    tech: ['SEO', 'Google Ads', 'Analytics'],
    features: [
      'Keyword research & optimization',
      'On-page & off-page SEO',
      'Content strategy',
      'Monthly reporting',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  4: {
    icon: '<i class="fas fa-mobile-alt"></i>',
    tag: 'Web Development',
    title: 'Healthcare Web App',
    desc: 'A patient management system with appointment booking, medical records, and billing features for a modern clinic.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Patient registration',
      'Appointment booking',
      'Medical records management',
      'Billing & invoicing',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  5: {
    icon: '<i class="fas fa-film"></i>',
    tag: 'Post Production',
    title: 'Brand Promo Video',
    desc: 'A cinematic brand promotional video with motion graphics and professional color grading for a luxury brand.',
    tech: ['Premiere Pro', 'After Effects', 'DaVinci'],
    features: [
      'Professional color grading',
      'Motion graphics',
      '4K resolution output',
      'Sound design',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  6: {
    icon: '<i class="fas fa-pen-nib"></i>',
    tag: 'AI Solutions',
    title: 'AI Content Generator',
    desc: 'An AI-powered platform that generates SEO-optimized blog posts and social media content in seconds.',
    tech: ['Python', 'GPT-4', 'React'],
    features: [
      'Blog post generation',
      'Social media captions',
      'SEO optimization',
      'Multi-language support',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  7: {
    icon: '<i class="fas fa-bullhorn"></i>',
    tag: 'Digital Marketing',
    title: 'Social Media Campaign',
    desc: 'A multi-platform social media campaign that grew a brand following from 2K to 50K in just 3 months.',
    tech: ['Instagram', 'Facebook', 'TikTok'],
    features: [
      'Content calendar',
      'Paid ad campaigns',
      'Influencer outreach',
      'Performance analytics',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  8: {
    icon: '<i class="fas fa-store"></i>',
    tag: 'Web Development',
    title: 'Restaurant Booking System',
    desc: 'A modern restaurant website with online reservations, menu management, and order tracking system.',
    tech: ['Next.js', 'Tailwind', 'Firebase'],
    features: [
      'Online table reservations',
      'Digital menu management',
      'Order tracking',
      'Customer reviews',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
  9: {
    icon: '<i class="fas fa-video"></i>',
    tag: 'Post Production',
    title: 'YouTube Channel Editing',
    desc: 'Complete video editing and thumbnail design for a YouTube channel that grew to 100K subscribers.',
    tech: ['Premiere Pro', 'Photoshop', 'Canva'],
    features: [
      'Video editing & cuts',
      'Thumbnail design',
      'End screen & cards',
      'SEO optimization',
    ],
    demo: 'https://rad-sprite-b53385.netlify.app',
    github: 'https://github.com/kinzadev-26/developershub-website',
  },
};

function openModal(id) {
  const project = projects[id];
  if (!project) return;

  document.getElementById('modalIcon').innerHTML = project.icon;
  document.getElementById('modalTag').textContent = project.tag;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDesc').textContent = project.desc;

  // Tech tags
  const techHTML = project.tech.map(t => `<span>${t}</span>`).join('');
  document.getElementById('modalTech').innerHTML = techHTML;

  // Features
  const featuresHTML = `
    <h4>Key Features</h4>
    <ul>
      ${project.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
    </ul>
  `;
  document.getElementById('modalFeatures').innerHTML = featuresHTML;

  document.getElementById('modalDemo').href = project.demo;
  document.getElementById('modalGithub').href = project.github;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Modal Close
document.addEventListener('DOMContentLoaded', () => {
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});

  // Min date set karo
  const dateInput = document.getElementById('bookDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }

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
}