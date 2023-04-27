let bars = document.querySelector(".hamburger svg")
let X_color = document.querySelector(".line")
let cenC = document.querySelector(".hamburger svg .C")
let line_top = document.querySelector(".line-top-bottom")
let Svg = document.querySelector(".hamburger input + svg")
let nav = document.querySelector(".nav");


bars.addEventListener("click", () => {
    nav.classList.toggle("Show")
    X_color.classList.toggle("X-color")
    Svg.classList.toggle("rotSVG")
    line_top.classList.toggle("line_T")
    cenC.classList.toggle("cen")
});


let toTop = document.querySelector(".to_top");


window.addEventListener("scroll", () => {
    if (this.scrollY >= 350) {
        toTop.style.opacity = "1";
    } else {
        toTop.style.opacity = "";
    }
})
toTop.addEventListener("click", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, 200)
});



let fixedH = document.querySelector("header");


window.onscroll = () => {
    if (this.scrollY >= 300) {
        fixedH.classList.add("fixedHeader");
    } else {
        fixedH.classList.remove("fixedHeader");
    }
};


let mealbtns = document.querySelectorAll(".title .mealsBtn .mealBtn");


mealbtns.forEach((ele) => {
    ele.addEventListener("click", () => {
        mealbtns.forEach((e) => {
            e.classList.remove("active");
        });
        ele.classList.add("active");
    });
});