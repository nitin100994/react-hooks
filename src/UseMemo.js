import React, {useState, useMemo, useEffect} from 'react'

export default function UseMemo() {

    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);

    const themeStyles = useMemo(() => {
        return  {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
        }
    },[dark])
   
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    },[number])
    
    /*below effect is also running if we change input value too and the reason is   
    referencial equality [2 diff object/arrays having smae value are not same but they have
    different references, therefore everytime component re-renders "themeStyles" object 
    assigned a new refernece to which is different than "themeStyles" after render hence 
    this means below useEffect() gets rendered everytime. Solutionis to put memoize "themeStyles"]
    */
    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles])

    function slowFunction(num){
        console.log("calling slow fucntion");
        for(let i =0 ; i<100000000; i++){}
        return num * 2;
    }

    return (
        <>
            <input type="number" value={number} 
            onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}
