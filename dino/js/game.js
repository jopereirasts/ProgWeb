(function () {

    const FPS = 300;
    const HEIGHT = 300;
    const WIDTH = 1024;
    const PROB_NUVEM = 1;
  
    let gameLoop;
    let deserto;
    let dino;
    let pause = false;
    let nuvens = [];
    let cactos = [];
    let frame = 0;
    let botaoAgachado = false;
    let Manha = true;
  
    function init() {
      deserto = new Deserto();
      dino = new Dino();
    
      setInterval(ManhaNoite, 60000);

      window.addEventListener("keydown", startGameOnSpace);
      window.addEventListener("keydown", pauseGameOnP);
    
    }

    function ManhaNoite() {
      Manha = !Manha;
      const quadradoJogo = document.querySelector('.deserto');
      quadradoJogo.style.backgroundColor = Manha ? "white" : "darkslategrey";
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
        dino.element.style.width = '84px';
        dino.element.style.height = '40px';
        dino.element.style.backgroundPositionX = dino.element.style.backgroundPositionX === dino.backgroundPositionsX.agachando1 ? dino.backgroundPositionsX.agachando2 : dino.backgroundPositionsX.agachando1;
        dino.element.style.backgroundPositionY = "-28px";
        dino.element.style.bottom = `${parseInt(dino.element.style.bottom) - 1}px`;
        if (parseInt(dino.element.style.bottom) <= dino.altumaMinima) dino.element.style.bottom = '2px';
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.code === "ArrowDown") {
        botaoAgachado = false; 
        console.log("soltou");
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
        this.chao.style.backgroundPositionX = `${parseInt(this.chao.style.backgroundPositionX) - 1}px`
      }
    }

  
    class Dino {
      #status
      constructor() {
        this.backgroundPositionsX = {
          correndo1: "-1391px",
          correndo2: "-1457px",
          pulando: "-1259px",
          agachando1: "-1654px",
          agachando2: "-1742px"
        }
        this.#status = 0; // 0-correndo, 1-subindo, 2-descendo, 3-agachado
        this.altumaMinima = 2;
        this.altumaMaxima = 100;
        this.element = document.createElement("div")
        this.element.className = "dino";
        this.element.style.backgroundPositionX = this.backgroundPositionsX.correndo1;
        this.element.style.backgroundPositionY = "-2px";
        this.element.style.bottom = `${this.altumaMinima}px`
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
        this.element = document.createElement("div");
        this.element.className = "cacto";
        this.element.style.right = 0;
        this.element.style.bottom = "10px";
        deserto.element.appendChild(this.element);
      }
      mover() {
        this.element.style.right = `${parseInt(this.element.style.right) + 1}px`;
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

      if (frame % 260 === 0) cactos.push(new Cacto());
      cactos.forEach(cacto => {
        cacto.mover();
        
        if (parseInt(cacto.element.style.right) >= WIDTH) {
          cactos.shift();
          cacto.element.remove();

        }
      });

      console.log("cactos "+cactos.length); //testeeeee
      console.log("nuvens "+nuvens.length);

    }
    
  
    init()
  
  })()