var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML structure and JavaScript logic. My css however... maybe you can learn a thing or two from me.\n\n";
var messageThree = "Want to take a peek? Go to Sources.\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you `see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);
console.log("(says FUNCTION if jQuery is working): " + typeof jQuery);

const character = ["Maya", "Sumire", "Reinhardt", "Scarlett", "Lance"];
const el = document.querySelector('.role');
let i = 0;

setInterval(() => {
  el.style.setProperty('--charac-text', `"${character[i]}"`);
  i = (i + 1) % character.length;
}, 1000);

$(document).ready(function(){
    $("#hero").ripples({
        perturbance: 0.04,
        resolution : 512,
        dropRadius : 20,
        imageUrl   : null,
        interactive: true
    })
})

const slider = document.querySelector('.library-carousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  slider.style.scrollSnapType = 'none'; // Disable scroll-snap during drag
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.scrollSnapType = ''; // Re-enable scroll-snap
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.scrollSnapType = ''; // Re-enable scroll-snap
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});



// const slider = document.querySelector('.library-carousel');

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;
// });

function openClose() {
    var toggler = document.querySelector('.toggler');
    var sideText = document.querySelectorAll('.text-aside');

    if (toggler.innerHTML === 'left_panel_open'){
        toggler.innerHTML = 'left_panel_close';

        console.log('I am open')
        
        toggler.style.display = 'block';
        setTimeout(() => {
            toggler.style.opacity = '0';
            toggler.style.width = 'amx-content';
        }, 5000);
    } else {
        toggler.innerHTML = 'left_panel_open';
        console.log("I'm closed")
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    function animateBackgroundPositionX() {
        const randomX = Math.floor(Math.random() * 101);

        root.style.setProperty('--bg-pos-x', `${randomX}%`);
    }

    animateBackgroundPositionX();
    setInterval(animateBackgroundPositionX, 3000);
});

function openSearchNav() {
    var searchNav = document.querySelector('.search-con')

    searchNav.style.display = "block";

    setTimeout(() => {
        searchNav.style.opacity = "1";
  }, 100);
}

function closeSearchNav() {
    var searchNav = document.querySelector('.search-con')

    searchNav.style.opacity = "0";

    setTimeout(() => {
        searchNav.style.display = "none";
    }, 500);
}


const searchInput = document.getElementById('searchInput');

const navBtns = document.querySelectorAll('.search-nav-btn');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    navBtns.forEach(navBtn => {
        const dataRole = navBtn.dataset.role;
        const h1Text = navBtn.querySelector('h1')?.textContent.toLowerCase();

        let comparisonText = '';
        if (dataRole) {
            comparisonText = dataRole;
        } else if (h1Text) {
            comparisonText = h1Text;
        }
        navBtn.classList.toggle('hidden', !comparisonText.includes(query));
    });
});

