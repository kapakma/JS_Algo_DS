function jumpSearch(arr, value) {
    const n = arr.length,
        steps = Math.floor(Math.sqrt(arr.length));
    let lower = 0,
        upper = steps;

    while (arr[Math.min(upper, n) - 1] < value) {
        if (upper >= n) {
            return -1;
        }
        lower = upper;
        upper += steps;
    }

    while (arr[lower] < value) {
        lower++;
        if (lower == Math.min(upper, n)) {
            return -1;
        }
    }

    if (arr[lower] == value) {
        return lower;
    }

    return -1;
}