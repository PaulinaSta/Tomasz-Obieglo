const burgerBtn = document.querySelector('.burger-btn')
const menu = document.querySelector('.menu')
const menuBg = document.querySelector('.menu__bg')
const allMenuElements = document.querySelectorAll('.menu__element-js')
const allMenuItems = document.querySelectorAll('.menu__item')
const menuLogo = document.querySelector('.menu__logo')
const footerYear = document.querySelector('.footer__year')

const menuShow = () => {
	menu.classList.toggle('menu--active')

	allMenuElements.forEach(element => {
		element.addEventListener('click', () => {
			menu.classList.remove('menu--active')
		})
	})

	menuItemAnimation()
}

const menuItemAnimation = () => {
	let delay = 0

	allMenuItems.forEach(item => {
		item.classList.toggle('menu__item--animation')
		item.style.animationDelay = '.' + delay + 's'
		delay++
	})
}

burgerBtn.addEventListener('click', menuShow)

const addMenuBg = () => {
	if (window.scrollY >= 250) {
		menuBg.style.opacity = '1'
	} else {
		menuBg.style.opacity = '0'
	}
}

window.addEventListener('scroll', addMenuBg)

const currentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

currentYear()
