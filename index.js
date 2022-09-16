let pads = document.querySelectorAll(".pad");
let audios = document.querySelectorAll("audio");
let originals = [
	"Kula_Hat02.mp3",
	"Kula_Kick.mp3",
	"LittleDirty_Hat.mp3",
	"MadHatta_Kick.mp3",
	"MapDivide_Kick.mp3",
	"NatureCalls_Hat01.mp3",
	"NmbrCrnchr_Snare.mp3",
	"RockSolid_Kick.mp3",
	"SunshineState_Hat.mp3"
],
originalsKeys = [
	"KeyZ",
	"KeyX",
	"KeyC",
	"KeyV",
	"KeyB",
	"KeyN",
	"KeyM",
	"Comma",
	"Period"
],
colors = [
	"#4CAF50",
	"#8BC34A",
	"#CDDC39",
	"#FFEB3B",
	"#FFC107",
	"#FF9800",
	"#FF5722",
	"#F44336",
	"#E91E63"
];

for (let i=0; i < originals.length; i++) {
	audios[i].setAttribute("src", "sounds/"+originals[i]);
}

let makeBalls = (i) => {
	let ball = document.createElement("div");
	ball.classList.add("ball");
	ball.style.background = colors[i];

	let pad = document.querySelectorAll(".pad")[i];
	let padWidth = pad.getBoundingClientRect().width;
	let padX = pad.getBoundingClientRect().left;
	let ballX = padX + (padWidth / 2);
	ball.style.left = ballX+"px";

	ball.addEventListener("animationend", function() {
		document.body.removeChild(ball);
	})

	document.body.append(ball);
}

let playSound = (i) => {
	audios[i].currentTime = 0; // not to make sounds interference
	audios[i].play();
}

let down = false;

for (let i=0; i < originals.length; i++) {
	pads[i].addEventListener("click", function() {
			playSound(i);
			makeBalls(i);
	})
}

window.addEventListener("keydown", function(e) {
	for (let i=0; i < originalsKeys.length; i++) {
		if (e.code === originalsKeys[i]) {
			pads[i].click();
			pads[i].classList.add("active");
			window.addEventListener("keyup", function() {
				pads[i].classList.remove("active");
			})
		}
	}
})
