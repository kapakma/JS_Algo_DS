function countSort(nums) {
    let map = {},
        results = [];
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        map[num] = map[num] ? map[num]+1 : 1;
    }

    for (let key in map) {
        const count = map[key];
        for (let i = 0; i < count; i++) {
            results.push(Number(key));
        }
    }
    
    return results;
}