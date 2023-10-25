/* 
const btn = document.getElementById("btnTop");

btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
    });
});
*/


const btn = document.getElementById("btnTop");

btn.addEventListener("click", function() {
    smoothScrollTo(0, 0, 400); // 400ms de duração (ou ajuste para o valor desejado)
});

// Função de rolagem suave
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scrollTo(newX, newY);
    }, 1000 / 60);
}




/*
let btnTop = document.getElementById('btnTop');
btnTop.style.display = 'none';

window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
});

btnTop.onClick = function() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}
*/



