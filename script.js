function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Project Slider
const cards = document.querySelectorAll(".project-card");
const projectCardsContainer = document.querySelector(".project-cards");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
let currentIndex = 0;
const totalCards = cards.length;
let isAnimating = false;

function getCircularIndex(index) {
    return (index + totalCards) % totalCards;
}

function updateCards() {
    if (isAnimating) return;
    isAnimating = true;
    const cardWidth = cards[0].offsetWidth + 30;
    
    const leftIndex = getCircularIndex(currentIndex - 1);
    const centerIndex = currentIndex;
    const rightIndex = getCircularIndex(currentIndex + 1);
    
    cards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.4s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
    });
    
    setTimeout(() => {
        cards.forEach(card => {
            card.style.display = 'flex';
            card.style.position = 'absolute';
        });
        
        const leftCard = cards[leftIndex];
        leftCard.style.position = 'relative';
        leftCard.style.order = '1';
        leftCard.style.transform = 'translateX(-100%)';
        
        const centerCard = cards[centerIndex];
        centerCard.style.position = 'relative';
        centerCard.style.order = '2';
        centerCard.style.transform = 'translateX(0) scale(0.9)';
        
        const rightCard = cards[rightIndex];
        rightCard.style.position = 'relative';
        rightCard.style.order = '3';
        rightCard.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            leftCard.style.transition = 'all 0.5s ease';
            centerCard.style.transition = 'all 0.5s ease';
            rightCard.style.transition = 'all 0.5s ease';
            
            leftCard.style.opacity = '1';
            leftCard.style.transform = 'translateX(0) scale(1)';
            
            centerCard.style.opacity = '1';
            centerCard.style.transform = 'translateX(0) scale(1)';
            
            rightCard.style.opacity = '1';
            rightCard.style.transform = 'translateX(0) scale(1)';
            
            projectCardsContainer.style.transform = `translateX(0)`;
            
            isAnimating = false;
        }, 50);
        
    }, 300);
}

function nextCard() {
    if (isAnimating) return;
    currentIndex = getCircularIndex(currentIndex + 1);
    updateCards();
}

function prevCard() {
    if (isAnimating) return;
    currentIndex = getCircularIndex(currentIndex - 1);
    updateCards();
}

window.addEventListener('load', () => {
    updateCards();
});

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);
window.addEventListener('resize', updateCards);

// Modal functionality
const modal = document.getElementById('project-modal');
const viewButtons = document.querySelectorAll('.view-btn');
const closeModal = document.querySelector('.close');
const thumbNavLeft = document.querySelector('.left-btn');
const thumbNavRight = document.querySelector('.right-btn');
const thumbnailsImg = document.getElementById('thumbnails-img');
const projTitle = document.getElementById('proj-title');
const projSub = document.getElementById('proj-sub');
const roleTags = document.getElementById('role-tags');
const techTags = document.getElementById('tech-tags');
const dateText = document.getElementById('date-text');
const projFullDetails = document.querySelector('.proj-info .proj-full-details');
const projLinks = document.querySelector('.proj-links');

const projectData = [
    {
        title: "Clinic Information Management System",
        subtitle: "VB.net System",
        role: ["Full Stack Developer"],
        tech: ["VB.NET", "MySQL"],
        date: "Nov 2021 - Dec 2021",
        description: 
        `Developed a comprehensive desktop application to streamline 
        clinic operations, including patient check-in, medication 
        logging, and inventory tracking. Implemented automated PDF 
        report generation for patient records and inventory summaries 
        to enhance data accuracy and administrative efficiency.
        A detailed system documentation PDF is also available, 
        providing a full overview of the system’s features and workflows.`,
        images: [
            "assets/clinic/clinic_pic1.png", "assets/clinic/clinic_pic2.jpg", 
            "assets/clinic/clinic_pic3.png", "assets/clinic/clinic_pic4.png", 
            "assets/clinic/clinic_pic5.png", "assets/clinic/clinic_pic6.png", 
            "assets/clinic/clinic_pic7.png", "assets/clinic/clinic_pic8.png", 
            "assets/clinic/clinic_pic9.png", "assets/clinic/clinic_pic10.png", 
            "assets/clinic/clinic_pic11.png"
        ],
        links: {
            website: "",
            github: "",
            pdf: "assets/clinic/Clinic_system.pdf"
        }
    },
    {
        title: "Grocery Mart E-commerce Website",
        subtitle: "WordPress Website",
        role: ["Frontend Developer", "UI/UX Designer"],
        tech: ["WordPress", "PHP", "CSS", "JavaScript"],
        date: "2024",
        description: "A fully responsive e-commerce website with product catalog, shopping cart, and payment integration. Optimized for user experience and mobile devices.",
        images: ["assets/Grocery_website_profile.png"],
        links: {
            website: "https://example-grocery.com",
            github: "https://github.com/yourusername/grocery-mart",
            pdf: ""
        }
    },
    {
        title: "Automated Egg Incubator Embedded System",
        subtitle: "Embedded System",
        role: ["Embedded Systems Engineer"],
        tech: ["Arduino", "C++", "IoT"],
        date: "2023",
        description: "Designed and built an automated egg incubator with temperature and humidity control, automatic egg turning, and remote monitoring capabilities.",
        images: ["assets/Incub_embedded_profile.jpg"],
        links: {
            website: "",
            github: "",
            pdf: ""
        }
    },
    {
        title: "Capstone: Conveyor MangoQ",
        subtitle: "Conveyor AI & IoT System",
        role: ["AI Developer", "IoT Specialist"],
        tech: ["Python", "TensorFlow", "IoT", "Computer Vision"],
        date: "2023",
        description: "Developed an AI-powered conveyor system for mango quality assessment using computer vision and IoT sensors for real-time monitoring and sorting.",
        images: ["assets/mangoQ_capstone_profile.png"],
        links: {
            website: "",
            github: "",
            pdf: ""
        }
    },
    {
        title: "Automatic Fish Feeder",
        subtitle: "Application & IoT System",
        role: ["Full Stack Developer", "IoT Engineer"],
        tech: ["Mobile App", "IoT", "Arduino"],
        date: "2022",
        description: "Created an automatic fish feeding system with mobile app control, scheduling features, and remote monitoring capabilities.",
        images: ["assets/FishFeeder_profile.jpg"],
        links: {
            website: "",
            github: "",
            pdf: ""
        }
    }
];

let currentProjectIndex = 0;
let currentImageIndex = 0;

viewButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentProjectIndex = index;
        currentImageIndex = 0;
        openModal(index);
    });
});

function openModal(projectIndex) {
    if (!projectData[projectIndex]) {
        return;
    }

    const project = projectData[projectIndex];
    
    projTitle.textContent = project.title;
    projSub.textContent = project.subtitle;
    dateText.textContent = project.date;
    projFullDetails.textContent = project.description;
    
    roleTags.innerHTML = '';
    project.role.forEach(role => {
        const span = document.createElement('span');
        span.textContent = role;
        roleTags.appendChild(span);
    });
    
    techTags.innerHTML = '';
    project.tech.forEach(tech => {
        const span = document.createElement('span');
        span.textContent = tech;
        techTags.appendChild(span);
    });

    const imageCounter = document.createElement('div');
    imageCounter.className = 'image-counter';
    imageCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;

    const thumbnails = document.querySelector('.thumbnails');
    const existingCounter = document.querySelector('.image-counter');
    if (existingCounter) {
        existingCounter.remove();
    }
    thumbnails.appendChild(imageCounter);

    const imagePath = project.images[currentImageIndex];

    thumbnailsImg.style.display = 'block';
    thumbnailsImg.style.visibility = 'visible';
    thumbnailsImg.style.opacity = '1';
    thumbnailsImg.style.maxWidth = '100%';
    thumbnailsImg.style.maxHeight = '100%';
    thumbnailsImg.style.width = 'auto';
    thumbnailsImg.style.height = 'auto';
    thumbnailsImg.style.objectFit = 'contain';
    thumbnailsImg.style.margin = 'auto';

    const testImage = new Image();
    testImage.onload = function() {
        thumbnailsImg.src = imagePath;
        thumbnailsImg.alt = project.title + ' - Image ' + (currentImageIndex + 1);
        
        setTimeout(() => {
            thumbnailsImg.style.display = 'block';
        }, 50);
    };

    testImage.onerror = function() {
        const fallbackPath = 'assets/clinic/Clinic_system_profile.png';
        thumbnailsImg.src = fallbackPath;
        thumbnailsImg.alt = project.title + ' - Fallback Image';
    };

    testImage.src = imagePath;
    
    const links = projLinks.querySelectorAll('a');
    
    links.forEach(link => link.classList.remove('hidden'));
    
    if (!project.links.website || project.links.website.trim() === "") {
        links[0].classList.add('hidden');
    } else {
        links[0].href = project.links.website;
    }
    
    if (!project.links.github || project.links.github.trim() === "") {
        links[1].classList.add('hidden');
    } else {
        links[1].href = project.links.github;
    }
    
    if (!project.links.pdf || project.links.pdf.trim() === "") {
        links[2].classList.add('hidden');
    } else {
        links[2].href = project.links.pdf;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

thumbNavLeft.addEventListener('click', () => {
    const project = projectData[currentProjectIndex];
    currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
    thumbnailsImg.src = project.images[currentImageIndex];
    updateImageCounter(project);
});

thumbNavRight.addEventListener('click', () => {
    const project = projectData[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    thumbnailsImg.src = project.images[currentImageIndex];
    updateImageCounter(project);
});

function updateImageCounter(project) {
    const imageCounter = document.querySelector('.image-counter');
    if (imageCounter) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
    }
}