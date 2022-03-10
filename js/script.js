{
    const welcome = () => {
        console.log("Witam wszystkich developerów!");
    }

    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "Bright theme" : "Dark theme";
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    }

    init ();
}