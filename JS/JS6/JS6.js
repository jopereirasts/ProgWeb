const maximo = 8;
const pontinhos = [];

document.addEventListener("mousemove", (e) => {
  if (pontinhos.length >= maximo) {
    const pontoRemovido = pontinhos.shift();
    pontoRemovido.remove();
  }

  const ponto = document.createElement("div");
  ponto.className = "ponto";
  document.body.appendChild(ponto);

  const tamanhoPonto = 20; // Tamanho do ponto
  ponto.style.width = `${tamanhoPonto}px`;
  ponto.style.height = `${tamanhoPonto}px`;
  ponto.style.left = `${e.clientX - tamanhoPonto / 2}px`;
  ponto.style.top = `${e.clientY - tamanhoPonto / 2}px`;

  pontinhos.push(ponto);
});
