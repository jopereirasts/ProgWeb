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



document.getElementById("botao").onclick = function(){
    barra1.style.setProperty("heigt",altura1);
    barra1.style.setProperty("width",largura);
    barra2.style.setProperty("heigt",altura2);
    barra2.style.setProperty("width",largura);
    barra3.style.setProperty("heigt",altura3);
    barra3.style.setProperty("width",largura);
    barra4.style.setProperty("heigt",altura4);
    barra4.style.setProperty("width",largura);
    barra5.style.setProperty("heigt",altura5);
    barra5.style.setProperty("width",largura);

}