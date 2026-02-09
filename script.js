document.addEventListener("keydown", (e) => {
  const backsplashSafeKey = e.key.replace("\\", "\\\\")
  const key = document.querySelector(`.key[data-key="${backsplashSafeKey}"]`);
  key?.classList.add("pressed");
  document.getElementById("inf").innerHTML =
    `<div>key: ${e.key}</div>
     <div>keyCode: ${e.keyCode}</div>`
});

// Мне кажется это не нужно?
// Под вопросом
// document.addEventListener("keyup", (e) => {
//   const key = document.querySelector(`.key[data-key="${e.key}"]`);
//   key?.classList.remove("pressed");
// });

const handleRefreshButton = document.getElementById("refresh");

handleRefreshButton.addEventListener("click", () => {
  const keys = document.querySelectorAll(".key");
  keys.forEach(el => el.classList.remove("pressed"));
});
