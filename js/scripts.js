// Seleção
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Função
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        })

        btn.querySelector(".color").classList.add("selected");

        const button = btn;

        const id = button.getAttribute("id");
        
        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});