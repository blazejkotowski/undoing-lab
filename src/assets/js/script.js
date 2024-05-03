const mainLogo = document.getElementsByClassName("main-logo")[0]
const sectionWork = document.getElementsByClassName("section-work")[0]
const worksContainer = document.getElementsByClassName("animation-test")[0]
const elementTitleDescription = document.getElementsByClassName("element-title-description")[0]

const backgroundSection = document.getElementsByClassName("section-background")[0]
console.log(backgroundSection.children)

class Section {
	top = 0
	height = 0
	bottom = 0
	constructor(element) {
		this.element = element
	}

	setInitVals() {
		this.top = Math.floor(this.element.getBoundingClientRect().top)
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

let myelementposition

window.addEventListener("load", (event) => {
	aboutSection.element.style.marginTop = `${
		window.innerHeight - elementTitleDescription.clientHeight
	}px`
	// myelementposition = sectionWork.getBoundingClientRect().top
	aboutSection.setInitVals()
	workSection.setInitVals()
	contactSection.setInitVals()
})

window.onscroll = () => {
	if (window.pageYOffset > 10) {
		mainLogo.classList.remove("main-logo-big")
	} else {
		mainLogo.classList.add("main-logo-big")
	}

	if (
		window.pageYOffset + window.innerHeight > aboutSection.top &&
		aboutSection.bottom > window.pageYOffset
	) {
		console.log("about is visible")
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

	if (window.pageYOffset > workSection.top && workSection.bottom > window.pageYOffset) {
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

	if (window.pageYOffset > contactSection.top && contactSection.bottom > window.pageYOffset) {
		console.log("contact is visible")
		for (let i = 0; i < backgroundSection.children.length; i++) {
			const element = backgroundSection.children[i]
			element.classList.add("outlined-color")
		}
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
