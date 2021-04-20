// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
function validatePIN(pin) {
    return isValid(pin);
}

function isValid(pin) {
    if (typeof (pin) !== "string") return false;
    if (pin.length === 6 || pin.length === 4) {
        const re = new RegExp('[^0-9]', 'g');
        // console.log(new RegExp('[^0-9]','g'))
        // return !re.test(pin); // RegExp Solution
        return [...pin].every(i => !"0123456789".includes(i)); // Array Solution
    };
    return false;
}

const pin = "1233"


console.log(validatePIN(pin))