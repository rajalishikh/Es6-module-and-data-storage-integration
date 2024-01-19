
import { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import { add, multiplication } from '../utility/Calculation';
import './Sunglass.css';
const first = 1111;
const second = 222;
 const sum = add(first ,second);
const sum2 = multiplication(first, second);
// local storage made by hand 
console.log(sum, sum2)
const watch = [
    { id: 1, name: 'apple', price: 2000 },
    { id: 2, name: 'Samsung', price: 20000 },
    { id: 3, name: 'walton', price: 1000 },
    
]




const Sunglass = () => {
    // local storage made by chat gpt 
const [data, setData] = useState([]);
useEffect(() => {
    fetch('watch.json')
        .then(res => res.json())
        .then(data2 => setData(data2))
    
}, [])
    
    
    return (
        <div>
            
            <h1>My father was a rich man her bank balance was {sum2}</h1>
            <p>My name is raj,I have some money and the amount of my balance {sum} </p>
            
            {
                data.map(item => <Watch
                
                    key={item.id} watch={item}></Watch>)
                
            }
            
            
            
            
        </div>
    );
};

export default Sunglass;