
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close');

// Ham hien thi modal mua ve
function showBuyTicket() {
    modal.classList.add('open');
}

// Ham an modal mua ve
function hideBuyTicket() {
    modal.classList.remove('open');
}

// Lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket);
}

// Nghe hanh vi vao nut button close
modalClose.addEventListener('click', hideBuyTicket);

modal.addEventListener('click', hideBuyTicket);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

// Dong mo header menu tren mobile
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function() {
        header.style.height = null;
    }
}