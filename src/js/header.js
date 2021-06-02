const h2 = document.querySelector('h2')

const spans = h2.innerHTML = h2.textContent.replace(/\S/g, '<span class="header--letter">$&</span>')
