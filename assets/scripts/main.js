
preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}

function toggleNav() {
    siteNav = document.querySelector("nav");

    if(siteNav.classList == 'hide') {
        siteNav.style.opacity = 1;
        siteNav.classList.remove('hide');
        siteNav.classList.add('show');
    } else {
        siteNav.style.opacity = 0;
        siteNav.classList.remove('show');
        siteNav.classList.add('hide');
    }
    
}


function loadScore() {
    
}

loadScore();

prog = document.querySelectorAll(".vic-progress");
prog.forEach(pro => {
    pro.style.width = pro.dataset.score + '%';
    pro.style.transitionDuration = '2s';
    pro.style.opacity = 1;

    //skill = pro.dataset.skill;
    //score = pro.dataset.score;
    //pro.style.width = score + '%';
    //pro.style.transitionDuration = '5s';
    //pro.style.opacity = 1;
    pro.innerHTML = `${pro.dataset.tech.toUpperCase()}<span>${pro.dataset.score}%</span>`;
});