(function () {

    const FPS = 400;
    const HEIGHT = 300;
    const WIDTH = 1024;
    const PROB_NUVEM = 1;
  
    let gameLoop;
    let deserto;
    let dino;
    let pause = false;
    let nuvens = [];
    let obstaculos = [];
    let frame = 0;
    let botaoAgachado = false;
    let Manha = true;
    let pontuacao = 0;
    let velocidade = 1;
  
    function init() {
      deserto = new Deserto();
      dino = new Dino();
    
      setInterval(ManhaNoite, 60000);

      window.addEventListener("keydown", startGameOnSpace);
      window.addEventListener("keydown", pauseGameOnP);
    
    }

    function aumentarVelocidade() {
      velocidade += 1;
    }
  
    setTimeout(aumentarVelocidade, 60000);

    function ManhaNoite() {
      Manha = !Manha;
      const fundoDeserto = document.querySelector('.deserto');
      fundoDeserto.style.backgroundColor = Manha ? "white" : "darkslategrey";
    }
    
    function startGameOnSpace(e) {
      if (e.code === "Space") {
        window.removeEventListener("keydown", startGameOnSpace);
    
        gameLoop = setInterval(run, 1000 / FPS);
      }
    }

    function pauseGameOnP(e) {
      if (e.code === "KeyP") {
        if (typeof gameLoop !== "undefined") {
          clearInterval(gameLoop);
          gameLoop = undefined;
          pause = true;
        } else {
          gameLoop = setInterval(run, 1000 / FPS);
          pause = false;
        }
      }
    }
  
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        if (dino.status === 0) dino.status = 1;
      }
    })

    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown" && !pause) {
        botaoAgachado = true;
        dino.element.style.width = '85px';
        dino.element.style.height = '40.5px';
        dino.element.style.backgroundPositionX = dino.element.style.backgroundPositionX === dino.backgroundPositionsX.agachando1 ? dino.backgroundPositionsX.agachando2 : dino.backgroundPositionsX.agachando1;
        dino.element.style.backgroundPositionY = "-30px";
        dino.element.style.bottom = `${parseInt(dino.element.style.bottom) - 1}px`;
        if (parseInt(dino.element.style.bottom) <= dino.altumaMinima) dino.element.style.bottom = '2px';
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code === "ArrowDown") {
        botaoAgachado = false; 
      }
    });
    
  
    class Deserto {
      constructor() {
        this.element = document.createElement("div")
        this.element.className = "deserto";
        this.element.style.width = `${WIDTH}px`;
        this.element.style.height = `${HEIGHT}px`;
        document.getElementById("game").appendChild(this.element)
  
        this.chao = document.createElement("div")
        this.chao.className = "chao"
        this.chao.style.backgroundPositionX = 0;
        this.element.appendChild(this.chao)
      }
      mover() {
        this.chao.style.backgroundPositionX = `${parseInt(this.chao.style.backgroundPositionX) - velocidade}px`
      }
    }

  
    class Dino {
      #status
      #colidiu
      constructor() {
        this.backgroundPositionsX = {
          correndo1: "-1391px",
          correndo2: "-1457px",
          pulando: "-1259px",
          agachando1: "-1654px",
          agachando2: "-1742px",
          colisao: "-1524px"
        };
        this.#status = 0; // 0-correndo, 1-subindo, 2-descendo, 3-agachado
        this.altumaMinima = 2;
        this.altumaMaxima = 120;
        this.element = document.createElement("div")
        this.element.className = "dino";
        this.element.style.backgroundPositionX = this.backgroundPositionsX.correndo1;
        this.element.style.backgroundPositionY = "-2px";
        this.element.style.bottom = `${this.altumaMinima}px`
        this.#colidiu = false;
        deserto.element.appendChild(this.element)
      }
      /**
       * @param {number} value
       */
      set status(value) {
        if (value >= 0 && value <= 2) this.#status = value;
      }
      get status() {
        return this.#status;
      }
      set colidiu(value) {
        this.#colidiu = value;
      }
      get colidiu() {
        return this.#colidiu;
      }
      correr() {
        if (this.#status === 0 && frame % 20 === 0 && !botaoAgachado) {
          this.element.style.width = `66px`;
          this.element.style.height = `68px`;
          this.element.style.backgroundPositionY = "-2px";
          this.element.style.backgroundPositionX = this.element.style.backgroundPositionX === this.backgroundPositionsX.correndo1 ? this.backgroundPositionsX.correndo2 : this.backgroundPositionsX.correndo1;
        }
        else if (this.#status === 1) {
          this.element.style.width = `66px`;
          this.element.style.height = `68px`;
          this.element.style.backgroundPositionY = "-2px";
          this.element.style.backgroundPositionX = this.backgroundPositionsX.pulando;
          this.element.style.bottom = `${parseInt(this.element.style.bottom) + 1}px`;
          if (parseInt(this.element.style.bottom) >= this.altumaMaxima) this.status = 2;
        }
        else if (this.#status === 2) {
          this.element.style.width = `66px`;
          this.element.style.height = `68px`;
          this.element.style.backgroundPositionY = "-2px";
          this.element.style.backgroundPositionX = this.backgroundPositionsX.pulando;
          this.element.style.bottom = `${parseInt(this.element.style.bottom) - 1}px`;
          if (parseInt(this.element.style.bottom) <= this.altumaMinima) this.status = 0;
        }
      }
    }
  
    class Nuvem {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "nuvem";
        this.element.style.right = 0;
        this.element.style.top = `${parseInt(Math.random() * 200)}px`
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + 1}px`;
      }
    }

    class Cacto {
      constructor() {
        const tiposCacto = ["-334px", "-386px", "-437px"];
        const tipo = Math.floor(Math.random() * tiposCacto.length);
        this.element = document.createElement("div");
        this.element.className = "cacto";
        this.element.style.right = 0;
        this.element.style.backgroundPositionY = "-2px";
        this.element.style.backgroundPositionX = tiposCacto[tipo];
        this.element.style.bottom = "5px";
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + velocidade}px`;
      }
    }

    class CactoMaior {
      constructor() {
        const tiposCactoMaior = ["-489px", "-527px", "-564px", "-602px", "-678px"];
        const tipo = Math.floor(Math.random() * tiposCactoMaior.length);
        this.element = document.createElement("div");
        this.element.className = "cactomaior";
        this.element.style.right = 0;
        this.element.style.backgroundPositionY = "-2px";
        this.element.style.backgroundPositionX = tiposCactoMaior[tipo];
        this.element.style.bottom = "2px";
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + velocidade}px`;
      }
    }

    class Passaro {
      constructor() {
        this.backgroundPositionsX = {
          cima: "-265px",
          baixo: "-195px"
        };
        const alturaPassaro = ["2px", "43px", "75px"];
        const altura = Math.floor(Math.random() * alturaPassaro.length);
        this.element = document.createElement("div");
        this.element.style.backgroundPositionY = "-2px";
        this.element.className = "passaro";
        this.element.style.right = 0;
        this.element.style.bottom = alturaPassaro[altura]; 
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + velocidade}px`;
        this.element.style.backgroundPositionX = this.element.style.backgroundPositionX === this.backgroundPositionsX.cima ? this.backgroundPositionsX.baixo : this.backgroundPositionsX.cima;
        
      }
    }

    function RetornaObstaculo() {
      const randomValue = Math.random();
      if (randomValue < 0.33) {
        return Cacto;
      } else if (randomValue < 0.66 && randomValue >= 0.33) {
        return CactoMaior;
      } else {
        return Passaro;
      }
    }

    class GameOver {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "gameover";
        this.element.style.backgroundPositionY = "-20px";
        this.element.style.backgroundPositionX = "-968px"
        this.element.style.position = "absolute";
        this.element.style.top = "50%";
        this.element.style.left = "50%";
        this.element.style.transform = "translate(-50%, -50%)";
        deserto.element.appendChild(this.element);

        this.pontuacaoElement = document.createElement("div");
        this.pontuacaoElement.className = "pontuacao";
        this.pontuacaoElement.style.position = "absolute";
        this.pontuacaoElement.style.top = "10px";
        this.pontuacaoElement.style.left = "50%";
        this.pontuacaoElement.style.transform = "translate(-50%, 0)";
        this.pontuacaoElement.innerText = `Pontuação: ${pontuacao}`;
        this.pontuacaoElement.style.fontFamily = "fantasy";
        this.pontuacaoElement.style.zIndex = "4";
        this.pontuacaoElement.style.textShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
        this.pontuacaoElement.style.fontSize = "20px";
        deserto.element.appendChild(this.pontuacaoElement);
      }
    }
    
    class Restart {
      constructor() {
        this.element = document.createElement("div");
        this.element.className = "restart";
        this.element.style.backgroundPositionY = "0px";
        this.element.style.backgroundPositionX = "0px"
        this.element.style.position = "absolute";
        this.element.style.top = "60%"; 
        this.element.style.left = "50%";
        this.element.style.transform = "translate(-50%, -50%)";
        this.element.style.marginTop = "20px";
        deserto.element.appendChild(this.element);
      }
    }

    
    function exibirGameOver() {
      const gameOver = new GameOver();
      const botaoRestart = new Restart();
    
      deserto.element.appendChild(gameOver.element);
      deserto.element.appendChild(botaoRestart.element);

      gameOver.pontuacaoElement.innerText = `Pontuação: ${pontuacao}`;

      botaoRestart.element.addEventListener("click", () => {
        location.reload();
      });
    }

    function atualizarPontuacao() {
      const pontuacaoElement = document.getElementById("pontuacao"); 
      if (pontuacaoElement) {
        pontuacaoElement.innerText = `${pontuacao}`;
      } else {
        const scoreAtual = document.createElement("div");
        scoreAtual.id = "pontuacao";
        scoreAtual.innerText = `${pontuacao}`;
        scoreAtual.style.position = "absolute";
        scoreAtual.style.top = "10px"; 
        scoreAtual.style.left = "950px";
        scoreAtual.style.fontFamily = "fantasy";
        scoreAtual.style.zIndex = "4";
        scoreAtual.style.textShadow = "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
        scoreAtual.style.fontSize = "20px";
        deserto.element.appendChild(scoreAtual);
      }
    }

    function verificaColisao() {
      for (let i = 0; i < obstaculos.length; i++) {
        const obstaculo = obstaculos[i];
        const dinossauroRect = dino.element.getBoundingClientRect();
        const obstaculoRect = obstaculo.element.getBoundingClientRect();
        
        const margem = 10;
    
        if (
          dinossauroRect.right - margem > obstaculoRect.left + margem &&
          dinossauroRect.left + margem < obstaculoRect.right - margem &&
          dinossauroRect.bottom - margem > obstaculoRect.top + margem &&
          dinossauroRect.top + margem < obstaculoRect.bottom - margem
        ) {
          dino.colidiu = true; 
          dino.element.style.backgroundPositionX = dino.backgroundPositionsX.colisao;
          exibirGameOver();
        
          clearInterval(gameLoop);
        }
      }
    }
  
    function run() {
      frame = frame + 1
      if (frame === FPS) frame = 0;
      deserto.mover()
      dino.correr()
      if (Math.random() * 100 <= PROB_NUVEM) nuvens.push(new Nuvem());
      if (frame % 2 === 0) nuvens.forEach(nuvem => {
        nuvem.mover()
        if (parseInt(nuvem.element.style.right) >= WIDTH) {
          nuvens.shift();
          nuvem.element.remove();
        }
      });

      if (frame % 30 === 0 && !dino.colidiu) {
        pontuacao += 1;
        atualizarPontuacao();
      }

      if (frame % 1000 === 0) {
        const obstaculo = RetornaObstaculo();
        obstaculos.push(new obstaculo());
      }
      obstaculos.forEach(obstaculo => {
        obstaculo.mover();
        
        if (parseInt(obstaculo.element.style.right) >= WIDTH) {
          obstaculos.shift();
          obstaculo.element.remove();
        }
      });
      verificaColisao();
    }
    init()
  })()