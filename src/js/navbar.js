console.log('%c Hello from navbar.js', 'color: #bada55; background: #000; padding: 5px 10px; margin: 5px 25px; font-size:2em;')

// ############# hamburger ####################

const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    menuOpen = false
  }
})
