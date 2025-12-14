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
     const [title, setTitle] = useState('Wall-E'); //hook
     //const [komunikat, setKomunikat] = useState("")


    function handleChange(event) {
        //console.log(event.target.value);
            setTitle(event.target.value);
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

// struct komponentu
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <h3>My favourite movie for today is {title}</h3>

            {
                //<h3> {message}</h3>  pierwsza wersja
                title.length > 0 && <div>{message}</div>
            }


            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;