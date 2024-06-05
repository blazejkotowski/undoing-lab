audio = document.getElementsByTagName('audio')[0]
playerOverlayWrapper = document.getElementsByClassName('project-player-overlay-wrapper')[0]
playerProgressBarContainer = document.getElementsByClassName('player-progress-bar-container')[0]
playerProgressBar = document.getElementsByClassName('player-progress-bar')[0]
playerTitle = document.getElementsByClassName('player-title')[0]
playerProgressNum = document.getElementsByClassName('player-progress-num')[0]
playerProgressNumCurrent = document.getElementsByClassName('player-progress-num-current')[0]
playerProgressNumDuration = document.getElementsByClassName('player-progress-num-duration')[0]
playerPlayButton = document.getElementsByClassName('player-play-button')[0]
playerPauseButton = document.getElementsByClassName('player-pause-button')[0]
playerControls = document.getElementsByClassName('player-controls')[0]
let audioPercentage

audio.addEventListener('timeupdate', (event) => {
	audioPercentage = (audio.currentTime * 100) / audio.duration
	playerProgressBar.style.width = `${audioPercentage}%`
})

audio.addEventListener('playing', (event) => {})

playerProgressBarContainer.addEventListener('click', (event) => {
	barWidthPercentage = event.clientX / window.innerWidth
	audio.currentTime = audio.duration * barWidthPercentage
})

playerControls.addEventListener('click', (event) => {
	if (audio.paused) {
		audio.play()
	} else {
		audio.pause()
	}
})

playerPlayButton.addEventListener('click', (event) => {})

playerPauseButton.addEventListener('click', (event) => {})

audio.addEventListener('play', () => {
	playerProgressNumDuration.innerHTML =
		`${Math.floor(audio.duration / 60)}`.padStart(2, '0') +
		':' +
		`${Math.floor(audio.duration) % 60}`.padStart(2, '0')

	console.log('sound played')

	playerPlayButton.classList.toggle('controls-hidden')
	playerPauseButton.classList.toggle('controls-hidden')
	playerProgressBarContainer.classList.remove('player-hidden')
	playerTitle.classList.remove('player-hidden')
	playerProgressNum.classList.remove('player-hidden')

	//playerOverlayWrapper.classList.add('project-player-overlay-fixed')
})

audio.addEventListener('pause', () => {
	console.log('sound paused')

	playerPlayButton.classList.toggle('controls-hidden')
	playerPauseButton.classList.toggle('controls-hidden')
	playerProgressBarContainer.classList.add('player-hidden')
	playerTitle.classList.add('player-hidden')
	playerProgressNum.classList.add('player-hidden')

	//playerOverlayWrapper.classList.remove('project-player-overlay-fixed')
})

audio.addEventListener('timeupdate', (event) => {
	playerProgressNumCurrent.innerHTML =
		`${Math.floor(audio.currentTime / 60)}`.padStart(2, '0') +
		':' +
		`${Math.floor(audio.currentTime) % 60}`.padStart(2, '0')
})
