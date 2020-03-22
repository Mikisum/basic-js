module.exports = function repeater(str, options) {
    let repeatTimes = 1;
    let separator = '+';
    let addition = '';
    let additionRepeatTimes = 1;
    let additionSeparator = '|';
    let result = '';
    
    if (str != undefined) str = str.toString();
    if (options.addition != undefined) options.addition = options.addition.toString();
    if (str === null) str = 'null';
    if (options.addition === null) options.addition = 'null';
    if (options.repeatTimes) repeatTimes = options.repeatTimes;
    if (options.additionRepeatTimes) additionRepeatTimes = options.additionRepeatTimes;
    if (options.separator) separator = options.separator;
    if (options.additionSeparator) additionSeparator = options.additionSeparator;
    if (options.addition) addition = options.addition;

    for (i = 0; i < repeatTimes; i++) {
        let add = '';
        for (j = 0; j < additionRepeatTimes; j++) {
            add += addition; 
            if (j != additionRepeatTimes - 1) 
                add += additionSeparator;
        }
        result += str + add;
        if (i != repeatTimes - 1) 
            result += separator;
    } 
   
    return result;
};


  