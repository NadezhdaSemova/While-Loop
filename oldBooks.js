function oldBooks(input){
    let searchBook = String(input[0]);
let index = 1;
let counterBooks = 0;
let end = false;

while(true){
    let currentBook = String(input[index]);
    if(currentBook === "No More Books"){
        break;
    }else if(!(currentBook === searchBook)){
        counterBooks++;
    }else{
        end = true;
        break;
    }
    index++;
}
if (end){
    console.log(`You checked ${counterBooks} books and found it.`)
}else{
    console.log("The book you search is not here!")
    console.log(`You checked ${counterBooks} books.`)
}
}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
