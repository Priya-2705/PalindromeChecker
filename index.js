

function cleanString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    const cleanedValue = cleanString(input);
    const reversed = reverseString(cleanedValue);
    
    if(cleanedValue == "") {
        result.textContent = "Please enter a word"
        result.style.color = "red";
    }
    else if(cleanedValue === reversed) {
        result.textContent = `"${input} is a P A L I N D R O M E"`;
        result.style.color = "green"
    }
    else {
        result.textContent = `"${input} is N O T     A     P A L I N D R O M E"`;
        result.style.color = "red";
    }
    result.style.display = "block";

    document.getElementById("input").value = "";
}