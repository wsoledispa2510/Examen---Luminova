// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

// Add scroll reveal functionality for team members
const teamMembers = document.querySelectorAll('.team-member');

window.addEventListener('scroll', () => {
    teamMembers.forEach(member => {
        const revealPoint = member.getBoundingClientRect().top;
        if (revealPoint < window.innerHeight - 50) {
            member.style.transform = 'scale(1)';
        } else {
            member.style.transform = 'scale(0)';
        }
    });
});