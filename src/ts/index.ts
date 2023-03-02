const navIcon = document.querySelector('.nav-icon') as HTMLDivElement
const navItems = document.querySelector('.nav-items') as HTMLUListElement

navIcon.addEventListener('pointerdown', (e: Event) => navItems.classList.toggle('hidden'))