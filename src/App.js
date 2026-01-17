import './App.css';
import "milligram";
import MovieForm from "./MovieForm";
//import MovieList from "./MoviesList";
import {useState} from "react";
import {MoviesList} from "./MoviesList";

function App() {
     //const [title, setTitle] = useState(''); // pierwszy etap
     //const [year, setYear] = useState(''); // pierwszy etap
     const [movies, setMovies] = useState([]);
    //const [year, setMovies] = useState([]);
    const [addingMovie, setAddingMovie] = useState(false)// 5 punktów 1

    //const [movies, setMovies] = useState([]);

    // let message;
    // if (title.length < 5) {
    //     message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    // } else if (title.length < 15) {
    //     message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    // } else {
    //     message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    // }
    //
    // function handleChange(event) {
    //     setTitle(event.target.value);
    // }

    // const movies = [
    //     {title: "Wall-E"},
    //     {title: "Pulp Fiction"},
    //     {title: "Matrix"},
    //     {title: "1670"},
    // ];

    // function handleAddmovie(){
    //     const  movie = {
    //         title: title,
    //         year: year,
    //     };
        //console.log(movie)
        //movies.push(movie);
        //setMovies(movies)

    //     setMovies([...movies, movie]);
    //     setTitle('')
    //     setYear('')
    //
    // }

    return (
        <div className="container">

            {/*<h1>My favourite movies to watch</h1>*/}
            {/*<h2>Titles</h2>*/}
            {/*<ul>*/}
            {/*    {movies.map(movie => <li key={movie.title}>{movie.title} {movie.year}</li>)}*/}
            {/*</ul>*/}


            {/*<h2>Add movie</h2>*/}
            {/*<label>Tytuł</label>*/}
            {/*<input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>*/}


            {/*<label>Rok wydania {year}</label>*/}
            {/*<input type="text" value={year} onChange={(event) => setYear(event.target.value)}/>*/}


            {/*/!*{title.length > 0 && <div>{message}</div>}*!/*/}
            {/*/!*{title.length > 0 && <div>{message}</div>}*!/*/}

            {/*/!*<input type="text" value={title} onChange={handleChange}/>*!/*/}
            {/*/!*<button onClick={() => alert(title)}>Dodaj film</button>*!/*/}

            {/*<button onClick={handleAddmovie}>Dodaj film</button>*/}


            {/*<MoviesList movies={movies}/>*/}
            {/*<MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>*/}
            {/*<h1>My favourite movies to watch</h1>*/}
            {/*{movies.length === 0}*/}
        </div>
    );
}

export default App;

