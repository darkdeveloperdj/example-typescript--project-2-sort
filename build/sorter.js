"use strict";
// import { NumbersCollection } from "./NumbersCollection";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
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
exports.Sorter = Sorter;
// const sorter = new Sorter([2, 10, 5, 88]);
// sorter.sort();
// console.log(sorter.collection);
