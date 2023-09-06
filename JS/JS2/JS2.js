const opcoes = ["Papel", "Pedra", "Tesoura"];
let pontos = 0;

while (true) {
    console.log("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura");
    const jogada = parseInt(prompt("Escolha:"));
    console.log(`Você jogou ${opcoes[jogada - 1]}`);
    
    if (isNaN(jogada) || jogada < 1 || jogada > 3) {
        console.log("Escolha inválida. O jogo foi encerrado.");
        break;
    }
    
    const pc = Math.floor(Math.random() * 3) + 1;
    console.log(`O computador jogou ${opcoes[pc - 1]}`);
    
    if (jogada === pc) {
        console.log("A rodada empatou!");
    } else if ((jogada === 1 && pc === 2) || (jogada === 2 && pc === 3) || (jogada === 3 && pc === 1)) {
        console.log(`Você perdeu! Sua pontuação final foi de ${pontos}`);
        break;
    } else {
        console.log("Você ganhou!");
        pontos++;
    }
}