//first step, we need to attach event (submit) listener to the form to get user data

// attach event (click) listers to each "game box"

//next, initialize the game

//next, we need to check which gamemode we're playing

// we need to set win conditions

// we need to determine current player

// after each move, check win conditions and if not met, set other player as active

// human vs human, next implement easy ai, next impossible ai

const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  //prevent page refresh
  event.preventDefault();

  //initialize user form data
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  document.querySelector(".modal-wrapper").setAttribute("hidden", true);
  console.log(data);
});
