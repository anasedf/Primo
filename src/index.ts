import { merge } from './merge';

const collection_1 = [1, 5, 6];
const collection_2 = [0, 6, 6];
const collection_3 = [8, 2];

const result = merge(collection_1, collection_2, collection_3);
console.log(result); 
console.log(result.length);