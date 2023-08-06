import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Questions';


function App() {
  const [questions,setQuestion] = useState(data)
  return(
    <main className='container'>
      <h3>FAQs about Login</h3>
      <section className='info'>
        {
          questions.map((question) =>{
            return (
              <SingleQuestion key={question.id} {...question}/>
            );
          })
        }
      </section>
    </main>
  )
}

export default App;

