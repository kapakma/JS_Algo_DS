function radixSort(nums) {
    const maxLen = String(Math.max(...nums)).length;

    for (let d = maxLen - 1; d >= 0; d--) {
        let buckets = getBuckets();

        for (let i = 0; i < nums.length; i++) {
            const digit = getDigitAt(nums[i], d, maxLen);
            buckets[digit].push(nums[i]);
        }
        
        nums.length = 0;
        for (let list of buckets) {
            for (let i = 0; i < list.length; i++) {
                nums.push(list[i]);
            }
        }
    }

    return nums;

    function getDigitAt(num, i, len) {
        const str = String(num).padStart(len, '0');
        return Number(str.charAt(i));
    }

    function getBuckets() {
        let buckets = [];
        for (let i = 0; i < 10; i++) {
            buckets[i] = [];
        }
        return buckets;
    }
}