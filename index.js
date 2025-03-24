const input = document.getElementById("input");

function cleanString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const value = input.value;
    const cleanedValue = cleanString(value);
    const reversed = reverseString(cleanedValue);
    
    if(cleanedValue === reversed) {
        alert("P A L I N D R O M E");
    }
    else {
        alert("N O T   A   P A L I N D R O M E");
    }

    input.value = "";
}