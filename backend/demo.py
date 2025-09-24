from flask import Flask, request, jsonify
from flask_cors import CORS  # <-- ✅ Import CORS

demo = Flask(__name__)
CORS(demo)  # <-- ✅ Enable CORS globally

books = [
    {
        "id": 1,
        "title": "Don Quixote",
        "Author": "Miguel de Cervantes"
    },
    {
        "id": 2,
        "title": "Alice's Adventures in Wonder",
        "Author": "Lewis Carroll"
    },
    {
        "id": 3,
        "title": "The Adventures of Huckleberr",
        "Author": "Mark Twain"
    }
]

@demo.route('/books')
def get_books():
    return jsonify(books), 200

@demo.route('/books/<int:id>', methods=['GET'])
def get_bookid(id):
    for book in books:
        if book['id'] == id:
            return jsonify(book), 200
    return jsonify({"error": "Not found"}), 404

@demo.route('/books/', methods=['POST'])
def create_book():
    data = request.get_json()
    if not data or 'title' not in data or 'Author' not in data:
        return jsonify({"error": "Invalid input"}), 400
    new_id = max(book['id'] for book in books) + 1 if books else 1
    new_book = {
        "id": new_id,
        "title": data['title'],
        "Author": data['Author']
    }
    books.append(new_book)
    return jsonify(new_book), 201

@demo.route('/books/<int:id>', methods=['PUT'])
def update_book(id):
    data = request.get_json()
    for book in books:
        if book['id'] == id:
            book['title'] = data.get('title', book['title'])
            book['Author'] = data.get('Author', book['Author'])
            return jsonify(book), 200
    return jsonify({"error": "Book not found"}), 404

@demo.route('/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    for book in books:
        if book['id'] == id:
            books.remove(book)
            return jsonify({"message": "Book Deleted"}), 200
    return jsonify({"error": "Book not found"}), 404

@demo.route('/books/<int:id>', methods=['PATCH'])
def patch_book(id):
    data = request.get_json()
    for book in books:
        if book['id'] == id:
            if 'title' in data:
                book['title'] = data['title']
            if 'Author' in data:
                book['Author'] = data['Author']
            return jsonify(book), 200
    return jsonify({"error": "Book not found"}), 404


if __name__ == "__main__":
    demo.run(debug=True)
