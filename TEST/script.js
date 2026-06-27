


var books = [];


function add() {
    var book = {
        BookID: Number(prompt("Enter Book Id : ")),
        BookName: prompt("Enter Book Name : "),
        AuthorName: prompt("Enter Book Author Name : "),
        Category: prompt("Enter Book Catagory : "),
        Quantity: Number(prompt("Enter Book Quentity : "))
    }

    books.push(book);
    alert("Book Added Successfully!")

    console.log(books);
}


function display() {

    console.log(books);

}


function bookIssue() {

    var bookstatus = prompt("Enter Book Name");
    var found = false;

    for (let i = 0; i < books.length; i++) {

        if (books[i].BookName === bookstatus) {


            books[i].Quantity--;


            alert("Book Issued Successfully!");
            console.log(books);
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Book is not Available");
    }
}


function bookReturn() {

    var name = prompt("Enter the Book Name : ");
    var bool = false;

    for (let i = 0; i < books.length; i++) {

        if (books[i].BookName === name) {

            books[i].Quantity++;

            document.querySelector('div').innerHTML += `
                <h2>Book ID : ${books[i].BookId}</h2>
                <h2>Book Name : ${books[i].BookName}</h2>
                <h2>Book Author Name : ${books[i].AuthorName}</h2>
                <h2>Book Category : ${books[i].Category}</h2>
                <h2>Book Quantity : ${books[i].Quantity}</h2>
            `;

            alert("Book Returned Successfully!")
            console.log(books);
            bool = true;
            break;
        }
    }

    if (!bool) {
        alert("Book Name Was available");
    }
}


function deleteBook() {

    var name = prompt("Enter Book Name");
    var found = false;

    for (let i = 0; i < books.length; i++) {

        if (books[i].BookName === name) {

            books.splice(i, 1);

            alert("Book Deleted Successfully!");
            found = true;
            break;
        }
    }

    if (found == false) {
        alert("Book Name Does Not Match");
    }

    console.log(books);
}


function bookStatus() {

    var bookstatus = prompt("Enter Book Name");
    var found = false;

    for (let i = 0; i < books.length; i++) {

        if (books[i].BookName === bookstatus) {

            if (books[i].Quantity > 0) {
                alert("Book is Available");
            } else {
                alert("Out of Stock");
            }

            found = true;
            break;
        }
    }

    if (!found) {
        alert("Book is not Available");
    }
}


function totalBooks() {
    alert("Total Books Are : " + books.length);


}


function totalBookQua() {

    let total = 0;

    for (let i = 0; i < books.length; i++) {
        total += books[i].Quantity;
    }

    alert("Total Books Quantity Are : " + total);
}