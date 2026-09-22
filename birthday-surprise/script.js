/* ================= PAGE 1 → PAGE 2 ================= */

function goToPage2() {

    document.getElementById("page1")
        .classList.remove("active");

    document.getElementById("page2")
        .classList.add("active");
}


/* ================= NO BUTTON ================= */

function moveNoButton() {

    const button =
        document.getElementById("noButton");

    const maxX =
        window.innerWidth -
        button.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        button.offsetHeight -
        20;

    const randomX =
        Math.max(10, Math.random() * maxX);

    const randomY =
        Math.max(10, Math.random() * maxY);

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}


/* ================= BALLOONS ================= */

let popped = 0;

function popBalloon(number) {

    const balloon =
        document.querySelector(".balloon" + number);

    if (!balloon) return;

    if (balloon.classList.contains("pop")) {
        return;
    }

    balloon.classList.add("pop");

    popped++;


    if (number === 1) {
        document.getElementById("word1").innerText = "YOU";
    }

    if (number === 2) {
        document.getElementById("word2").innerText = "ARE";
    }

    if (number === 3) {
        document.getElementById("word3").innerText = "SO";
    }

    if (number === 4) {
        document.getElementById("word4").innerText = "SPECIAL";
    }


    if (popped === 4) {

        setTimeout(function () {

            document.getElementById("specialMessage")
                .innerText =
                "YOU ARE SO SPECIAL 💗";

            document.getElementById("continueButton")
                .style.display =
                "inline-block";

        }, 500);
    }
}


/* ================= PAGE 2 → PAGE 3 ================= */

function goToPage3() {

    document.getElementById("page2")
        .classList.remove("active");

    document.getElementById("page3")
        .classList.add("active");
}


/* ================= BLOW CANDLE ================= */

function blowCandle() {

    const flame =
        document.getElementById("flame");

    const page3 =
        document.getElementById("page3");

    if (flame.style.display === "none") {
        return;
    }

    flame.style.display = "none";

    page3.classList.add("wish-mode");

    document.getElementById("wishHeading")
        .innerText =
        "Close your eyes and make a wish ✨";

    document.getElementById("wishInstruction")
        .innerText =
        "Your wish is between you and the universe 💗";
}


/* ================= PAGE 3 → PAGE 4 ================= */

function goToPage4() {

    document.getElementById("page3")
        .classList.remove("active");

    document.getElementById("page4")
        .classList.add("active");
}


/* ================= PAGE 4 → PAGE 5 ================= */

function goToPage5() {

    document.getElementById("page4")
        .classList.remove("active");

    document.getElementById("page5")
        .classList.add("active");
}


/* ================= LETTER → PAGE 6 ================= */

function openLetter() {

    const letter =
        document.querySelector(".big-letter");

    letter.classList.add("letter-opening");

    setTimeout(function () {

        document.getElementById("page5")
            .classList.remove("active");

        document.getElementById("page6")
            .classList.add("active");

    }, 700);
}