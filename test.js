const readline = require('readline');
const EventEmitter = require("events");
const eventEmitter = new EventEmitter;

var books = ["alchamist", "habbit"];
eventEmitter.on("showBooks", function () {
    for (var i = 0; i < books.length; i++) {
        console.log(books[i])
    }
})
eventEmitter.on("addBook", function (b) {
    books.push(b)
})


const readLine1 = new readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

readLine1.on("close", function () {
    console.log("Bye Bye")
})
function question() {
    readLine1.question("Press 1, 2 or 3 to do the actions 1 - Show all books 2 - Add a new book 3 - Quit", function (value) {
        
        if (value == 1) {
        
            eventEmitter.emit("showBooks")
            question()
        }
        else if (value == 2) {
            readLine1.question("name of the book", function (value) {
                eventEmitter.emit("addBook", value)
                console.log("Sucessfully Added")
                question()
            })
        }
        else if (value == 3) {
            readLine1.question("Are you sure you want to quit - press Y to quit", function (value) {
                
                if (value == "Y") {
                   readLine1.close();
                } else {
                    question()
               }
            })
        }
        else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3")
            question()
        }
    })
}

question();