import React,{useState} from 'react'

function Contact(props) {

    const [val,setVal] = useState('pankaj')

    const test = (e) => {
        console.log('test function', e.target.value);
        setVal(e.target.value)
    }
    
    return (
        <div>
           <h1>contact us component</h1>
           <input type = 'text' value={val} onChange={test} />
           <button onClick={() =>alert(val)}>Click Me</button>
        </div>
    )
}

export default Contact;

