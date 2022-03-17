{
    const welcome = () => {
        console.log("Witam wszystkich developerów!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const BackgroundName = document.querySelector(".js-BackgroundName");
        body.classList.toggle("body--dark");
        BackgroundName.innerText = body.classList.contains("body--dark") ? "Light background" : "Dark background";
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}