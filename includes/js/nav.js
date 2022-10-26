const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const nav_element = document.querySelectorAll(".nav-link");

console.log(nav_element)

const openNav = () => {
    burger.classList.toggle("open");

    const showAria = burger.getAttribute
    ("aria-expanded") === "true" ? "false" : "true";
    burger.setAttribute("aria-expanded", showAria)
    nav.classList.toggle("open")

    if (burger.classList.contains("open") === true) {
        let delay = 700
        nav_element.forEach(element => {
                element.style.transition = "opacity 0s ease-out";
                element.style.opacity = "0";
        });
        nav_element.forEach(element => {
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transition = "opacity 0.4s ease-out";
            }, delay.toString())
            delay += 100
        });
    }
}

burger.addEventListener("click", openNav)

new ResizeObserver(entries => {
    if(entries[0].contentRect.width > 832) {
        nav_element.forEach(element => {
            element.style.opacity = "1";
            element.style.transition = "opacity 0.4s ease-out";
        });
        nav.style.transition = "0s";
    } else if (entries[0].contentRect.width <= 832) {
        nav.style.transition = "0.5s";
    }
}).observe(document.body)


