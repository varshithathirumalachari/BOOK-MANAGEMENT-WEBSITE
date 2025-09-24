import React, { useState, useEffect } from 'react';
import axios from 'axios';

// --- AddBook Component ---
function AddBook({ onBookAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', { title, Author: author });
      onBookAdded();
      setTitle('');
      setAuthor('');
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">➕ Add Book</button>
    </form>
  );
}

// --- Main BookList Component ---
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');

  const fetchBooks = () => {
    setLoading(true);
    axios.get('http://localhost:5000/books')
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("⚠️ Failed to fetch books.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  const startEdit = (book) => {
    setEditing(book.id);
    setEditTitle(book.title);
    setEditAuthor(book.Author);
  };

  const updateBook = async (id) => {
    try {
      await axios.put(`http://localhost:5000/books/${id}`, {
        title: editTitle,
        Author: editAuthor
      });
      setEditing(null);
      fetchBooks();
    } catch (err) {
      console.error("Error updating:", err);
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.Author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="book-container">
      <h2>📚 Book List</h2>
      <AddBook onBookAdded={fetchBooks} />

      <input
        type="text"
        placeholder="🔍 Search by title/author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {editing === book.id ? (
              <>
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                />
                <button onClick={() => updateBook(book.id)}>💾 Save</button>
                <button onClick={() => setEditing(null)}>❌ Cancel</button>
              </>
            ) : (
              <>
                <span>
                  <strong>{book.title}</strong> by {book.Author}
                </span>
                <div>
                  <button onClick={() => startEdit(book)}>✏️ Edit</button>
                  <button onClick={() => deleteBook(book.id)}>🗑️ Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
