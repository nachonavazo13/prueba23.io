let inputs = document.getElementsByClassName("formulario__input")
// Uso for para recorrer la cantidad de elementos que tiene la variable inputs
for (let i = 0 ; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add("fijar");
        } else {
            this.nextElementSibling.classList.remove("fijar");

        }
    });

}