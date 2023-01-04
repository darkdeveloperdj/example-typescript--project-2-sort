import { NumbersCollection } from "./NumbersCollection";
import { ChractersCollection } from "./ChractersCollection";
import { Sorter } from "./sorter";

// const numbersCollection = new NumbersCollection([2, 10, 5, 88]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const chractersCollection = new ChractersCollection("bDgfreiuEGNd");
// const sorter = new Sorter(chractersCollection);
// sorter.sort();
// console.log(chractersCollection.data);
chractersCollection.sort();
console.log(chractersCollection.data);
