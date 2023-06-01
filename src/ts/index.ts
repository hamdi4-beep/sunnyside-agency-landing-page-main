const navIcon = document.querySelector('.nav-icon') as HTMLDivElement

navIcon.addEventListener('pointerdown', e => {
    const navItems = document.querySelector('.nav-items') as HTMLDivElement
    navItems.classList.toggle('display')
})