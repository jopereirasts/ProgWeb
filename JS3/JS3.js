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
}