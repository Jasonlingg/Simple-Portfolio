// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Jason",
  lastName: "Ling",
  message: "I'm a Systems Design Engineer at the University of Waterloo",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jason-lingg/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("./University-Waterloo-logo.png"),
  imageSize: 375,
  message:
    "Hello! I am in my first year studying Systems Design Engineering at the University of Waterloo, with a HUGE passion for data and software. I'm very multidisciplinary; I love problem-solving and solutioning. Aside from tech, I enjoy sports and fitness, love meeting new people, and I am extremely open-minded. Feel free to connect with me on linkedIn, or send me an email!",
  resume: "",
};

const repos = {
  show: true,
  heading: "Recent Projects on Github",
  gitHubUsername: "jasonlingg", 
  reposLength: 10,
  specificRepos: [],
};
// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact me",
  message:
    "Currently looking for 2023 Fall Co-op Opportunities! Feel free to contact me at: ",
  email: "jc2ling@uwaterloo.ca",
};

export { navBar, mainBody, about, repos, getInTouch };
