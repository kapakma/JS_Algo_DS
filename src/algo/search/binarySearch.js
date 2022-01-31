function binarySearch(arr, value) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        const midIndex = Math.floor((start + end)/2);
        if (value < arr[midIndex]) {
            end = midIndex - 1;
        }
        else if (value > arr[midIndex]) {
            start = midIndex + 1;
        }
        else {
            return midIndex;
        }
    }

    return -1;
}