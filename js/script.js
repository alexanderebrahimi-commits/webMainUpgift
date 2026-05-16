document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector(".button");

  if (button) {
    button.addEventListener("click", () => {
      console.log("User clicked browse cars");
    });
  }

});