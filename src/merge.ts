export function merge(collection_1: number[], collection_2: number[], collection_3: number[]
): number[] {

    const result: number[] = [];
    let i = 0, j = 0, k = collection_3.length - 1; 

    while (i < collection_1.length || j < collection_2.length || k >= 0) {

        if (i < collection_1.length &&
            (j >= collection_2.length || collection_1[i] <= collection_2[j]) &&
            (k < 0 || collection_1[i] <= collection_3[k])) {
            result.push(collection_1[i++]);

        } else if (j < collection_2.length &&
            (k < 0 || collection_2[j] <= collection_3[k])) {
            result.push(collection_2[j++]);

        } else {
            result.push(collection_3[k--]);
        }
    }

    return result;
}
