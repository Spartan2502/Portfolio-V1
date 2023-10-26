const whatsapp = document.getElementById("whatsapp")
const sayHi = document.getElementById("hi")

// SAY HI ANI
setTimeout(() => {
    whatsapp.style.right = "0px"
    sayHi.style.animation = "sayHi 1s infinite"
}, 2000)


setTimeout(() => {
    sayHi.style.animation = "none"
}, 3000)

// NAV RESP
const nav = document.getElementById("nav")
const navBtn = document.getElementById("navBtn")

navBtn.addEventListener("click", () => {
    if (nav.classList.contains("nav")) {
        nav.classList.remove("nav");
        nav.classList.add("navMobile");
        navBtn.classList.remove("fa-bars");
        navBtn.classList.add("fa-xmark");
        whatsapp.style.display = "none"
        nav.style.animation = "none"
        document.body.style.overflowY = "hidden"
    } else {
        nav.classList.remove("navMobile");
        nav.classList.add("nav");
        navBtn.classList.remove("fa-xmark");
        navBtn.classList.add("fa-bars");
        whatsapp.style.display = "block"
        document.body.style.overflowY = "auto"
    }
});

const links = document.querySelectorAll(".link")

links.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.style.overflowY = "scroll"
        nav.classList.remove("navMobile")
        nav.classList.add("nav")
        navBtn.classList.remove("fa-xmark");
        navBtn.classList.add("fa-bars");
    })
})

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// codigo boton de dark light theme
var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementById("theme-container");
const themeIcon = document.getElementById("theme-icon");

const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg";

document.body.style = "background-color: var(--bs-dark);transition: 0.5s;";

container.addEventListener("click", setTheme);
themeIcon.src = moon;


function setTheme() {
    switch (theme) {
        case "dark":
            setLight();
            theme = "light";
            break;
        case "light":
            setDark();
            theme = "dark";
            break;
    }
}

function setLight() {
    var link = document.getElementById("themes");
    link.href = "lightmode.css";

    // root.style.setProperty(
    //     "--bs-dark",
    //     "#c3d1e4"
    // );
    container.classList.remove("shadow-dark");
    setTimeout(() => {
        container.classList.add("shadow-light");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = sun;
}

function setDark() {
    var link = document.getElementById("themes");
    link.href = "style.css";

    // root.style.setProperty("--bs-dark", "#212529");
    container.classList.remove("shadow-light");
    setTimeout(() => {
        container.classList.add("shadow-dark");
        themeIcon.classList.remove("change");
    }, 300);
    themeIcon.classList.add("change");
    themeIcon.src = moon;
}


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        document.querySelector('.overlay').style.display = card.classList.contains('expanded') ? 'flex' : 'none';

        const cardInfo = card.querySelector('.card-info');
        cardInfo.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    });
});


document.querySelector('.overlay').addEventListener('click', (event) => {
    if (event.target.classList.contains('overlay') && document.querySelector('.card.expanded')) {
        const card = document.querySelector('.card.expanded');
        card.classList.add('contracted');
        card.classList.remove('expanded');
        document.querySelector('.overlay').style.display = 'none';

        // Ocultar la información adicional
        const cardInfo = card.querySelector('.card-info');
        cardInfo.style.display = 'none';

        // Eliminar la clase contracted después de que la transición termine
        card.addEventListener('transitionend', () => {
            card.classList.remove('contracted');
        }, { once: true });
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('.card.expanded')) {
        const card = document.querySelector('.card.expanded');
        card.classList.add('contracted');
        card.classList.remove('expanded');
        document.querySelector('.overlay').style.display = 'none';

        // Ocultar la información adicional
        const cardInfo = card.querySelector('.card-info');
        cardInfo.style.display = 'none';

        // Eliminar la clase contracted después de que la transición termine
        card.addEventListener('transitionend', () => {
            card.classList.remove('contracted');
        }, { once: true });
    }
});
