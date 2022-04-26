const menu = document.querySelector(".mobileNav")
const ul = document.querySelector(".desktopNav")
const a = document.querySelectorAll(".links")

menu.addEventListener("click", function() {
  ul.classList.toggle("click")
});

a.forEach(link => {
  link.addEventListener("click", function handleClick(event) {
    ul.classList.toggle("click")
  })
})