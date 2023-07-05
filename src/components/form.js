import React, {useState} from "react";


const Form = ({updateFilterList}) => {

    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      event.preventDefault();
      setText(event.target.value)
      updateFilterList(text);
    }
    

  return(
    <form>
        <input type="text" value={text} placeholder='Search Stories' onChange={handleTextChange}></input>
    </form>
  )
}

export default Form;