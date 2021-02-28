let lightOn = false
document.getElementById("light").onclick = function () {
    if (lightOn) {
        lightOn = !lightOn
        let data = document.getElementsByClassName("lightmode")
        for (let i = 0; i < data.length; i++) {
            data[i].classList.add("darkmode")
        }
        let data2 = document.getElementsByClassName("lightmode_pure")
        for (let i = 0; i < data2.length; i++) {
            data2[i].classList.add("darkmode_pure")
        }
        let data3 = document.getElementsByClassName("ftco-navbar-light")
        for (let i = 0; i < data3.length; i++) {
            data3[i].classList.add("ftco-navbar-dark")
            data3[i].classList.remove("ftco-navbar-light")
        }
    } else {
        lightOn = !lightOn
        let data = document.getElementsByClassName("lightmode")
        for (let i = 0; i < data.length; i++) {
            data[i].classList.remove("darkmode")
        }
        let data2 = document.getElementsByClassName("lightmode_pure")
        for (let i = 0; i < data2.length; i++) {
            data2[i].classList.remove("darkmode_pure")
        }
        let data3 = document.getElementsByClassName("ftco-navbar-dark")
        for (let i = 0; i < data3.length; i++) {
            data3[i].classList.add("ftco-navbar-light")
            data3[i].classList.remove("ftco-navbar-dark")
        }
    }
}
window.onload = function () {
    document.getElementById('light').click();
}