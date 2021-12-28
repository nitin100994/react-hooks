import React ,{useState, useRef}  from 'react'

export default function UseRef() {

    const [name,setName] = useState('');
    const inputRef = useRef(0);
    function focus(){
        inputRef.current.focus();
    }
    const useRefStyles={
        padding:'2rem',
        margin:'2rem',
        border:'1px solid black',
    }
    return (
        <div style={useRefStyles}>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
            <div>My Name is {name}</div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}
/* React Hook - "useRef"
  useRef returns a   
*/ 