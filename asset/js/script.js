document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
// Automatic Words Animation

    if (document.querySelector('.typed')) {
        const typed = new Typed('.typed', {
            strings: ['Civil Engineer...'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu when a link is clicked
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });

    // Back to top button
    
  const scrollBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


    // Animate elements when they come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .contact-info-item, .about-image, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-info-item, .about-image, .about-content');
    if (animatedElements.length > 0) {
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Run on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Create twinkling stars
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const starsContainer2 = document.getElementById('stars2');
        const starsContainer3 = document.getElementById('stars3');
        
        // Only proceed if containers exist
        if (!starsContainer || !starsContainer2 || !starsContainer3) return;
        
        const starCount = 200;
        
        // Clear existing stars
        starsContainer.innerHTML = '';
        starsContainer2.innerHTML = '';
        starsContainer3.innerHTML = '';
        
        // Create stars for each layer
        for (let i = 0; i < starCount; i++) {
            createStar(starsContainer, 1);
            createStar(starsContainer2, 2);
            createStar(starsContainer3, 3);
        }
    }

    function createStar(container, layer) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random properties
        const size = Math.random() * (layer * 0.8);
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 5 + 2;
        const opacity = Math.random() * 0.7 + 0.1;
        const delay = Math.random() * 5;
        
        // Apply styles
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;
        star.style.opacity = opacity;
        
        // Different colors for different layers
        if (layer === 1) {
            star.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        } else if (layer === 2) {
            star.style.backgroundColor = 'rgba(200, 200, 255, 0.7)';
        } else {
            star.style.backgroundColor = 'rgba(108, 99, 255, 0.5)';
        }
        
        container.appendChild(star);
    }

    // Chat Box Start

 const resume = {
  name: "Musraf Musstack",
  title: "Civil Engineer",
  address: "No 14 Bharathipuram 2nd Street, Nagal Nagar, Dindigul - 624003",
  location: "Dindigul, Tamil Nadu, India",
  email: "musrafmusttack1399@gmail.com",
  phone: "+91 63819 72889",
  linkedin: "https://www.linkedin.com/in/musraf-musttack-630997289",
  experience: "3 years",
  skills: [
    "AutoCAD", "Revit", "SketchUp", "Civil 3D", "V-Ray",
    "MS Word", "MS Excel", "MS PowerPoint",
    "Site Supervision", "Project Management", "Construction Planning"
  ],
  industry: [
    "Drafting & 3D Modeling", "Construction Documentation", "Design Visualization",
    "Residential Buildings", "Commercial Construction",
    "Foundation Engineering", "Estimation", "Project Coordination", "Site Inspection"
  ],
  softskills: [
    "Communication", "Problem-Solving", "Team Collaboration", "Time Management",
    "Attention to Detail", "Adaptability", "Analytical Thinking", "Team Leadership"
  ],
  languages: "English, Tamil, Hindi",
  education: [
    "B.E. Civil Engineering – Anna University (2019 – 2022)",
    "Diploma in Civil Engineering – Tamil Nadu Dept. of Technical Education (2016 – 2019)"
  ],
  currentJob: "Site Engineer at Safeena Construction (Mar 2023 – Present)",
  pastJob: "Site Supervisor at Rani Fancy Construction (Mar 2022 – Mar 2023)"
};

function getReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("name")) return `My name is ${resume.name}, a ${resume.title}.`;
  if (msg.includes("age")) return `I am 25 years old.`;
  if (msg.includes("dob date of Birth") || msg.includes("birth")) return `My date of birth is 03th August 2000.`;
  if (msg.includes("address")) return `My address is ${resume.address}.`;
  if (msg.includes("experience")) return `I have ${resume.experience} of experience in residential and commercial building projects.`;
  if (msg.includes("current") || msg.includes("working on")) return `Currently, I'm working as ${resume.currentJob}.`;
  if (msg.includes("current ,Are you currently working ?") || msg.includes("working on")) return `Currently, I'm working as ${resume.currentJob}.`;
  if (msg.includes("skill") || msg.includes("tools")) return `My top skills include: ${resume.skills.join(", ")}.`;
  if (msg.includes("industry")) return `I have experience in: ${resume.industry.join(", ")}.`;
  if (msg.includes("soft , soft skills") || msg.includes("strength")) return `My soft skills include: ${resume.softskills.join(", ")}.`;
  if (msg.includes("language")) return `I speak ${resume.languages}.`;
  if (msg.includes("education")) return `I completed:\n- ${resume.education.join("\n- ")}`;
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) return `You can reach me at 📧 ${resume.email} or 📞 ${resume.phone}.`;
  if (msg.includes("linkedin")) return `Here is my LinkedIn profile: ${resume.linkedin}`;
  if (msg.includes("autocad") || msg.includes("revit") || msg.includes("sketchup")) return `Yes, I'm proficient in AutoCAD, Revit, and SketchUp — I create 2D & 3D drawings.`;
  if (msg.includes("site") || msg.includes("supervision")) return `I have hands-on experience in site supervision, safety enforcement, and quality control.`;
  if (msg.includes("name")) return `My name is ${resume.name}, a ${resume.title}.`;
  if (msg.includes("address")) return `My address is ${resume.address}.`;
  if (msg.includes("summary")) return `I'm a skilled Civil Engineer with ${resume.experience} specializing in residential and commercial projects. I excel in site supervision, project coordination, and delivering quality work on time.`;
  if (msg.includes("goal") || msg.includes("career")) return `My career goal is to grow as a project manager in civil engineering, focusing on innovative construction methods and quality standards.`;
  if (msg.includes("experience")) return `I have ${resume.experience} of experience in residential, commercial, and mosque projects.`;
  if (msg.includes("current") || msg.includes("working on")) return `Currently, I'm working as ${resume.currentJob}.`;
  if (msg.includes("previous") || msg.includes("past job")) return `Previously, I worked as ${resume.pastJob}.`;
  if (msg.includes("project")) return `I have worked on mosque projects, residential buildings, and commercial constructions, handling site supervision, drafting, and estimation.`;
  if (msg.includes("achievement")) return `One of my achievements was successfully coordinating a mosque project from start to finish, meeting safety, quality, and delivery timelines.`;
  if (msg.includes("skill") || msg.includes("tools")) return `My top skills include: ${resume.skills.join(", ")}.`;
  if (msg.includes("industry")) return `I have experience in: ${resume.industry.join(", ")}.`;
  if (msg.includes("soft") || msg.includes("strength")) return `My soft skills include: ${resume.softskills.join(", ")}.`;
  if (msg.includes("software")) return `I am proficient in AutoCAD, Revit, SketchUp, Civil 3D, V-Ray, MS Word, Excel, and PowerPoint.`;
  if (msg.includes("team") || msg.includes("manage")) return `I have led site teams, coordinated with engineers, contractors, and laborers to ensure project delivery and safety.`;
  if (msg.includes("relocate") || msg.includes("abroad")) return `Yes, I am open to relocation opportunities including Dubai and other international projects.`;
  if (msg.includes("education") || msg.includes("study")) return `I completed:\n- ${resume.education.join("\n- ")}`;
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone")) return `You can reach me at 📧 ${resume.email} or 📞 ${resume.phone}.`;
  if (msg.includes("linkedin")) return `Here is my LinkedIn profile: ${resume.linkedin}`;
  if (msg.includes("language")) return `I speak ${resume.languages}. Tamil and English fluently, and basic Hindi.`;
  if (msg.includes("autocad") || msg.includes("revit") || msg.includes("sketchup")) return `Yes, I'm proficient in AutoCAD, Revit, and SketchUp — I create both 2D and 3D drawings.`;
  if (msg.includes("draft") || msg.includes("drawing")) return `I prepare accurate 2D & 3D drawings and interpret construction plans effectively.`;
  if (msg.includes("site") || msg.includes("supervision")) return `I have nearly 3 years of hands-on experience in site supervision, safety enforcement, and quality control.`;
  if (msg.includes("certification") || msg.includes("course")) return `I have formal training in Civil Engineering through my Diploma and Bachelor's degree programs.`;
  if (msg.includes("future") || msg.includes("plan")) return `In the future, I aim to specialize in large-scale infrastructure projects and project management.`;

  return "I'm not sure how to answer that. Try asking about my experience, projects, achievements, or education!";
}

// ✅ Chatbox UI Controls
const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatbox = document.getElementById('chatbox');
const closeChat = document.getElementById('closeChat');
const sendMsg = document.getElementById('sendMsg');
const chatInput = document.getElementById('chatInput');
const chatBody = document.getElementById('chatBody');

chatToggleBtn.onclick = () => {
  chatbox.style.display = 'flex';
};

closeChat.onclick = () => {
  chatbox.style.display = 'none';
};

sendMsg.onclick = () => {
  const userText = chatInput.value.trim();
  if (!userText) return;

  const userDiv = document.createElement('div');
  userDiv.className = 'chat-msg user';
  userDiv.textContent = userText;
  chatBody.appendChild(userDiv);

  const botReply = document.createElement('div');
  botReply.className = 'chat-msg bot';
  botReply.textContent = getReply(userText);

  setTimeout(() => {
    chatBody.appendChild(botReply);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  chatInput.value = "";
};

window.addEventListener("scroll", () => {
  const chatToggleBtn = document.getElementById("chatToggleBtn");
  if (window.scrollY > 150) {
    chatToggleBtn.classList.add("show");
  } else {
    chatToggleBtn.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("chatToggleBtn").classList.remove("show");
});



// Chat Box End

    // Initialize stars and recreate on resize
    createStars();
    window.addEventListener('resize', createStars);
});

function downloadWithPopup(event) {
    event.preventDefault(); // stop default link action
    alert("I am Currently Working In This Company !");

    // Create a hidden link to trigger the download
    // const link = document.createElement('a');
    // link.href = "musraf-musttack-CV.pdf";
    // link.download = "musraf-musttack-CV.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
}

// LOCK THE INSPECT OPTION IN BROWSER START

document.addEventListener('contextmenu', event => event.preventDefault());
 document.onkeydown = function(e) {
   if (e.keyCode == 123 || // F12
       (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode == 85)) { // Ctrl+U
        return false;
    }
 }


// LOCK THE INSPECT OPTION IN BROWSER END 

