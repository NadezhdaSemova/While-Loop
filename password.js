function password (input) {
let username = String(input[0]);
let correctPassword = input[1];
let index = 2;

while(false){
    let password = input[index];
    if (correctPassword === password){
        break;
    }
}
console.log(`Welcome ${username}!`);
}
password(["Gosho",
"secret",
"secret"])

