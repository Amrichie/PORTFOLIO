document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links-pill a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 2. AI Assistant Modal Functionality
  const letsTalkBtn = document.getElementById('letsTalkBtn');
  const aiModal = document.getElementById('aiModal');
  const closeAiModal = document.getElementById('closeAiModal');

  letsTalkBtn.addEventListener('click', () => {
    aiModal.classList.add('active');
  });

  closeAiModal.addEventListener('click', () => {
    aiModal.classList.remove('active');
  });

  aiModal.addEventListener('click', (e) => {
    if (e.target === aiModal) {
      aiModal.classList.remove('active');
    }
  });
});

// AI Response Logic
function askAi(question) {
  const chatBody = document.getElementById('aiChatBody');

  // Add User Question
  const userMsg = document.createElement('div');
  userMsg.className = 'ai-message user-message';
  userMsg.innerHTML = `<p>${question}</p>`;
  chatBody.appendChild(userMsg);

  // Generate AI Answer
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.className = 'ai-message';

    let response = "I'm happy to help! You can reach Nila directly via the contact form on this page.";
    
    if (question.includes('services')) {
      response = "Nila specializes in UI/UX Website Design, Responsive Front-End Development, Performance Optimization, and Custom Implementations.";
    } else if (question.includes('contact')) {
      response = "You can scroll down to the Get In Touch section or send an email to your-email@example.com.";
    } else if (question.includes('tech stack')) {
      response = "Nila works primarily with HTML5, CSS3, JavaScript, Figma, GitHub, and responsive web design frameworks.";
    }

    aiMsg.innerHTML = `<p><strong>AI:</strong> ${response}</p>`;
    chatBody.appendChild(aiMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 400);
}

// ==========================
// WhatsApp Contact Form
// ==========================
const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
  whatsappForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phone = "2349043315770"; 
    const text =
`Hello Amrich,

Name: ${name}
Email: ${email}

Message:
${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links-pill");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show-menu");

    if(navLinks.classList.contains("show-menu")){

        menuBtn.innerHTML="✕";

    }else{

        menuBtn.innerHTML="☰";

    }

});