// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"
// Import modules

// Import utils
import { initialsBtn } from "./scripts/utils/personalData";

// Bisiness logic


document.addEventListener('DOMContentLoaded', () => {
  initialsBtn();
});