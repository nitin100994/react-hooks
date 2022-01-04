import React,{useState,useCallback} from 'react'
import List from './useCallback/List'

export default function UseCallback() {

    const [number,setNumber] = useState(1);

    function setInput(e){
        if(e !== e) {
            console.info('x is NaN.');
        }
        else {
            console.info('x is NOT a NaN.');
        }
        setNumber(() => parseInt(e.target.value))
    }                           

    // const getItems = () => {  
    //     console.log('getItems', number)
    //     return [number, number+1, number+2]
    // }

    return (
        <div>
            <input type="number" value={number} 
            onChange={e => setInput(e)}/>  
            <List number={number}/>
        </div>
    )
}
