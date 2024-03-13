function inverterString(string) {
    let invertida = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

let string = "Hello, World!";
console.log(inverterString(string)); // Output: "!dlroW ,olleH"
