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
}