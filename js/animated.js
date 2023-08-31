const cube = document.getElementById("animatedCube");
const optionsContainer = document.getElementById("options");
const cube2 = document.getElementById("animatedCube2");
const cube3 = document.getElementById("animatedCube3");
const cube4 = document.getElementById("animatedCube4");
let animationPaused = false;

cube.addEventListener("click", () => {
  console.log("Di clic en el cubo");
  if (!animationPaused) {
    console.log("Animación pausada");
    cube.style.animationPlayState = "paused";
    optionsContainer.style.display = "flex";
    optionsContainer.style.flexDirection = "column"
    animationPaused = true;
    setTimeout(() => {
      cube.style.animationPlayState = "running";
      optionsContainer.style.display = "none";
      animationPaused = false;
    }, 5000);
  }
});

/ Función para páginas */
cube2.addEventListener("click", () => {
  console.log("Di clic en la opción 1");
  window.location.href = "../pages/services.html";
});
cube3.addEventListener("click", () => {
  console.log("Di clic en la opción 2");
  window.location.href = "../pages/newsletter.html";
});
cube4.addEventListener("click", () => {
  console.log("Di clic en la opción 3");
  window.location.href = "../pages/contact.html";
});