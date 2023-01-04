"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChractersCollection = void 0;
const sorter_1 = require("./sorter");
class ChractersCollection extends sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const chracters = this.data.split("");
        const leftHand = chracters[leftIndex];
        chracters[leftIndex] = chracters[rightIndex];
        chracters[rightIndex] = leftHand;
        this.data = chracters.join("");
    }
}
exports.ChractersCollection = ChractersCollection;
