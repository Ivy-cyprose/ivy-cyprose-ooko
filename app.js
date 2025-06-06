document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Cuisine Data (would typically come from an API)
    const cuisines = [
        {
            name: "Italian Cuisine",
            description: "Discover the rich flavors of Italy, from pasta to risotto and beyond.",
            image: "https://images.unsplash.com/photo-1533777324565-a040eb52facd",
            region: "Europe"
        },
        {
            name: "Japanese Cuisine",
            description: "Experience the delicate balance of flavors in traditional Japanese dishes.",
            image: "https://images.unsplash.com/photo-1490641815614-b45106d6dd04",
            region: "Asia"
        },
        {
            name: "Mexican Cuisine",
            description: "Spicy, colorful and full of flavor - explore authentic Mexican food.",
            image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d",
            region: "North America"
        },
        {
            name: "Indian Cuisine",
            description: "Aromatic spices and diverse regional specialties await you.",
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
            region: "Asia"
        },
        {
            name: "Moroccan Cuisine",
            description: "A blend of Mediterranean, Arabic, and Andalusian flavors.",
            image: "https://images.unsplash.com/photo-1517638851339-a711cfcf3279",
            region: "Africa"
        },
        {
            name: "Brazilian Cuisine",
            description: "From feijoada to churrasco, explore Brazil's culinary diversity.",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
            region: "South America"
        }
    ];

    // Recipe Data
    const recipes = [
        {
            name: "Homemade Pasta",
            cuisine: "Italian",
            time: "2 hours",
            difficulty: "Medium",
            image: "https://images.unsplash.com/photo-1606921231191-f3f228f784f5",
            description: "Learn to make fresh pasta from scratch with this authentic Italian recipe."
        },
        {
            name: "Sushi Rolls",
            cuisine: "Japanese",
            time: "1.5 hours",
            difficulty: "Hard",
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
            description: "Master the art of making perfect sushi rolls at home."
        },
        {
            name: "Chicken Tacos",
            cuisine: "Mexican",
            time: "45 mins",
            difficulty: "Easy",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
            description: "Authentic street-style chicken tacos with all the traditional toppings."
        }
    ];

    // Populate Cuisine Grid
    const cuisineGrid = document.querySelector('.cuisine-grid');
    
    cuisines.forEach(cuisine => {
        const cuisineCard = document.createElement('div');
        cuisineCard.className = 'cuisine-card';
        cuisineCard.innerHTML = `
            <div class="cuisine-img">
                <img src="${cuisine.image}" alt="${cuisine.name}">
            </div>
            <div class="cuisine-info">
                <h3>${cuisine.name}</h3>
                <p>${cuisine.description}</p>
                <span class="cuisine-region">${cuisine.region}</span>
            </div>
        `;
        cuisineGrid.appendChild(cuisineCard);
    });

    // Populate Recipe Carousel
    const recipeSlides = document.querySelector('.recipe-slides');
    
    recipes.forEach(recipe => {
        const recipeSlide = document.createElement('div');
        recipeSlide.className = 'recipe-slide';
        recipeSlide.innerHTML = `
            <div class="recipe-item">
                <div class="recipe-img">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <div class="recipe-details">
                    <h3>${recipe.name}</h3>
                    <div class="recipe-meta">
                        <span>${recipe.cuisine}</span>
                        <span>${recipe.time}</span>
                        <span>${recipe.difficulty}</span>
                    </div>
                    <p>${recipe.description}</p>
                    <a href="#" class="btn">View Recipe</a>
                </div>
            </div>
        `;
        recipeSlides.appendChild(recipeSlide);
    });

    // Carousel Navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    const slides = document.querySelectorAll('.recipe-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Initialize carousel
    showSlide(currentSlide);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
// ...existing code...

    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            item.classList.toggle('active');
        });
    });

// ...existing code...
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Here you would typically send the email to your server
        console.log('Subscribed email:', email);
        
        // Show success message
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
    // ...existing code...

// Contact Form Submission Response
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const responseDiv = this.querySelector('.contact-response');
        responseDiv.textContent = "Thank you for reaching out! We have received your message and will get back to you soon.";
        responseDiv.style.display = "block";
        this.reset();
    });
}

// ...existing code...
});