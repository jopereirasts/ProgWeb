class IntegerSet {
    constructor(maxValue) {
      this.maxValue = maxValue;
      this.set = new Array(maxValue + 1).fill(false);
    }
}