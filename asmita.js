// Typing effect for Home
const text = "Hello, I'm Asmita 👋 | Web Developer";
let index = 0;
function typeEffect(){
    if(index<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(index);
        index++;
        setTimeout(typeEffect,50);
    }
}

// About typing effect
const aboutContent = "I am a BSc-IT student and beginner web developer. I love learning new technologies and building websites. My goal is to become a Software Engineer.";
let aboutIndex=0;
function typeAbout(){
    if(aboutIndex<aboutContent.length){
        document.getElementById("aboutText").innerHTML+=aboutContent.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAbout,30);
    }
}

// Skills animation
function animateSkills(){
    const bars=document.querySelectorAll(".progress div");
    bars.forEach(bar=>{
        const width=bar.getAttribute("data-width");
        bar.style.width="0";
        setTimeout(()=>{bar.style.width=width;},200);
    });
}

// Section Navigation
function showSection(sectionId){
    const sections=document.querySelectorAll("section");
    sections.forEach(section=>{section.style.display="none";});
    document.getElementById(sectionId).style.display="block";

    if(sectionId==="about"){document.getElementById("aboutText").innerHTML=""; aboutIndex=0; typeAbout();}
    if(sectionId==="skills"){animateSkills();}
}

// Hire Me button
function hireMe(){window.location.href="mailto:asmitajha.it@gmail.com";}

// Dark mode toggle
function toggleDarkMode(){document.body.classList.toggle("dark");}

// Contact form alert
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    alert(`Thank you ${name}! Your message has been sent.\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
});

// Projects carousel
let carouselIndex = 0;
const track = document.querySelector('.carousel-track');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveCarousel(direction){
    carouselIndex += direction;
    if(carouselIndex<0) carouselIndex = totalItems-1;
    if(carouselIndex>=totalItems) carouselIndex = 0;
    const width = document.querySelector('.carousel-item').offsetWidth;
    track.style.transform = `translateX(-${carouselIndex*width}px)`;
}

// Initialize
window.onload=function(){typeEffect(); showSection("home");}
window.addEventListener('resize', ()=>{moveCarousel(0);});