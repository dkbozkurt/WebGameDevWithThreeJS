// .toFixed(n), this converts the Number to a String with n digits following the decimal point.
function milesToKilometers(dist)
{
    return (dist*1.609).toFixed(1);
}
milesToKilometers(5); // 8.0


// isNaN(a) is a built-in js function to test if a is not a number.
isNaN(9) // true;


// Math.random() return a pseudo random number between 0 and 1
Math.random();

// METHOD.bind(this);
// by using bind and passing this into it we are referring to class it self. Otherwise it will refer as the base thing.