import { useState } from 'react';

const database = {
  Non_Fiction: [
    { name: 'Sapien', author: 'Yuval Noah Harari', rating: '9.0' },
    {
      name: 'Astrophysics for the people in hurry',
      author: 'Neil deGrasse Tyson',
      rating: '8.5',
    },
    {
      name: '21 Lessons for the 21st Centuary',
      author: 'Yuval Noah Harari',
      rating: '8.0',
    },
  ],

  Fiction: [
    { name: 'Digital Fortress', author: 'Dan Brown', rating: '7.0' },
    { name: 'Stranger', author: 'Albert Camus', rating: '8.0' },
    { name: 'The Name of Rose', author: 'Umberto Eco', rating: '8.5' },
  ],
  Career: [
    { name: 'Eloquent JavaScript', author: 'Marijn Haverbeke', rating: '10' },
    { name: 'You Dont Know JS', author: 'Kyle Simpson', rating: '10' },
    {
      name: 'Head First',
      author: 'Elisabeth Robson & Eric Freeman',
      rating: '10',
    },
  ],
};

export default function App() {
  const [genre, setGenre] = useState('');

  return (
    <div className='App'>
      <header>
        <h1>
          Book<span>Lister</span>
        </h1>
        <p>Click on the specific genre to get my recomendations</p>
      </header>

      <div>
        {Object.keys(database).map((genre) => (
          <button onClick={() => setGenre(genre)}>{genre}</button>
        ))}
      </div>

      <div className='books-container'>
        <ul>
          {genre
            ? database[genre].map((book, index) => (
                <li key={index}>
                  <div className='book-container'>
                    <div className='book-info'>
                      <h2> {book.name} </h2> <h4>{book.author}</h4>
                    </div>
                    <div className='book-rating'> {book.rating} </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}
