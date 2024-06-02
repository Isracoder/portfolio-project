const folderName = "assets/";

const picType = ".png";
const pics = [
	"baseConverter",
	"cardBookReact",
	"drumMachine",
	"formHW",
	"generateMemes",
	"imageEditor",
	"iosCalcHw",
	"jsCalculator",
	"loginHw",
	"markdownPrev",
	"menu",
	"paragraphGenerator",
	"pomodoro",
	"quoteFilter",
	"randomMachine",
	"randomRecipe",
	"reactTodo",
	"rickAndMorty",
	"scrollWebsite",
	"shoppingReact",
	"socialPost",
	"typeTest",
	"vanillaTodo",
	"weatherApp",
];
// const cardObj = [];
// for (let i = 0; i < pics.length; i++) {
// 	let obj = {};
// 	obj.pic = pics[i];
// 	obj.info = pics[i];
// 	obj.desc = "";
// 	cardObj.push(obj);
// }
// console.log(cardObj);
const cardObj = [
	{
		pic: "baseConverter",
		info: "baseConverter",
		desc: `A simple web page that converts from your chosen base (2-16) to another.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "cardBookReact",
		info: "cardBookReact",
		desc: `Made during the gsg react bootcamp as practice`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "drumMachine",
		info: "drumMachine",
		desc: `A drum machine made with html , css , and js where each drum pad you click has a distinct sound.
        You can also use the keyboard to try it out.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "formHW",
		info: "formHW",
		desc: `A static form page made for the university web programming course.`,
		tech: ["css", "html"],
	},
	{
		pic: "generateMemes",
		info: "generateMemes",
		desc: `A page where you can randomly get a meme picture from a list of prechosen images and add your own caption to each picture
    to generate your custom meme.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "imageEditor",
		info: "imageEditor",
		desc: `A page where you can insert your own image and then apply css filters on the image
    , for example blurring it or increasing the saturation.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "iosCalcHw",
		info: "iosCalcHw",
		desc: `A mock IOS calulator page made for the university programming course. The calulator is responsive and changes
    the layout depending on screen width to mimic the phone layout.This calculator is non-functional and is only meant as a static design.`,
		tech: ["css", "html"],
	},
	{
		pic: "jsCalculator",
		info: "jsCalculator",
		desc: `This is a functioning calculator designed by me to practice some react and javascript concepts.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "loginHw",
		info: "loginHw",
		desc: `A static page design meant to ressemble a login page for a website. This was also for the unversity front-end course.`,
		tech: ["css", "html"],
	},
	{
		pic: "markdownPrev",
		info: "markdownPrev",
		desc: `This is a markdown previewer made with react. Anything written in markdown in the top editor will be reflected automatically in the bottom part.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "menu",
		info: "menu",
		desc: `A menu page with interactive buttons that filter the selection using javascript.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "paragraphGenerator",
		info: "paragraphGenerator",
		desc: `This is a dummy paragraph generator as a funnier alternative to using the lorem paragraphs. You choose the number of paragraphs
        you would like and using javascript the words are randomly grouped together.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "pomodoro",
		info: "pomodoro",
		desc: `A (semi) functioning pomodoro clock designed by me to practice using React. The user can start the pomdoro session and change it's length or pause the session when they would like.
    They can also set the break session length. When the studying session timer is down to zero it automatically changes to the break timer.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "quoteFilter",
		info: "quoteFilter",
		desc: `A quote filter page where the quotes are fetched using an api. The user can then enter
    the word they would like to search for and any quotes with that word are displayed.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "randomMachine",
		info: "randomMachine",
		desc: `This is a random quote machine + a color changing website. When the user clicks the button 
    a new quote from a list is chosen and the background color is also changed.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "randomRecipe",
		info: "randomRecipe",
		desc: `This is a random recipe page made with an api. When the user clicks the button a new recipe is chosen from the list fetched from the api. The recipe name , picture , ingredients , and instructions
        are displayed on the page for the user to read.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "reactTodo",
		info: "reactTodo",
		desc: `This is a to-do list made with react during the 4 day gsg react bootcamp in hebron university.`,
		tech: ["css", "html"],
	},
	{
		pic: "rickAndMorty",
		info: "rickAndMorty",
		desc: `This is page that fetches data from the rick and Morty api and dynamically displays that data as a character list.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "scrollWebsite",
		info: "scrollWebsite",
		desc: `This is a website with scrolling functionality and screen width responsiveness. For example , 
        the navbar changes to a dropdown version when the screen is small.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "shoppingReact",
		info: "shoppingReact",
		desc: `This is a shopping cart web page implemented (not my original design) with react and basic typescript.`,
		tech: ["bootstrap", "html", "react", "typescript"],
	},
	{
		pic: "socialPost",
		info: "socialPost",
		desc: `A basic implementation of some social media app concepts . This was also for the gsg react bootcamp. The page lets you write the caption for a new post , like other posts , comment on posts
         , and hide the comments on a post.`,
		tech: ["css", "html", "react"],
	},
	{
		pic: "typeTest",
		info: "typeTest",
		desc: "This is a typing test page where a quote is set for you to type and a timer start counting up. Whatever is written correctly turns to green , and what is written in-correctly turns red.",
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "vanillaTodo",
		info: "vanillaTodo",
		desc: `This is a to-do app designed by me with vanilla js. In addition to adding new tasks to your 
    list you can also edit pre-existing tasks. If a task is completed the icon turns green , and when in editing mode the pencil is blue. You can also change tasks from completed to uncompleted.`,
		tech: ["css", "html", "javascript"],
	},
	{
		pic: "weatherApp",
		info: "weatherApp",
		desc: `This is a weather app made with the openWeather api. Enter the city name of your choosing and the api fetches the data for that city which is then 
    displayed on the page with javascript.`,
		tech: ["css", "html", "javascript"],
	},
];
const root = document.querySelector(":root");
// console.log(pics);
let firstInd = 0;

let limit = 3;
let screenWidth = window.innerWidth;
if (screenWidth < 500) limit = 1;
else if (screenWidth < 850) limit = 2;
console.log(screenWidth);
addEventListener("resize", () => {
	screenWidth = window.innerWidth;
	if (screenWidth < 500) limit = 1;
	else if (screenWidth < 850) limit = 2;
	else limit = 3;
	if (projects) projects.innerHTML = setCards(firstInd, limit).join("");
	addExpand();
});

let arrowRight = document.getElementById("arrowRight");
let arrowLeft = document.getElementById("arrowLeft");
console.log(arrowLeft);
const setCards = (firstInd, limit) => {
	let arrOfCards = [];
	for (let i = 0; i < limit; i++) {
		let aCard = `<div class="card">
            <div class="cardContent">
                <img src="${folderName}${
			cardObj[(i + firstInd) % pics.length].pic
		}${picType}" alt="a project" />
                <h4>${cardObj[(i + firstInd) % cardObj.length].info}</h4>
                <span
							><i class="fa-solid fa-expand expandIcon" id=""></i
						></span>
            </div>
             </div>`;
		arrOfCards.push(aCard);
	}

	return arrOfCards;
};

const addExpand = () => {
	let expandIcon = document.querySelectorAll(".expandIcon");
	expandIcon.forEach((icon) => {
		icon.addEventListener("click", () => {
			let picture = icon.parentElement.parentElement.children[0];
			let info = icon.parentElement.parentElement.children[1];
			console.log("i have been clicked");
			console.log(`picure ${JSON.stringify(picture)}`);
			console.log(picture);
			console.log(picture.outerHTML);
			console.log(`info ${info}`);
			let overlay = document.querySelector(".overlay");
			// overlay.style.display = "initial";
			overlay.innerHTML = `<div class="card">
            <div class="cardContent">
                ${picture.outerHTML}
                
                <span
                ><i class="fa-regular fa-circle-xmark closeIcon" id=""></i
                ></span>
                </div>
                </div>`;

			overlay.classList.add("dfJcAc");
			let closeIcon = overlay.querySelector(".closeIcon");
			closeIcon.addEventListener("click", () => {
				console.log("You want to close me");
				overlay.classList.remove("dfJcAc");
			});
		});
	});
};
let projects = document.getElementById("projects");
window.onload = () => {
	// console.log("loaded");
	if (projects) projects.innerHTML = setCards(firstInd, limit).join("");
	addExpand();
};

// console.log(`number of expand icons ${expandIcon.length}`);
// console.log(expandIcon);
const sheet = document.styleSheets[0];

if (arrowRight)
	arrowRight.addEventListener("click", (e) => {
		console.log("right arrow clicked");
		firstInd += 2;

		firstInd %= pics.length;

		let arrOfCards = setCards(firstInd, limit);
		projects.innerHTML = arrOfCards.join("");
		addExpand();
	});

if (arrowLeft)
	arrowLeft.addEventListener("click", (e) => {
		console.log("left arrow clicked");

		firstInd -= 2;
		if (firstInd < 0) firstInd = cardObj.length + firstInd;
		console.log(firstInd);
		console.log(cardObj.length);
		// console.log(firstInd % cardObj.length);

		let arrOfCards = setCards(firstInd, limit);
		projects.innerHTML = arrOfCards.join("");
		addExpand();
	});

let mode = "light";
const lightStyles = [
	{ property: "--navColor", value: "#7d5ba6" },
	{ property: "--darkerNav", value: "#644192" },
	{ property: "--accents", value: "#acfcd9" },
	{ property: "designs", value: "#55d6be" },
	{ property: "--darkDesigns", value: "#56aa9b" },
	{ property: "--background", value: "whitesmoke" },
	{ property: "--cardBackground", value: " #ebe8e8" },
	{ property: "--buttons", value: "#a75c74" },
	{ property: "--footerBackground", value: "lightgray" },
	{ property: "--footerFont", value: "rgb(147, 147, 147)" },
	{ property: "--overlay", value: "rgba(255 , 255, 255, 0.8)" },
	{ property: "--fontColor", value: "black" },
];

const darkStyles = [
	{ property: "--navColor", value: "#a68bc9" },
	{ property: "--darkerNav", value: "#703bb6" },
	{ property: "--accents", value: "#acfcd9" },
	{ property: "--designs", value: "#55d6be" },
	{ property: "--darkDesigns", value: "#56aa9b" },
	{ property: "--background", value: "rgba(0, 0, 0, 0.9)" },
	{ property: "--cardBackground", value: "rgba(255, 255, 255, 0.03)" },
	{ property: "--buttons", value: "#a75c74" },
	{ property: "--footerBackground", value: " rgba(255, 255, 255, 0.03)" },
	{ property: "--footerFont", value: "var(--darkerNav)" },
	{ property: "--overlay", value: "rgba(0, 0, 0, 0.315)" },
	{ property: "--fontColor", value: "lightgray" },
	{ property: "--fixedNav", value: "whitesmoke" },
];
let ul = document.querySelector(".navUl");
let modeElem = document.getElementById("modeIcon");
const addStyles = (styles) => {
	const root = document.documentElement;
	styles.forEach((item) => {
		root.style.setProperty(item.property, item.value);
	});
};
const switchModes = () => {
	if (mode === "light") {
		mode = "dark";
		console.log("i want dark mode");
		addStyles(darkStyles);

		document.querySelector(".lightIcon").classList.remove("dNone");
		document.querySelector(".darkIcon").classList.add("dNone");
	} else {
		mode = "light";
		addStyles(lightStyles);
		document.querySelector(".lightIcon").classList.add("dNone");
		document.querySelector(".darkIcon").classList.remove("dNone");
	}
};

let darkIcon = document.querySelector(".darkModeIcon");
darkIcon.addEventListener("click", (e) => {
	e.preventDefault();
	switchModes();
	console.log("hi");
});
let lightIcon = document.querySelector(".lightModeIcon");
if (lightIcon) {
	console.log("There is a light Icon");
	lightIcon.addEventListener("click", (e) => {
		e.preventDefault();
		switchModes();
	});
}

// Projects html

const getProjects = (arr) => {
	return arr.map((item) => {
		return `<div class="card blogCard df jSa aC dC">
        
        <!-- <h4>${item.info}:</h4> -->
        <div class="dfJcAc postImg ">
            <img src="${folderName}${item.pic}${picType}" alt="projectPic" />
        </div>
        <div class="words df Jc Ac dC">
                <ul class='techList'>
                ${item.tech
					.map((method) => `<li>${method.toUpperCase()}</li>`)
					.join("")}
                </ul>
                ${item.desc}
            
        </div>
    </div>`;
	});
};
console.log(document.querySelector(".projectsContainer"));
const projectsContainer = document.querySelector(".projectsContainer");
if (projectsContainer)
	projectsContainer.innerHTML = getProjects(cardObj).join("");

let allButtons = document.querySelectorAll(".filterBtn");
console.log(allButtons);
if (allButtons) {
	allButtons.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			let arr = [];
			console.log(e.target.value);
			if (e.target.value.toLowerCase() == "all") {
				arr = cardObj;
			} else {
				arr = cardObj.filter((obj) =>
					obj.tech.includes(e.target.value.toLowerCase())
				);
			}
			allButtons.forEach((thisBtn) => {
				if (thisBtn != btn) thisBtn.classList.remove("fontColor");
				else thisBtn.classList.add("fontColor");
				// console.log(this)
			});
			console.log(btn.classList);
			projectsContainer.innerHTML = getProjects(arr).join("");
		});
	});
}
const navbar = document.getElementById("nav");
const toTopbtn = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
	const scrollHeight = window.pageYOffset;
	const navHeight = navbar.getBoundingClientRect().height;

	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-nav");
	} else {
		navbar.classList.remove("fixed-nav");
	}
	// console.log(toTopbtn);
	// console.log(scrollHeight);
	if (scrollHeight > 300) {
		toTopbtn.classList.add("show-link");
	} else {
		toTopbtn.classList.remove("show-link");
	}
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const id = e.currentTarget.getAttribute("href").slice(1);
		console.log("hi ho");
		const element = document.getElementById(id);
		const navHeight = navbar.getBoundingClientRect().height;
		// console.log(`element offset Top ${element.offsetTop}`);
		// console.log(`nav height ${navHeight}`);
		console.log(element);
		let position = element.offsetTop - navHeight;
		const fixedNav = navbar.classList.contains("fixed-nav");
		if (!fixedNav) {
			position = position - navHeight;
		}

		console.log(`position ${position}`);
		if (!position) position = 0;
		window.scrollTo({
			left: 0,
			top: position,
		});
		// linksContainer.style.height = 0;
	});
});

//music settings
const audio = document.getElementById("background-music");
const storedPosition = localStorage.getItem("audioPosition");
if (storedPosition) {
	audio.currentTime = parseFloat(storedPosition);
}

// Store the playback position when navigating away from the page
window.addEventListener("beforeunload", () => {
	localStorage.setItem("audioPosition", audio.currentTime);
});

// adding pause settings
const pauseButton = document.getElementById("pause-button");
// const playButton = document.getElementById("play-button");
let isPaused = false;

pauseButton.addEventListener("click", togglePause);
// playButton.addEventListener("click", togglePause);

function togglePause() {
	console.log(isPaused);
	if (isPaused) {
		audio.play();
		pauseButton.children[0].classList.add("fa-pause"); // Resume playback
		pauseButton.children[0].classList.remove("fa-play"); // Resume playback
		// pauseButton.textContent = "Pause";
	} else {
		audio.pause();
		pauseButton.children[0].classList.remove("fa-pause"); // Resume playback
		pauseButton.children[0].classList.add("fa-play"); // Pause playback
		// pauseButton.textContent = "Play";
	}
	console.log(pauseButton.children[0].classList);

	isPaused = !isPaused;
}
