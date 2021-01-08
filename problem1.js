//Find whether string have matching brackets.
//EX) {} -> True, {)} -> False, "" -> True

function matchBracket(str) {
    let bracket = [];
    let checkBracket = ['(', ')', '{', '}', '[', ']'];
    let includedBracket = [];
    let arrayStr = str.split("");
    //Check to see if string has brackets.  If no brackets detected return true
    checkBracket.forEach(firstElement => {
        arrayStr.forEach(secondElement => {
            if(firstElement.indexOf(secondElement) > -1) {
                includedBracket.push(secondElement);
            }
        })
    });
    if (includedBracket.length === 0) {
        return true;
    } else {
        for(let i = 0; i < str.length; i++) {
            let lastIndexValue = bracket[bracket.length -1];
            if(str.charAt(i) === '(' || str.charAt(i) === '[' || str.charAt(i) === '{') {
                bracket.push(str[i]);
            } else if(str.charAt(i) === ')'){
                if(!bracketFilter(bracket, '(', lastIndexValue)) {
                    return false;
                }
            } else if(str.charAt(i) === ']') {
                if(!bracketFilter(bracket, '[', lastIndexValue)) {
                    return false;
                }

            } else if(str.charAt(i) === '}') {
                if(!bracketFilter(bracket, '{', lastIndexValue)) {
                    return false;
                }
            }
        }
    }
    return (bracket.length === 0 ? true : false);
}
function bracketFilter(bracket, bracketString, lastIndexValue) {
    if(bracket.length === 0 || lastIndexValue !== bracketString) {
        return false;
    } else {
        bracket.pop();
        return true;
    } 
}
matchBracket('{hel([1])}');
module.exports = matchBracket