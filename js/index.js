"use strict";
const navIcon = document.querySelector('.nav-icon');
const navItems = document.querySelector('.nav-items');
navIcon.addEventListener('pointerdown', (e) => navItems.classList.toggle('hidden'));
