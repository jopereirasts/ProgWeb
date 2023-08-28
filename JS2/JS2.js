console.log("Escolha sua jogada: \n 1 - Papel \n 2 - Pedra \n 3 - Tesoura");
let pcOuJogada = 0;
//1 - empate
//2 - jogaodr ganhou
//3 - pc ganhou
let pontos = 0;
let jogada = parseInt(prompt("Escolha sua jogada "));
while(pcOuJogada!=3){
    let pc = Math.floor(Math.random() * (3 - 1) + 1);
    switch(pc){
        case 1:
            console.log("O computador jogou Papel");
            if(jogada==1){
                pcOuJogada = 1;
                console.log("A rodada empatou!");
            }else if(jogada == 2){
                console.log(`Você perdeu! A sua pontuação foi de ${pontos}`);
                pcOuJogada = 3;
            }else{
                pcOuJogada = 2;
                console.log("Você ganhou!");
                pontos = pontos +1;
            }
            break;
        case 2:
            console.log("O computador jogou Pedra");
            if(jogada==2){
                pcOuJogada = 1;
                console.log("A rodada empatou!");
            }else if(jogada == 3){
                console.log(`Você perdeu! A sua pontuação foi de ${pontos}`);
                pcOuJogada = 3;
            }else{
                pcOuJogada = 2;
                console.log("Você ganhou!");
                pontos = pontos +1;
            }
            break;
        case 3:
            console.log("O computador jogou Tesoura");
            if(jogada==3){
                pcOuJogada = 1;
                console.log("A rodada empatou!");
            }else if(jogada == 1){
                console.log(`Você perdeu! A sua pontuação foi de ${pontos}`);
                pcOuJogada = 3;
            }else{
                pcOuJogada = 2;
                console.log("Você ganhou!");
                pontos = pontos +1;
            }
            break;
    }
    console.log("Escolha sua jogada: \n 1 - Papel \n 2 - Pedra \n 3 - Tesoura");
    jogada = parseInt(prompt("Escolha sua jogada "));
}
