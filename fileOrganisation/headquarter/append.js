import fs from "fs/promises"

const basepath = "/home/sanu/Desktop/testing/test"
const files = await fs.readdir(basepath)

// credit: chatGpt for generating this array 
const sigmaWebDevCourse = [
  "Introduction | Sigma Web Development Course - Tutorial #1",
  "Overview of Web Development | Sigma Web Development Course - Tutorial #2",
  "HTML Basics | Sigma Web Development Course - Tutorial #3",
  "HTML5 Semantic Elements | Sigma Web Development Course - Tutorial #4",
  "HTML Forms | Sigma Web Development Course - Tutorial #5",
  "HTML Media Elements | Sigma Web Development Course - Tutorial #6",
  "HTML Project - A Basic Website | Sigma Web Development Course - Tutorial #7",
  "Introduction to CSS | Sigma Web Development Course - Tutorial #8",
  "CSS Selectors | Sigma Web Development Course - Tutorial #9",
  "CSS Colors | Sigma Web Development Course - Tutorial #10",
  "CSS Backgrounds | Sigma Web Development Course - Tutorial #11",
  "CSS Box Model | Sigma Web Development Course - Tutorial #12",
  "CSS Display & Visibility | Sigma Web Development Course - Tutorial #13",
  "CSS Positioning | Sigma Web Development Course - Tutorial #14",
  "CSS Units - em, rem, vw, vh, and more | Sigma Web Development Course - Tutorial #15",
  "CSS Flexbox | Sigma Web Development Course - Tutorial #16",
  "CSS Grid | Sigma Web Development Course - Tutorial #17",
  "CSS Media Queries | Sigma Web Development Course - Tutorial #18",
  "CSS Project - Responsive Portfolio Website | Sigma Web Development Course - Tutorial #19",
  "Introduction to Bootstrap | Sigma Web Development Course - Tutorial #20",
  "Bootstrap Grid System | Sigma Web Development Course - Tutorial #21",
  "Bootstrap Components | Sigma Web Development Course - Tutorial #22",
  "Bootstrap Project - A Website Using Bootstrap | Sigma Web Development Course - Tutorial #23",
  "Introduction to JavaScript | Sigma Web Development Course - Tutorial #24",
  "JavaScript Variables and Data Types | Sigma Web Development Course - Tutorial #25",
  "JavaScript Operators | Sigma Web Development Course - Tutorial #26",
  "JavaScript Conditionals | Sigma Web Development Course - Tutorial #27",
  "JavaScript Loops | Sigma Web Development Course - Tutorial #28",
  "JavaScript Functions | Sigma Web Development Course - Tutorial #29",
  "JavaScript Scope | Sigma Web Development Course - Tutorial #30",
  "JavaScript Events | Sigma Web Development Course - Tutorial #31",
  "JavaScript Arrays | Sigma Web Development Course - Tutorial #32",
  "JavaScript Objects | Sigma Web Development Course - Tutorial #33",
  "JavaScript JSON | Sigma Web Development Course - Tutorial #34",
  "JavaScript DOM Manipulation | Sigma Web Development Course - Tutorial #35",
  "JavaScript Project - A Simple Calculator | Sigma Web Development Course - Tutorial #36",
  "Introduction to jQuery | Sigma Web Development Course - Tutorial #37",
  "jQuery Selectors | Sigma Web Development Course - Tutorial #38",
  "jQuery Events | Sigma Web Development Course - Tutorial #39",
  "jQuery Effects and Animations | Sigma Web Development Course - Tutorial #40",
  "Introduction to Git & GitHub | Sigma Web Development Course - Tutorial #41",
  "Git Basics | Sigma Web Development Course - Tutorial #42",
  "GitHub Basics | Sigma Web Development Course - Tutorial #43",
  "GitHub Project - A Simple Repository | Sigma Web Development Course - Tutorial #44",
  "CSS Transitions | Sigma Web Development Course - Tutorial #45",
  "CSS Animations | Sigma Web Development Course - Tutorial #46",
  "Exercise 7 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #47",
  "Exercise 8 - Bounce Animation | Sigma Web Development Course - Tutorial #48",
  "CSS Object-fit and Object-cover | Sigma Web Development Course - Tutorial #49",
  "CSS Filters | Sigma Web Development Course - Tutorial #50",
  "Exercise 8: Solution & Shoutouts | Sigma Web Development Course - Tutorial #51",
  "Figma Basics in One Video | Sigma Web Development Course - Tutorial #52",
  "Netflix Clone Using HTML & CSS | Sigma Web Development Course - Tutorial #53",
  "Introduction to JavaScript & Installing Node.js | Sigma Web Development Course - Tutorial #54",
  "JavaScript Variables, Data Types & Objects | Sigma Web Development Course - Tutorial #55",
  "JavaScript Conditionals: if, else if, else ladder | Sigma Web Development Course - Tutorial #56",
  "JavaScript Loops | Sigma Web Development Course - Tutorial #57",
  "JavaScript Functions | Sigma Web Development Course - Tutorial #58",
  "Exercise 9 - Faulty Calculator | Sigma Web Development Course - Tutorial #59",
  "JavaScript Strings | Sigma Web Development Course - Tutorial #60",
  "JavaScript Exercise 9 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #61",
  "JavaScript Exercise 10 - Business Name Generator | Sigma Web Development Course - Tutorial #62",
  "JavaScript Arrays | Sigma Web Development Course - Tutorial #63",
  "JavaScript Exercise 10 - Solution | Sigma Web Development Course - Tutorial #64",
  "JavaScript Exercise 11 - Calculate the Factorial | Sigma Web Development Course - Tutorial #65",
  "Document Object Model in JavaScript | Sigma Web Development Course - Tutorial #66",
  "JavaScript DOM - Children, Parent & Sibling Nodes | Sigma Web Development Course - Tutorial #67",
  "JavaScript - Selecting by Ids, Classes, and More | Sigma Web Development Course - Tutorial #68",
  "JavaScript Exercise 11 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #69",
  "JavaScript Exercise 12 - Color the Boxes | Sigma Web Development Course - Tutorial #70",
  "Inserting and Removing Elements using JavaScript | Sigma Web Development Course - Tutorial #71",
  "JavaScript Exercise 12 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #72",
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  "Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74",
  "JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75",
  "Async\Await & Fetch API in JavaScript with Examples | Sigma Web Development Course - Tutorial #76",
  "JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77",
  "JavaScript Exercise 14 - Hacker's Terminal | Sigma Web Development Course - Tutorial #78",
  "JavaScript try catch & Error Handling | Sigma Web Development Course - Tutorial #79",
  "Classes & Objects - Object Oriented Programming in JS | Sigma Web Development Course - Tutorial #80",
  "JavaScript Exercise 14 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #81",
  "Advanced JavaScript | Sigma Web Development Course - Tutorial #82",
  "JavaScript Interview Questions | Sigma Web Development Course - Tutorial #83",
  "Spotify Clone using HTML, CSS & JavaScript | Sigma Web Development Course - Tutorial #84",
  "Backend, Node.js & npm | Sigma Web Development Course - Tutorial #85",
  "CommonJs Vs EcmaScript Modules | Sigma Web Development Course - Tutorial #86",
  "Working with Files: fs and path Modules | Sigma Web Development Course - Tutorial #87",
  "Introduction to Express Js | Sigma Web Development Course - Tutorial #88",
  "Response, Request and Routers in Express | Sigma Web Development Course - Tutorial #89",
  "Middlewares in Express Js | Sigma Web Development Course - Tutorial #90",
  "Exercise 15 - Clear the Clutter | Sigma Web Development Course - Tutorial #91",
  "ejs Template Engine in Express | Sigma Web Development Course - Tutorial #92",
  "Exercise 15 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #93",
  "Installing MongoDB & MongoDB Compass | Sigma Web Development Course - Tutorial #94",
  "CRUD Operations in MongoDB | Sigma Web Development Course - Tutorial #95",
  "Installing Mongoose & Using it with Express | Sigma Web Development Course - Tutorial #96",
  "Exercise 16 - Dummy Data Generator | Sigma Web Development Course - Tutorial #97",
  "Tailwind CSS in one Video | Sigma Web Development Course - Tutorial #98",
  "Exercise 16 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #99",
  "Exercise 17 - Design This Layout | Sigma Web Development Course - Tutorial #100",
  "X.com (Twitter) Clone using Tailwind CSS | Sigma Web Development Course - Tutorial #101",
  "Exercise 17 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #102",
  "What is Hosting? Where to Host? Which Hosting? | Sigma Web Development Course - Tutorial #103",
  "Hosting an Express App on Ubuntu VPS using Hostinger | Sigma Web Development Course - Tutorial #104",
  "Introduction to React & Why use React? | Sigma Web Development Course - Tutorial #105",
  "Components, Props and JSX in React | Sigma Web Development Course - Tutorial #106",
  "Hooks & State in React | Sigma Web Development Course - Tutorial #107",
  "The useEffect Hook in React | Sigma Web Development Course - Tutorial #108",
  "The useRef Hook in React | Sigma Web Development Course - Tutorial #109",
  "Conditional Rendering & Rendering Lists in React | Sigma Web Development Course - Tutorial #110",
  "Exercise 18 - Display the Cards | Sigma Web Development Course - Tutorial #111",
  "Handling Events in React | Sigma Web Development Course - Tutorial #112",
  "Exercise 18 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #113",
  "TodoList App using React, Tailwind & React Icons | Sigma Web Development Course - Tutorial #114",
  "React Router: Routing in React | Sigma Web Development Course - Tutorial #115",
  "The useContext hook in React | Sigma Web Development Course - Tutorial #116",
  "The useMemo hook in React | Sigma Web Development Course - Tutorial #117",
  "The useCallback hook in React | Sigma Web Development Course - Tutorial #118",
  "Handling Forms + Connecting React to Express Backend | Sigma Web Development Course - Tutorial #119",
  "Learn Redux in One video | Sigma Web Development Course - Tutorial #120",
  "Introduction to Next.js & File based routing | Sigma Web Development Course - Tutorial #121",
  "Server Components in Next.js | Sigma Web Development Course - Tutorial #122",
  "Script, Link & Image components in Next.js | Sigma Web Development Course - Tutorial #123",
  "Creating APIs in Next.js | Sigma Web Development Course - Tutorial #124",
  "Server Actions in Next.js | Sigma Web Development Course - Tutorial #125",
  "Middleware in Next.js | Sigma Web Development Course - Tutorial #126",
  "Auth.js - Authentication in Next.js | Sigma Web Development Course - Tutorial #127",
  "Dynamic Routes in Next.js | Sigma Web Development Course - Tutorial #128",
  "Layouts in Next.js | Sigma Web Development Course - Tutorial #129",
  "React Project: Password Manager using React, Tailwind, MongoDB & Express | Sigma Web Development Course - Tutorial #130",
  "Project GetMeAChai - Patreon Clone in Next.js | Sigma Web Development Course - Tutorial #131"
];


for (const elements of sigmaWebDevCourse) {
  await fs.writeFile(elements + "." + "txt", "writeFile")
}
