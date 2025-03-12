export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let mergedArray: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1; 

    while (i < collection_1.length && j < collection_2.length && k >=0) {
        if (collection_1[i] < collection_2[j] && collection_1[i] < collection_3[k]) {
            mergedArray.push(collection_1[i]);
            i++;
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            mergedArray.push(collection_2[j]);
            j++;
        } else {
            mergedArray.push(collection_3[k]);
            k--;
        }
    }

    while (i < collection_1.length) {
        mergedArray.push(collection_1[i]);
        i++;
    }

    while (j < collection_2.length) {
        mergedArray.push(collection_2[j]);
        j++;
    }

    while (k >= 0) {
        mergedArray.push(collection_3[k]);
        k--;
    }

    return mergedArray;
}
