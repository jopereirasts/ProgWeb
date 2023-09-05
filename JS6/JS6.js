let maximo = 8;
let pontinhos = [];

document.addEventListener("mousemove",function(e){
    let ponto = document.createElement("div");
    document.body.appendChild(ponto);
    pontinhos.push(ponto);
});