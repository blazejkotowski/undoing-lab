const mainLogo = document.getElementsByClassName("main-logo")[0]
const sectionWork = document.getElementsByClassName("section-work")[0]
const worksContainer = document.getElementsByClassName("animation-test")[0]
const elementTitleDescription = document.getElementsByClassName("element-title-description")
const headerContainer = document.getElementsByTagName("header")[0]
const body = document.getElementsByTagName("body")[0]
const nav = document.getElementsByTagName("nav")[0]

const backgroundSection = document.getElementsByClassName("section-background")[0]

class Section {
	top = 0
	height = 0
	bottom = 0
	constructor(element) {
		this.element = element
	}

	setInitVals() {
		this.top =
			Math.floor(this.element.getBoundingClientRect().top) -
			elementTitleDescription[1].clientHeight
		this.height = Math.floor(this.element.getBoundingClientRect().height)
		this.bottom = this.top + this.height
	}

	/*
	get top() {
		return this.top
	}

	set top(value) {
		this.top = value
	}*/
}

const aboutSection = new Section(document.getElementsByClassName("section-about")[0])
const workSection = new Section(document.getElementsByClassName("section-work")[0])
const contactSection = new Section(document.getElementsByClassName("section-contact")[0])

window.addEventListener("load", (event) => {
	aboutSection.element.style.marginTop = `${
		window.innerHeight - elementTitleDescription[0].clientHeight
	}px`

	headerContainer.style.height = `${
		body.getBoundingClientRect().height - (window.innerHeight / 4) * 3
	}px`

	navInitHeight = mainLogo.clientHeight
	nav.style.height = `${navInitHeight}px`

	// myelementposition = sectionWork.getBoundingClientRect().top
	aboutSection.setInitVals()
	workSection.setInitVals()
	contactSection.setInitVals()

	mainLogo.addEventListener(
		"click",
		() => {
			window.scrollTo(0, 0)
		},
		false
	)
})

window.onscroll = () => {
	if (window.pageYOffset > window.innerHeight * 0.3) {
		mainLogo.classList.remove("main-logo-big")
		nav.classList.remove("nav-big")
		nav.style.height = `${mainLogo.clientHeight}px`
	} else {
		mainLogo.classList.add("main-logo-big")
		nav.classList.add("nav-big")
	}

	if (window.pageYOffset > window.innerHeight * 0.7) {
		elementTitleDescription[0].classList.add("small")
	} else {
		elementTitleDescription[0].classList.remove("small")
	}
	/*
	if (
		window.pageYOffset + aboutSection.top > aboutSection.top &&
		window.pageYOffset < aboutSection.bottom
	) {
		elementTitleDescription[0].classList.add("small")
	} else {
		elementTitleDescription[0].classList.remove("small")
	}
*/
	if (
		window.pageYOffset + aboutSection.top * 0.7 > aboutSection.top &&
		window.pageYOffset < aboutSection.bottom
	) {
		//console.log("about is visible")
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.add("filled-color")
		}
	} else {
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.remove("filled-color")
		}
	}

	if (window.pageYOffset >= workSection.top && window.pageYOffset < workSection.bottom) {
		console.log("work is visible")
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.add("outlined-black")
		}
	} else {
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.remove("outlined-black")
		}
	}

	if (window.pageYOffset > contactSection.top && window.pageYOffset < contactSection.bottom) {
		console.log("contact is visible")
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.add("outlined-color")
		}
		mainLogo.classList.add("main-logo-big")
		nav.style.height = `${navInitHeight}px`
	} else {
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.remove("outlined-color")
		}
	}
	/*
	let percentageOfContainer =
		((window.pageYOffset - Math.floor(myelementposition)) * 50) / sectionWork.clientHeight
	worksContainer.style.offsetDistance = `${window.pageYOffset - Math.floor(myelementposition)}px`
	console.log(window.pageYOffset - Math.floor(myelementposition), myelementposition)*/
}

window.onresize = () => {
	//sectionAbout.style.marginTop = `${percentageOfContainer}%`
}
