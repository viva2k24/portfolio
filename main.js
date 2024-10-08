var typed = new Typed(".text", {
    strings: ['Graphics Designer', 'Radio Jockey', 'UI/UX designer'], // Change "Strings" to "strings"
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
document.querySelectorAll('.progress-circle').forEach(circle => {
    const progress = circle.dataset.progress;
    const innerCircle = circle.querySelector('.progress-inner');
    
    // Set CSS variable for the stroke-dasharray
    const radius = 20; // Adjust based on the size of the circle
    const circumference = 2 * Math.PI * radius; // Calculate circumference
    const offset = circumference - (progress / 100 * circumference); // Calculate offset
    
    innerCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    innerCircle.style.strokeDashoffset = offset;

    // Trigger the animation
    setTimeout(() => {
        innerCircle.style.transition = 'stroke-dashoffset 2s ease-in-out'; // Animate the dash offset
    }, 100);
});
const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    const message = document.getElementById('message').value;

    // Prepare the data to send (only message content)
    const data = new URLSearchParams();
    data.append('message', message);

    // Send the form data using fetch
    fetch('https://example.com/submit-form', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        // Handle success or error
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message.');
        }
    });
});