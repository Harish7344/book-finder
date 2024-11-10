# Book Finder App

A simple and user-friendly web application that allows users to search for books by title, author, or ISBN and view detailed information about them. Users can also mark their favorite books and toggle the favorite status.

---

## Features

- **Search Books**: Search for books based on title, author, or ISBN using the Open Library API.
- **Book Cards**: Display books in card format with book cover image, title, and author information.
- **Favorites**: Users can mark books as favorites by clicking the heart icon.
- **Loading Spinner**: A loading spinner appears while books are being fetched.
- **Responsive UI**: The app uses Material UI components to ensure the layout is responsive and user-friendly.

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework to style components.
- **Axios**: Promise-based HTTP client for making requests to the Open Library API.
- **Open Library API**: Provides book data from the Open Library database.
- **CSS**: Used for additional custom styling.

---

## Installation

### Prerequisites

- Node.js installed on your machine.

### Steps to Run the Application

1. Clone the repository:

    ```bash
    git clone https://github.com/Harish7344/book-finder.git
    cd book-finder
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000`.

---

## Usage

1. **Search**: Use the search bar to search for books by title, author, or ISBN. Press `Enter` or click the `Search` button to initiate the search.
2. **View Books**: A list of books matching your search criteria will be displayed in a grid layout.
3. **Favorite Books**: Click on the heart icon on a book card to mark it as a favorite. The heart will turn red when the book is favorited and return to the default outline when unfavorited.
4. **No Results**: If no results are found, you can try adjusting the search query.

---

## Folder Structure

- **`src/`**: Main source directory containing React components and styles.
  - **`components/`**:
    - `BookCard.js`: A component that renders individual book details.
    - `Header.js`: A component for the header section.
    - `Search.js`: A component for the search bar and search logic.
  - **`style/`**:
    - `BookCard.css`: Contains the custom styles for the app.
  - **`App.js`**: The main component that contains the core logic for fetching books and managing state.
  - **`index.js`**: The entry point for rendering the app.
  - **`styles.css`**: Contains the custom styles for the app.

---

## Future Enhancements

- **Pagination**: Implement pagination to handle large result sets.
- **Detailed Book View**: Allow users to click on a book for more detailed information, such as the book description and publication details.
- **User Authentication**: Add user login and registration to save favorites across sessions.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Open Library API**: The app uses the Open Library API to fetch book data.
- **Material UI**: Used for styling and UI components.
