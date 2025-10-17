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
        role: ["Frontend Developer"],
        tech: ["WordPress", "WooCommerce", "PHP", "CSS", "JavaScript"],
        date: "Nov 2023 - Dec 2023",
        description:
            `I developed and customized a WordPress based e-commerce 
        website using WooCommerce to simulate an online grocery 
        shopping system. I modified themes and templates using 
        PHP, CSS, and JavaScript to improve layout, responsiveness, 
        and user experience. The system includes product listings, 
        a shopping cart, and secure PayPal payment integration. 
        A detailed system documentation PDF is available, providing 
        a full overview of the site’s features and workflows.`,
        images: ["assets/grocery/Grocery_website_profile.png"],
        links: {
            website: "",
            github: "",
            pdf: "assets/grocery/GroceryMart_web.pdf"
        }
    },
    {
        title: "Automated Egg Incubator Embedded System",
        subtitle: "Embedded System",
        role: ["Application Developer", "UI/UX Designer"],
        tech: ["Android Studio", "Java"],
        date: "Sep 2023 - Dec 2023",
        description:
            `I designed the web and mobile UI/UX for the Automated 
        Egg Incubator system, focusing on intuitive layouts 
        and real-time monitoring visuals. The prototype 
        automatically tracks temperature and humidity, turns 
        eggs on schedule, monitors candling and hatching with 
        photo updates, and triggers hygiene alerts with UV cleaning 
        schedules.`,
        images: ["assets/incub/Incub_embedded_profile.jpg", "assets/incub/Incub_pic1.jpg", "assets/incub/Incub_pic2.jpg"],
        links: {
            website: "",
            github: "",
            pdf: ""
        }
    },
    {
        title: "Capstone: Conveyor MangoQ",
        subtitle: "Conveyor AI & IoT System",
        role: ["Application Developer", "IoT Developer", "Prototype Designer"],
        tech: ["Android Studio (Java)", "Firebase", "Arduino IDE (C++)", "Python", "Raspberry Pi", "TinkerCAD (3D Prototype Design)"],
        date: "Jan 2024 - Mar 2025",
        description:
            `Developed a mobile application to record and display data 
        on the number of sorted mangoes. Integrated IoT components 
        such as servos for the sorter push arm and a load cell sensor 
        for size-based automated sorting. Designed a 3D prototype in 
        TinkerCAD to represent the system’s structure and functionality. 
        A detailed thesis documentation PDF is available, providing full 
        technical and research details of the system.`,
        images: ["assets/mangoq/mangoQ_capstone_profile.png"],
        links: {
            website: "",
            github: "",
            pdf: "assets/mangoq/MangoQ_Capstone.pdf"
        }
    },
    {
        title: "Automatic Fish Feeder",
        subtitle: "Application & IoT System",
        role: ["Flutter Developer", "IoT Developer"],
        tech: ["Flutter (Dart)", "Firebase", "Arduino IDE (C++)"],
        date: "Jul 2025 - Jul 2025",
        description:
            `Developed a Flutter mobile app and ESP32 firmware for automated 
        fish feeding with real-time scheduling, Firebase integration, and 
        remote monitoring. Implemented precise stepper motor control for 
        consistent feed dispensing. The full system, including the app and 
        IoT firmware, is available on GitHub.`,
        images: ["assets/fishfeed/FishFeeder_profile.jpg", "assets/fishfeed/fishfeeder_app.png", "assets/fishfeed/fishfeeder_video.mp4"],
        links: {
            website: "",
            github: "https://github.com/Anthony-Cabaya/FeedFishProject",
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

    const isVideo = imagePath.toLowerCase().endsWith('.mp4') || imagePath.toLowerCase().endsWith('.webm') || imagePath.toLowerCase().endsWith('.ogg');

    if (isVideo) {
        thumbnailsImg.style.display = 'none';

        const existingVideo = document.querySelector('#thumbnails-video');
        if (existingVideo) existingVideo.remove();

        const video = document.createElement('video');
        video.id = 'thumbnails-video';
        video.src = imagePath;
        video.controls = true;
        video.style.maxWidth = '90%';
        video.style.maxHeight = '90%';
        video.style.margin = 'auto';
        video.style.display = 'block';

        document.querySelector('.thumbnails').appendChild(video);
    } else {
        thumbnailsImg.style.display = 'block';
        thumbnailsImg.style.visibility = 'visible';
        thumbnailsImg.style.opacity = '1';
        thumbnailsImg.style.maxWidth = '100%';
        thumbnailsImg.style.maxHeight = '100%';
        thumbnailsImg.style.width = 'auto';
        thumbnailsImg.style.height = 'auto';
        thumbnailsImg.style.objectFit = 'contain';
        thumbnailsImg.style.margin = 'auto';

        thumbnailsImg.src = imagePath;
        thumbnailsImg.alt = project.title + ' - Image ' + (currentImageIndex + 1);
    }

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
    loadCurrentMedia(project);
    updateImageCounter(project);
});

thumbNavRight.addEventListener('click', () => {
    const project = projectData[currentProjectIndex];
    currentImageIndex = (currentImageIndex + 1) % project.images.length;
    loadCurrentMedia(project);
    updateImageCounter(project);
});

function loadCurrentMedia(project) {
    const imagePath = project.images[currentImageIndex];
    const isVideo = imagePath.toLowerCase().endsWith('.mp4') ||
        imagePath.toLowerCase().endsWith('.webm') ||
        imagePath.toLowerCase().endsWith('.ogg');

    if (isVideo) {
        thumbnailsImg.style.display = 'none';

        const existingVideo = document.querySelector('#thumbnails-video');
        if (existingVideo) existingVideo.remove();

        const video = document.createElement('video');
        video.id = 'thumbnails-video';
        video.src = imagePath;
        video.controls = true;
        video.style.maxWidth = '90%';
        video.style.maxHeight = '90%';
        video.style.margin = 'auto';
        video.style.display = 'block';

        document.querySelector('.thumbnails').appendChild(video);
    } else {
        thumbnailsImg.style.display = 'block';
        thumbnailsImg.src = imagePath;
        thumbnailsImg.alt = project.title + ' - Image ' + (currentImageIndex + 1);

        const existingVideo = document.querySelector('#thumbnails-video');
        if (existingVideo) existingVideo.remove();
    }
}

function updateImageCounter(project) {
    const imageCounter = document.querySelector('.image-counter');
    if (imageCounter) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${project.images.length}`;
    }
}

// Contact functionality
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const sendButton = form.querySelector('.send-message-btn');
    const originalButtonText = sendButton.textContent;

    if (!validateForm(form)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }

    sendButton.textContent = 'Sending...';
    sendButton.disabled = true;

    try {
        await submitContactForm(formData);
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        form.reset();
        clearAllErrors(form);
    } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        console.error('Form submission error:', error)
    } finally {
        sendButton.textContent = originalButtonText;
        sendButton.disabled = false;
    }
}

async function submitContactForm(formData) {
    const response = await fetch('https://formsubmit.co/ajax/cabaya24.anthony@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            _replyto: formData.get('email')
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    return response.json();
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.form-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `form-notification form-notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;

    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        info: '#3498db'
    };

    notification.style.backgroundColor = colors[type] || colors.info;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);

    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

const additionalStyles = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #e74c3c !important;
        background-color: #fdf2f2 !important;
    }
    
    .send-message-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
    }
    
    .send-message-btn:disabled:hover {
        background: rgb(53, 53, 53) !important;
        color: white !important;
        border: 2px solid rgb(53, 53, 53) !important;
        transform: none !important;
        box-shadow: 0 4px 12px rgba(53, 53, 53, 0.2) !important;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);