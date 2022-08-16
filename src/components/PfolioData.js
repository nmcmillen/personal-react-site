import tictactoe from "./images/tic-tac-toe.png";
import weather from "./images/weather-app.png";
import todo from "./images/todo.png";
import ocular from "./images/ocular-shot.png";
import gusto from "./images/gusto-restaurant.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

const pfolioData = [
  {
    title: "Ocular",
    image: ocular,
    live: "https://ocularapp.herokuapp.com/",
    gh: "https://github.com/nmcmillen/ocular-frontend",
    description:
      "A simplified Instagram clone where users can create an account, edit their profile, create posts, like posts, and follow other users that curate their post feed.",
    stack: "React, Django, Python",
  },
  {
    title: "Gusto Restaurant",
    image: gusto,
    live: "https://nmcmillen.github.io/react-restaurant/",
    gh: "https://github.com/nmcmillen/react-restaurant",
    description:
      "Mock restaurant site with selectable menu items that pull data from a third-party API and displays the dish, origin, price, and a dish description.",
    stack: "Bootstrap, React, API Data",
  },
  {
    title: "TicTacToe",
    image: tictactoe,
    live: "https://nmcmillen.github.io/tictactoe/",
    gh: "https://github.com/nmcmillen/tictactoe",
    description:
      "A simple game of Tic Tac Toe using JavaScript to handle clicks of X and O. First to 3 in a row wins!",
    stack: "HTML, CSS, JavaScript",
  },
  {
    title: "Weather App",
    image: weather,
    live: "https://nmcmillen.github.io/weather-app/",
    gh: "https://github.com/nmcmillen/weather-app",
    description:
      "Using the OpenWeatherMap API, search for current weather in Kelvin, Fahrenheit, and Celsius of a given zip code within the United States.",
    stack: "HTML, CSS, JavaScript, API Data",
  },
  {
    title: "To-Do List",
    image: todo,
    live: "https://nmcmillen.github.io/to-do-list/",
    gh: "https://github.com/nmcmillen/to-do-list",
    description:
      "Jot down a To-do item that is saved within local storage so you can come back to it later. Items can be individually or grouped as complete, uncomplete, or filter between what has been done or needs to be done.",
    stack: "HTML, CSS, JavaScript/React",
  },
];

export default pfolioData;
