import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import  axios  from 'axios';
import { Route} from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { useState } from 'react';
function App() {
const[name , setName]= useState("");
const[questions , setQuestions]= useState("");
const[score , setScore]= useState(0);
const fetchQuestions= async(category="", difficulty="")=>{
   const {data}=  await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}& type=multiple`);

  //  console.log(data);
  setQuestions(data.results);
};
  return (
    <BrowserRouter>
    <div className="App" style = {{backgroundImage: 'url(./d.png'}}>
     <Header  />
     <Routes>
      <Route path="/" element={<Home name={name} setName={setName}  fetchQuestions={fetchQuestions }/>}>
        
      </Route>
      <Route path="/quiz" element={<Quiz name={name} questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
      />}>
        
      </Route>
      <Route path="/result" element={<Result name={name} score={score}/>}>
        
      </Route>
     </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
