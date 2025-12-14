import logo from './logo.svg';
import './App.css';



// function App() {
//     return (
//         <div>
//             <h1>My favourite movies to watch</h1>
//         </div>
//     );
// }

// function App() {
//
//     let title = '1670';
//
//
//     return (
//
//         <div>
//
//             <h1>My favourite movies to watch</h1>
//
//             <h2>My favourite movie for today is {title}</h2>
//
//         </div>
//
//     );
//
// }

import {useState} from "react";
function App() {
    //let title = '1670';
    //title = event.target.value;

    const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},

];
     const [title, setTitle] = useState('Wall-E'); //hook
     //const [komunikat, setKomunikat] = useState("")


    function handleChange(event) {
        //console.log(event.target.value);
            setTitle(event.target.value);
    }
    function handleClic(event){
        alert(title);
    }

    let message= '';
    if (title.length < 5){
        message =  <div>Title is too short</div> //'Title is too short'; // pierwsza wersja
    }
    else if (title.length  < 10)
    {
        message =  <div>Title is extra</div>//'Title is extra';
    } else
    {
        message =  <div>Title to long </div>  //'Title to long ';
    }
    if (title.length === 0){
        message = '';
    }
// tu mozna dać listę z filmami
// struct komponentu
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <ul>
                {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            <h3>My favourite movie for today is {title}</h3>

            {
                //<h3> {message}</h3>  pierwsza wersja
                title.length > 0 && <div>{message}</div>
            }


            <input type="text" onChange={(event) => setTitle(event.target.value)}/>
             <button onClick={() => alert(title)}>Pokaż tytuł yyfilmu!</button>
        </div>
    );
}

export default App;