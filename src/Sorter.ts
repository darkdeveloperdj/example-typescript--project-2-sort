// import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //if (this.collection instanceof Array) {
        // typeguard
        // if (this.collection[j] > this.collection[j + 1]) {
        //   const leftHand = this.collection[j];
        //   this.collection[j] = this.collection[j + 1];
        //   this.collection[j + 1] = leftHand;
        // }
        //}

        // if (typeof this.collection === "string") {
        // }

        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

// const sorter = new Sorter([2, 10, 5, 88]);
// sorter.sort();
// console.log(sorter.collection);
