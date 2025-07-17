// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing parallax...');
    
    // Get all the elements for parallax effect
    const text = document.getElementById('text');
    const explore = document.getElementById('explore');
    const sky = document.getElementById('sky');
    const sun = document.getElementById('sun');
    const clouds = document.getElementById('clouds');
    const jet = document.getElementById('jet');
    const contrails = document.getElementById('contrails');
    const header = document.getElementById('header');
    const plane1 = document.getElementById('plane1');
    const plane2 = document.getElementById('plane2');
    const plane3 = document.getElementById('plane3');
    const helicopter = document.getElementById('helicopter');
    const cloud1 = document.getElementById('cloud1');
    const cloud2 = document.getElementById('cloud2');
    const cloud3 = document.getElementById('cloud3');

    // Log which elements were found
    console.log('Elements found:', {
        text: !!text,
        sky: !!sky,
        sun: !!sun,
        clouds: !!clouds,
        jet: !!jet,
        plane1: !!plane1,
        plane2: !!plane2,
        plane3: !!plane3,
        helicopter: !!helicopter
    });

    // Select the floating elements class
    const time = document.getElementsByClassName('floating-elements')[0];

    // padding values for desktop
    var plane2move = 100;
    var plane3move = 900;
    var helicopterMove = 1200;

    if (screen.width < 400) {
        //Change transformation duration and translatey for mobile view
        if (time) {
            time.style.setProperty('--transform-duration', '12s')
            time.style.setProperty('--transform-y', '-500vh')
        }

        // padding values for mobile
        plane2move = 1680;
        plane3move = 3000;
        helicopterMove = 4300;
    }



    window.addEventListener('scroll', function () {

        let value = window.scrollY;   //Get Scroll Value (Mobile - High)
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = value / maxScroll;

        // Main text parallax with bounds
        if (text) {
            let textMove = Math.max(20, Math.min(80, 50 + value * -0.2));
            text.style.top = textMove + '%';
        }
        
        // Aviation elements parallax with bounds
        if (clouds) {
            let cloudsMove = Math.max(-200, Math.min(200, value * 0.5));
            clouds.style.transform = `translateX(${cloudsMove}px)`;
        }
        
        if (jet) {
            let jetMoveTop = Math.max(-50, Math.min(50, value * 0.05));
            let jetMoveLeft = Math.max(-100, Math.min(100, value * 0.3));
            jet.style.transform = `translateY(${jetMoveTop}px) translateX(${jetMoveLeft}px)`;
        }

        if (contrails) {
            let contrailsTop = Math.max(-30, Math.min(30, value * -0.05));
            let contrailsLeft = Math.max(-150, Math.min(150, value * -0.5));
            contrails.style.transform = `translateY(${contrailsTop}px) translateX(${contrailsLeft}px)`;
        }

        if (explore) {
            let exploreMove = Math.max(0, Math.min(100, value * 0.5));
            explore.style.transform = `translateY(${exploreMove}px)`;
        }

        if (sky) {
            let skyMove = Math.max(-50, Math.min(50, value * 0.1));
            sky.style.transform = `translateY(${skyMove}px)`;
        }
        
        if (sun) {
            let sunMove = Math.max(-100, Math.min(200, value * 0.3));
            sun.style.transform = `translateY(${sunMove}px)`;
        }

        if (header) {
            let headerMove = Math.max(-20, Math.min(50, value * 0.2));
            header.style.transform = `translateY(${headerMove}px)`;
        }

        // Floating clouds parallax with bounds
        if (cloud1) {
            let cloud1X = Math.max(-100, Math.min(100, value * 0.3));
            let cloud1Y = Math.sin(value * 0.01) * 10;
            cloud1.style.transform = `translateX(${cloud1X}px) translateY(${cloud1Y}px)`;
        }
        if (cloud2) {
            let cloud2X = Math.max(-100, Math.min(100, value * -0.2));
            let cloud2Y = Math.cos(value * 0.008) * 15;
            cloud2.style.transform = `translateX(${cloud2X}px) translateY(${cloud2Y}px)`;
        }
        if (cloud3) {
            let cloud3X = Math.max(-100, Math.min(100, value * 0.4));
            let cloud3Y = Math.sin(value * 0.012) * 8;
            cloud3.style.transform = `translateX(${cloud3X}px) translateY(${cloud3Y}px)`;
        }

        //Move aircraft horizontally based on scroll with bounds
        if (plane1) {
            let plane1Move = Math.max(-300, Math.min(300, (value - 100) * 0.5));
            plane1.style.transform = `translateX(${plane1Move}px)`;
        }
        if (plane2) {
            let plane2Move = Math.max(-300, Math.min(300, (value - plane2move) * 0.5));
            plane2.style.transform = `translateX(${plane2Move}px)`;
        }
        if (plane3) {
            let plane3Move = Math.max(-300, Math.min(300, (value - plane3move) * 0.5));
            plane3.style.transform = `translateX(${plane3Move}px)`;
        }
        if (helicopter) {
            let helicopterMove = Math.max(-300, Math.min(300, (value - helicopterMove) * 0.5));
            helicopter.style.transform = `translateX(${helicopterMove}px)`;
        }
    });


    // Contains the link for all social media handles
    var links = document.getElementsByClassName("social-media");

    if (links.length > 0) {
        links[0].addEventListener("click", () => { openlink(1) });
        links[1].addEventListener("click", () => { openlink(2) });
        links[2].addEventListener("click", () => { openlink(3) });
        links[3].addEventListener("click", () => { openlink(4) });
    }

    function openlink(x) {
        if (x == 1) {
            window.open("https://www.instagram.com/crystalwings/", "_blank");
        }
        if (x == 2) {
            window.open("https://www.linkedin.com/company/crystalwings/", "_blank");
        }
        if (x == 3) {
            window.open("https://twitter.com/crystalwings", "_blank");
        }
        if (x == 4) {
            window.open("https://www.facebook.com/crystalwings", "_blank");
        }
    }

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    }

}); // Close DOMContentLoaded event listener