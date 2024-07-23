document.getElementById('open-modal').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.modal').classList.remove('hidden');
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('hidden');
});


/* function openModal() {
    document.querySelector('.modal').classList.remove('hidden');
} */


/* function openModal() {
    let menuMobile = document.querySelector('.modal');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
} */