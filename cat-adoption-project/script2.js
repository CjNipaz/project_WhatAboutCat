document.addEventListener('DOMContentLoaded', function() {
    // Cat data
    const cats = [
        {
            id: 1,
            name: "Maine Coon",
            description: "Gentle giants known for their large size and friendly personalities.",
            tags: ["longhair", "family-friendly"],
            image: "imageOfCat/MaineCoon.jpg"
        },
        {
            id: 2,
            name: "Siamese",
            description: "Vocal and intelligent cats with striking blue eyes and color-point coats.",
            tags: ["shorthair", "vocal"],
            image: "imageOfCat/Siamese.jpg"
        },
        {
            id: 3,
            name: "Persian",
            description: "Luxurious long-haired cats with sweet personalities and flat faces.",
            tags: ["longhair", "calm"],
            image: "imageOfCat/Persian.jpg"
        },
        {
            id: 4,
            name: "Bengal",
            description: "Energetic cats with wild-looking spotted coats reminiscent of their leopard ancestors.",
            tags: ["shorthair", "active"],
            image: "imageOfCat/Bengal.webp"
        },
        {
            id: 5,
            name: "Ragdoll",
            description: "Large, laid-back cats that go limp when picked up, hence their name.",
            tags: ["longhair", "calm", "family-friendly"],
            image: "imageOfCat/Ragdoll.jpg"
        },
        {
            id: 6,
            name: "Sphynx",
            description: "Hairless cats known for their extroverted behavior and warmth to the touch.",
            tags: ["hypoallergenic", "unique"],
            image: "imageOfCat/Sphynx.avif"
        },
        {
            id: 7,
            name: "Scottish Fold",
            description: "Recognizable by their folded ears and sweet expressions.",
            tags: ["shorthair", "family-friendly"],
            image: "imageOfCat/ScottishFold.jpg"
        },
        {
            id: 8,
            name: "Abyssinian",
            description: "One of the oldest known cat breeds with a ticked coat and active personality.",
            tags: ["shorthair", "active"],
            image: "imageOfCat/Abyssinian.jpg"
        },
        {
            id: 9,
            name: "Russian Blue",
            description: "Elegant cats with bluish-gray coats and green eyes, known for being shy but affectionate.",
            tags: ["shorthair", "hypoallergenic"],
            image: "imageOfCat/RussianBlue.jpg"
        },
        {
            id: 10,
            name: "Norwegian Forest Cat",
            description: "Large, sturdy cats with water-resistant coats, adapted to cold climates.",
            tags: ["longhair", "family-friendly"],
            image: "imageOfCat/NorwegianForestCat.jpg"
        },
        {
            id: 11,
            name: "Burmese",
            description: "Medium-sized cats with muscular bodies and golden eyes, very people-oriented.",
            tags: ["shorthair", "affectionate"],
            image: "imageOfCat/Burmese.jpg"
        },
        {
            id: 12,
            name: "Devon Rex",
            description: "Cats with large ears, wavy coats, and mischievous personalities.",
            tags: ["hypoallergenic", "playful"],
            image: "imageOfCat/DevonRex.webp"
        },
        {
            id: 13,
            name: "British Shorthair",
            description: "Stocky cats with dense coats and easygoing temperaments.",
            tags: ["shorthair", "calm"],
            image: "imageOfCat/BritishShorthair.jpg"
        },
        {
            id: 14,
            name: "Oriental",
            description: "Sleek, slender cats with large ears and expressive personalities.",
            tags: ["shorthair", "vocal"],
            image: "imageOfCat/Oriental.jpg"
        },
        {
            id: 15,
            name: "Cornish Rex",
            description: "Cats with soft, wavy coats and energetic, playful natures.",
            tags: ["hypoallergenic", "active"],
            image: "imageOfCat/CornishRex.jpg"
        }
    ];

    // DOM elements
    const catsContainer = document.getElementById('cats-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevTestimonialBtn = document.getElementById('prev-testimonial');
    const nextTestimonialBtn = document.getElementById('next-testimonial');
    const testimonials = document.querySelectorAll('.testimonial');
    
    let currentTestimonial = 0;

    // Display all cats
    function displayCats(filter = 'all') {
        catsContainer.innerHTML = '';
        
        const filteredCats = filter === 'all' 
            ? cats 
            : cats.filter(cat => cat.tags.includes(filter));
            
        if (filteredCats.length === 0) {
            catsContainer.innerHTML = '<p class="no-results">No cats match this filter. Please try another.</p>';
            return;
        }
        
        filteredCats.forEach(cat => {
            const catCard = document.createElement('div');
            catCard.className = 'cat-card';
            catCard.innerHTML = `
                <img src="${cat.image}" alt="${cat.name}" class="cat-img">
                <div class="cat-info">
                    <h3>${cat.name}</h3>
                    <p>${cat.description}</p>
                    <div class="cat-tags">
                        ${cat.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            catsContainer.appendChild(catCard);
        });
    }

    // Filter cats
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cats
            const filter = button.dataset.filter;
            displayCats(filter);
        });
    });

    // Testimonial navigation
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }

    prevTestimonialBtn.addEventListener('click', () => {
        let newIndex = currentTestimonial - 1;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        showTestimonial(newIndex);
    });

    nextTestimonialBtn.addEventListener('click', () => {
        let newIndex = currentTestimonial + 1;
        if (newIndex >= testimonials.length) newIndex = 0;
        showTestimonial(newIndex);
    });

    // Initialize
    displayCats();
    showTestimonial(0);
});