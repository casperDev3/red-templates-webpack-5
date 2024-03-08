//! start point
document.addEventListener("DOMContentLoaded", () => {
  //! init
  const FORM = document.querySelector("#data");
  const FIRST_NAME = document.querySelector("#first_name");
  const AGE = document.querySelector("#age")
  //! actions
  FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    //! read data from fields
    const DATA = {
        first_name: FIRST_NAME.value,
        age: AGE.value
    }
    //! set to LS
    localStorage.setItem("data", JSON.stringify(DATA))
    //! navigate to about.html
    const PATH = document.querySelector("#data").getAttribute("data-href")
    window.open(PATH, "_self")
  });
});
