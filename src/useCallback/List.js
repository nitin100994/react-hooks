import React, {useState, useEffect} from 'react'

export default function List({number}) {

    const [items,setItems] = useState([])
    // console.log('getItems', getItems())
    useEffect(() => {
        setItems(() => [number,number+1,number+2])
        console.log('items', items)
    },[number])

    return items.map(item => <div key={item}>{item}</div>)
}
