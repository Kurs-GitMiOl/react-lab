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
        message = 'Title is too short';
    }
    else if (title.length  < 10)
    {
        message = 'Title is extra';
    } else
    {
        message = 'Title to long ';
    }

// struct komponentu
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <h3>My favourite movie for today is {title}</h3>
            <h3> {message}</h3>


            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;