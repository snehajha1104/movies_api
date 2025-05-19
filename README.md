### 📽️ MovieAPI\_Proj

A simple and dynamic frontend application built using vanilla JavaScript that fetches and displays movie data from the [OMDb API](http://www.omdbapi.com/). This project allows users to search for movies by title and view basic details including the title, poster, and a placeholder release year.

#### 🌟 Features

* Search for movies by keyword using the OMDb API.
* Dynamically displays a list of movie cards with:

  * Movie title
  * Poster image (or a default image if not available)
  * Static release year (currently hardcoded as 2010)
* Auto-fetches a default movie list (e.g., "Avenger") on page load.

#### 🔧 Technologies Used

* HTML
* CSS
* JavaScript (Vanilla JS)
* OMDb API (for movie data)

#### 🛠️ How It Works

* `getMovie()` is an async function that fetches movie data using the OMDb API and displays the results dynamically.
* The `findmovie()` function updates the search query and triggers a new fetch.
* Movies are rendered as cards with the title, poster, and release year.

#### 📌 Note

* The release year is currently static (`2010`). You can enhance the app by replacing it with the actual year from the `movie.Year` field.
* No backend or database used in this version. Can be expanded into a full MERN stack application.

#### 📦 Future Enhancements (Optional Ideas)

* Integrate with Express + MongoDB to store user search history.
* Add routing using React for a complete MERN implementation.
* Add detailed movie view with ratings, plot, etc.
