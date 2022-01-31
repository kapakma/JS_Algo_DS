function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;

    function quickSortHelper(arr, left, right) {
        if (arr.length > 1) {
            const index = partition(arr, left, right);

            if (left < index-1) {
                quickSortHelper(arr, left, index-1);
            }

            if (index < right) {
                quickSortHelper(arr, index, right);
            }
        }
    }

    function partition(arr, left, right) {
        const pivot = arr[Math.floor((left + right)/2)];

        while (left <= right) {
            while (arr[left] < pivot) {
                left++;
            }

            while (arr[right] > pivot) {
                right--;
            }

            if (left <= right) {
                const temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }

        return left;
    }
}