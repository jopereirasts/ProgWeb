function calcula() {
    let raio = parseFloat(document.myForm.raio.value); // Parse the input value as a number

    let area = Math.PI * (raio * raio);
    let circ = 2 * Math.PI * raio;

    document.myForm.area.value = area.toFixed(2);
    document.myForm.circ.value = circ.toFixed(2);
}

document.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Impedir o envio do formulário
    calcula(); // Chamar a função calculate
});