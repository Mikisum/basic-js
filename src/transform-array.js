module.exports = function transform(arr) {
    
    if (!Array.isArray(arr)) throw new Error;
    let transformedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
             i++ ;
        } 
        else if (arr[i] === '--discard-prev') {
            if (arr.length > 0)
            transformedArray.pop();
        }
        else if (arr[i] === '--double-next') {
            if (arr.length - 1 > i)
            transformedArray.push(arr[i + 1]);
        }
        else if (arr[i] === '--double-prev') {
            if (i > 0)
            transformedArray.push(arr[i - 1]);
        }
        else transformedArray.push(arr[i]);
    }
    return transformedArray;
};
