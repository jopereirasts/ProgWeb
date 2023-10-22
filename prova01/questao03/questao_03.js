/* Código desenvolvido corretamente */
/* Nota: 2.0 */

class Venda {
    constructor(id, qtd, preco) {
        this.id = id;
        this.qtd = qtd
        this.preco = preco;
    }

    getId() {
        return this.id;
    }

    getQtd() {
        return this.qtd;
    }

    getPreco() {
        return this.preco;
    }

    setId(id) {
        this.id = id;
    }

    setQtd(qtd) {
        this.qtd = qtd;
    }

    setPreco(preco) {
        this.preco = preco;
    }

    getValorTotal() {
        return this.getPreco() * this.getQtd();
    }
}

const venda1 = new Venda(1, 2, 3);
const venda2 = new Venda(2, 4, 2);
let total1 = venda1.getValorTotal();
let total2 = venda2.getValorTotal();
console.log(`Total de venda da venda de id ${venda1.id}: ${total1}`);
console.log(`Total de venda da venda de id ${venda2.id}: ${total2}`);
