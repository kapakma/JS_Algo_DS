function mergeSort(arr) {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length/2);
        return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
    }

    return arr;

    function merge(leftArr, rightArr) {
        let results = [],
            leftIndex = 0,
            rightIndex = 0;

        while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if (leftArr[leftIndex] < rightArr[rightIndex]) {
                results.push(leftArr[leftIndex]);
                leftIndex++;
            }
            else {
                results.push(rightArr[rightIndex]);
                rightIndex++;
            }
        }

        if (leftIndex < leftArr.length) {
            results.push(...leftArr.slice(leftIndex));
        }
        else if (rightIndex < rightArr.length) {
            results.push(...rightArr.slice(rightIndex));
        }

        return results;
    }
}