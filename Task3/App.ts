import { Book } from "../Book";
import { Library } from "../Library";

const myLibrary = new Library();
const book1 = new Book('The SanAndreas', 'Robert', '9780547928227');
const book2 = new Book('Amigoscode', 'sanchez', '9780132350884', false);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
myLibrary.removeBook('9780547928227');
myLibrary.listBooks();

// Task 3