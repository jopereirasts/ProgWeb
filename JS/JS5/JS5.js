document.getElementById("botao").onclick = function (event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    let altura1 = parseInt(document.myForm.altura1.value);
    let altura2 = parseInt(document.myForm.altura2.value);
    let altura3 = parseInt(document.myForm.altura3.value);
    let altura4 = parseInt(document.myForm.altura4.value);
    let altura5 = parseInt(document.myForm.altura5.value);
    let largura = parseInt(document.myForm.largura.value);

    let barra1 = document.getElementById("barra1");
    let barra2 = document.getElementById("barra2");
    let barra3 = document.getElementById("barra3");
    let barra4 = document.getElementById("barra4");
    let barra5 = document.getElementById("barra5");

    barra1.style.setProperty("height", altura1 + "px");
    barra1.style.setProperty("width", largura + "px");
    barra2.style.setProperty("height", altura2 + "px");
    barra2.style.setProperty("width", largura + "px");
    barra3.style.setProperty("height", altura3 + "px");
    barra3.style.setProperty("width", largura + "px");
    barra4.style.setProperty("height", altura4 + "px");
    barra4.style.setProperty("width", largura + "px");
    barra5.style.setProperty("height", altura5 + "px");
    barra5.style.setProperty("width", largura + "px");
};