import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import QuoteList from './QuoteList';
import { Link } from 'react-router-dom';



const Quote = () => {
const [quotesList, setQuotesList] = useState([]);

useEffect(() => {
 
axiosWithAuth()
.get('https://lambda-practice-db.herokuapp.com/api/post')
.then(res => {
  
  console.log("ALL POSTS", res.data.posts)

setQuotesList(res.data.posts)
})
.catch(err => console.log(err));



},[]);

const addQuote = quote1 => {
    console.log(quote1)
    axiosWithAuth().post('https://lambda-practice-db.herokuapp.com/api/post', quote1)
        .then(res => {console.log(res)
            
            setQuotesList([...quotesList, res.data.newPost])
        })
        
        .catch(err => console.log(err.response));
    
}

const deleteQuote = id => {
    console.log('delete quote function here')
    axiosWithAuth().delete(`https://lambda-practice-db.herokuapp.com/api/post/${id}`)
    .then(res => {
      console.log(res.data);
      console.log('successful delete');
      
      axiosWithAuth().get('https://lambda-practice-db.herokuapp.com/api/post')
      .then(res => {
          setQuotesList(res.data.posts);
          console.log('updating data');
        })
        .catch(err => console.log(err.response));
    
            })
    .catch(err => console.log(err.response));
  
  };

  

return(
<div>
<QuoteList addQuote={addQuote} />
<h2>Quotes</h2>

{quotesList.map(quote=>{
    return (<div>
        <h3>{quote.author}</h3>
        <p>{quote.text}</p>
        <button onClick= {()=>deleteQuote(quote.id)}>Delete</button>
        <Link to={`EditForm/${quote.id}`}>Edit</Link>
        </div>
    );
})}

</div>

)};

export default Quote;