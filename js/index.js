"use strict";
const navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('pointerdown', e => {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('hidden');
});
