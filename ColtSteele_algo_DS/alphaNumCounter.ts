function charCount(str) {
    const obj = {}

    for (let char of str) {
        // if (/[a-z0-9]/.test(char)) { // potentially slower
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase(); 
            // obj[char] = obj[char] > 0 ? obj[char] + 1 : 1;
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

// RegExp are not always fastest, as optimization we can use .charCodeAt()
function isAlphaNumeric(char: string) {
    const charCode: number = char.charCodeAt(0);
    if (!(charCode > 47 && charCode < 58) && // numeric (0-9)
        !(charCode > 64 && charCode < 91) && // uppercase A-Z
        !(charCode > 96 && charCode < 123)) { // lowercase a-z{
            return false
    }
    return true;
}

charCount("Hello Sasha!")