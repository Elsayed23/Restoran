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
        toTop.style.right = "20px"
    } else {
        toTop.style.right = "-80px";
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




let home = document.querySelector(".int");

let about = document.querySelector(".about");
let services = document.querySelector(".services");
let menu = document.querySelector(".menu")
let footer = document.querySelector("footer");
let links = document.querySelectorAll("header .container .nav ul li a");



window.addEventListener("scroll", () => {
    if (window.scrollY >= home.offsetTop) {
        links.forEach((e) => {
            if (e.getAttribute("href") === "#") {
                links.forEach((ele) => {
                    ele.classList.remove("active")
                })
                e.classList.add("active")
            }
        })
    }
    if (window.scrollY >= about.offsetTop - 83) {
        links.forEach((e) => {
            if (e.getAttribute("href") === "#about") {
                links.forEach((ele) => {
                    ele.classList.remove("active")
                })
                e.classList.add("active")
            }
        })
    }

    if (window.scrollY >= services.offsetTop - 83) {
        links.forEach((e) => {
            if (e.getAttribute("href") === "#service") {
                links.forEach((ele) => {
                    ele.classList.remove("active")
                })
                e.classList.add("active")
            }
        })
    }

    if (window.scrollY >= menu.offsetTop - 83) {
        links.forEach((e) => {
            if (e.getAttribute("href") === "#menu") {
                links.forEach((ele) => {
                    ele.classList.remove("active")
                })
                e.classList.add("active")
            }
        })

    }
    if (window.scrollY >= footer.offsetTop - 670) {
        links.forEach((e) => {
            if (e.getAttribute("href") === "#contact") {
                links.forEach((ele) => {
                    ele.classList.remove("active")
                })
                e.classList.add("active")
            }
        })
    }
})
