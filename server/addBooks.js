const axios = require("axios");

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  { title: "Animal Farm", author: "George Orwell" },
  { title: "Jane Eyre", author: "Charlotte Brontë" },
  { title: "Wuthering Heights", author: "Emily Brontë" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
  { title: "Catch-22", author: "Joseph Heller" },
];

const addBooks = async () => {
  try {
    const loginRes = await axios.post("http://localhost:5000/api/auth/login", {
      email: "admin2@example.com", // Updated email
      password: "admin123",
    });
    const token = loginRes.data.token;

    for (const book of books) {
      await axios.post("http://localhost:5000/api/books", book, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Added: ${book.title}`);
    }
    console.log("All books added successfully");
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
};

addBooks();
