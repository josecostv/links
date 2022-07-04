

const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);
html.classList.add("dark");



themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (!checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
});
