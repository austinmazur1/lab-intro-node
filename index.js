class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items.at(pos);
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    //if nothing in the array, throws the error
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      //Returns the highest out of whats in the array
      return Math.max(...this.items);
    }
  }

  min() {
    //same concept as the highest number, just now using the Math.min()
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;

    if (this.items.length === 0) {
      return 0;
    } else {
      this.items.forEach((el) => {
        sum += el;
      });
    }
    return sum;
  }

  avg() {
   
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      //takes the sum from previous method 
       return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;

console.log(SortedList);
