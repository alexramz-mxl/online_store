import { useState } from "react";
import "./ShoppingList.css";


function ShoppingList() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function add() {
        console.log('Add clicked!!', text);

        // crete a copy
        let copy = [...list];
        //modify the copy
        copy.push(text);
        //set the copy back
        setList(copy);
    }
    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="shopping">
            <h1>YOUR SHOPPING LIST:</h1>

            <div className="form">
                <label>PRODUCT:</label>
                <input onChange={handleChange} placeholder="Type a product to add to your list" type="text" />
                <button onClick={add} className="btn btn-m btn-warning">
                    Add
                </button>
            </div>

            <div className="list">
                <label className="info">{list.lenght}</label>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;