import React, {useState} from "react";
import "./App.css"

export default function ListItem(props) {

    const [crossed, setCrossed] = useState(true);
    const [classes, setClasses] = useState('');
    const [btnName, setBtnName] = useState('Выполнено');
      
    const handleClick = () => {
        // {console.log(crossed, classes, btnName)}
        if (!crossed) {
            setClasses('');
            setBtnName('Выполнено')
        } else {
            setClasses('crossedOut');
            setBtnName('Вернуть')
        }
         setCrossed(!crossed);
    }

    return (
        <div>
            <li className={classes}>
                { props.value }
                {' '}
                <button onClick={handleClick}>{btnName}</button>
                {/* {console.log(crossed, classes, btnName)} */}
            </li>
        </div>
    )
}
