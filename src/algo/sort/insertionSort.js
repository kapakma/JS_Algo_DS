function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const value = arr[i];
        let j = i - 1;

        for (; j >= 0; j--) {
            if (value < arr[j]) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
        }

        arr[j+1] = value;
    }
    
    return arr;
}