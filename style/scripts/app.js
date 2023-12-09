let nuqtaElement = document.getElementById('nuqta');
let orage = document.createElement('span');

orage.textContent = '.';
orage.style.color = '#FF6E30';
orage.style.fontSize = '50px'
orage.style.fontWeight = '500'
orage.style.lineHeight = '140%'
nuqtaElement.appendChild(orage)

let button = document.getElementById('button');

// site animation
const animationsite = document.getElementById("siteElement");
let position = 10;

function animate() {
    position += 1;
    animationsite.style.button = `${position}px`;

    if(position < window.innerWidth - animationsite.clientWidth) {
        requestAnimationFrame(animate);
    }
}

animate();