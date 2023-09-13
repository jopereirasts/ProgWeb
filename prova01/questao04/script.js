const barra = document.getElementById("barra");

const verde = document.getElementById("verde");
const vermelho = document.getElementById("vermelho");
const azul = document.getElementById("azul");
const reset = document.getElementById("reset");

verde.addEventListener("click",function(){
    barra.style.backgroundColor = "green";
});

vermelho.addEventListener("click",function(){
    barra.style.backgroundColor = "red";
});

azul.addEventListener("click",function(){
    barra.style.backgroundColor = "blue";
});

reset.addEventListener("click",function(){
    barra.style.removeProperty('background');
});
