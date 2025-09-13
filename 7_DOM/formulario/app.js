const formu = document.querySelector(".form");
const inputName = document.querySelector(".nam");
const listColors = document.querySelector("#cChoi");
const equipo = document.querySelector("team");

const userPage = document.querySelector(".userPage");
const imgTeam = document.querySelector(".img-team");
const txGlad = document.querySelector(".text-glad");
const txTeam = document.querySelector(".text-team");

const enviarData = (e) => {

    const equipo = document.querySelectorAll('input[name="equipo"]:checked')

    e.preventDefault()
        const userInfo ={
            nombre: inputName.value,
            color: listColors.value,
            equipo: equipo.value
        }

        console.log(userInfo)
        document.body.style.background = userInfo.color
        userPage.style.display = "block"
        formu.style.display = "none"

        console.log(userInfo)
        document.body.style.background = userInfo.color;
        document.userPage.style.display = "";
}

formu.addEventListener("submut",enviarData);