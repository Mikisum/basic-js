module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                let val = this.calculateDepth(arr[i]) + 1;
                if (val > count) count = val;
            }
        }
        return count;
    }
};