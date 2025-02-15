//  12 inch = 1feet;

function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}

const armamHeight = inchToFeet(72);
console.log(armamHeight);







function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction); 
    const inchRemaing = inch % 12;
    const total = feetNumber + " ft " + inchRemaing + " inch ";
    return total ;
}

const armamHeight2 = inchToFeet2(75);
console.log(armamHeight2);






function milesToKm(miles) {
    const kelometer = miles * 1.60934;
    return kelometer
}

console.log(milesToKm(15));










function kelometerToMiles(kelometer) {
    const miles = kelometer * 0.621371;
    return miles; 
}
console.log(kelometerToMiles(14));
