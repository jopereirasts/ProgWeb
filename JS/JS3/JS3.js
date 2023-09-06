class IntegerSet {
    constructor(maxValue) {
      this.maxValue = maxValue;
      this.set = new Array(maxValue + 1).fill(false);
    }

    insert(element) {
        if (element >= 0 && element <= this.maxValue) {
          this.set[element] = true;
        }
      }
    
    remove(element) {
        if (element >= 0 && element <= this.maxValue) {
            this.set[element] = false;
        }
    }

    union(otherSet) {
        const newSet = new IntegerSet(this.maxValue);
        for (let i = 0; i <= this.maxValue; i++) {
          newSet.set[i] = this.set[i] || otherSet.set[i];
        }
        return newSet;
      }
    
    intersection(otherSet) {
        const newSet = new IntegerSet(this.maxValue);
        for (let i = 0; i <= this.maxValue; i++) {
            newSet.set[i] = this.set[i] && otherSet.set[i];
        }
        return newSet;
    }
    
    difference(otherSet) {
        const newSet = new IntegerSet(this.maxValue);
        for (let i = 0; i <= this.maxValue; i++) {
          newSet.set[i] = this.set[i] && !otherSet.set[i];
        }
        return newSet;
    }

    toString() {
        const elements = [];
        for (let i = 0; i <= this.maxValue; i++) {
          if (this.set[i]) {
            elements.push(i);
          }
        }
        return `{${elements.join(', ')}}`;
    }
}

const primConjunto = new IntegerSet(10);
const segConjunto = new IntegerSet(10);

primConjunto.insert(2);
primConjunto.insert(4);
primConjunto.insert(6);

segConjunto.insert(4);
segConjunto.insert(6);
segConjunto.insert(8);

console.log("Conjunto 1:", primConjunto.toString());
console.log("Conjunto 2:", segConjunto.toString());

const conjuntoUniao = primConjunto.union(segConjunto);
console.log("União:", conjuntoUniao.toString());

const conjuntoIntersec = primConjunto.intersection(segConjunto);
console.log("Interseção:", conjuntoIntersec.toString());

const conjuntoDiff = primConjunto.difference(segConjunto);
console.log("Diferença:", conjuntoDiff.toString());