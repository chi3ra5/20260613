const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

// hamburgerをクリックしたら
hamburger.addEventListener('click',()=>{
    // activeを追加する
    hamburgerMenu.classList.toggle('active')
});