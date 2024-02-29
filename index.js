let x = prompt(`Which series of numbers do you want? 1) Even 2) Odd`);
let limit= prompt(`Please enter the Limit.`)
if (x == "1") {
    for (let a = 0; a <=limit; a += 2) {
        document.write(`<b>${a}<br></b>`);
    }
}
else if (x=="2"){
    for (let a = 1; a <= limit; a += 2) {
        document.write(`<b>${a}<br></b>`);
    }
}
else{
    document.write(`<center><h2>Invalid Input</h2></center>`)
}