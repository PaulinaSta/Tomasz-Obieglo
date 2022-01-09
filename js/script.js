const burgerBtn = document.querySelector('.burger-btn')
const menu = document.querySelector('.menu')
const allMenuItems = document.querySelectorAll('.menu__item')

const menuShow = () => {
	menu.classList.toggle('menu--active')

	allMenuItems.forEach(item => {
		item.addEventListener('click', () => {
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
