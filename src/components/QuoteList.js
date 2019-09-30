import React, { useState } from 'react';
import { TextField } from '@material-ui/core';


const QuoteList = ({ addQuote }) => {
const [quotes, setQuotes] = useState({text:"", author:""});
const handleChange = event => {
    setQuotes({...quotes, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    addQuote(quotes);
    };

  //   const addColor = huh => {
  //     axiosWithAuth().post('https://lambda-practice-db.herokuapp.com/api/post', huh)
  //     .then(res => setFriendsList(res.data))
  //     .catch(err => console.log(err.response));
  // }


    
return (
<form onSubmit={handleSubmit}>

<TextField
        name='text'
        id="outlined-full-width"
        label="Short Inspirational Quote!"
        style={{ margin: 8 }}
        placeholder="Insert Quote"
        helperText="Ex: Anyone can give up, it;s the easiest thing in the world to do. But to hold it together when everyone else would understand if you fell apart, that's true strength. Author: Unknown"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true, 
        }}
        value={quotes.text}
        onChange={handleChange}
        
      />
 
 <br></br>
<input name='author' placeholder="author" value={quotes.name} onChange={handleChange} />
<br></br>
<button type='submit'>Submit</button>
</form>
);
};

export default QuoteList; 