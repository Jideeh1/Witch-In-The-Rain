var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML structure and JavaScript logic. My css however... maybe you can learn a thing or two from me.\n\n";
var messageThree = "Want to take a peek? Go to Sources.\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you `see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);

const character = ["Maya", "Sumire", "Reinhardt", "Scarlett", "Lance"];
const el = document.querySelector('.role');
let i = 0;

setInterval(() => {
  el.style.setProperty('--charac-text', `"${character[i]}"`);
  i = (i + 1) % character.length;
}, 1000);


document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    function animateBackgroundPositionX() {
        const randomX = Math.floor(Math.random() * 101);

        root.style.setProperty('--bg-pos-x', `${randomX}%`);
    }

    animateBackgroundPositionX();
    setInterval(animateBackgroundPositionX, 3000);
});