import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/axiosWithAuth';
import axios from 'axios';

const EditForm = (props) => {


const [quote, setQuote] = useState({ author:"", text:"" });

const handleChange = e => setQuote({...quote, [e.target.name]: e.target.value});

const handleSubmit = event => {
    console.log(quote);
    console.log(props.match.params.id);
    event.preventDefault();
    axiosWithAuth().put(`https://lambda-practice-db.herokuapp.com/api/post/${props.match.params.id}`, quote)
    .then(res => {
        console.log(res)
        props.history.push('/Quotes');
    })
    .catch(err => console.log(err.response));
};

const fetchQuote = id => {
axios 
.get(`https://lambda-practice-db.herokuapp.com/api/post/${id}`)
.then(res => setQuote(res.data.posts))
.catch(err => console.log(err.response));

}

useEffect(() => {
    fetchQuote(props.match.params.id);
}, [props.match.params.id]);




    return (
        <form onSubmit={handleSubmit}>
            <input 
            name='author'
            value={quote.author}
            onChange={handleChange}
            placeholder='Author'/>
            <br></br>
            <br></br>
            <textarea 
            name='text'
            value={quote.text}
            onChange={handleChange}
            placeholder="Quote" />
            <br></br>
            <br></br>
            <button>Save Edit</button>
        </form>
    )
}

export default EditForm;
