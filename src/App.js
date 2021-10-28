
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Megafon from './componets/Megafon/Megafon';
import Beeline from './componets/Beeline/Beeline';
import Mts from './componets/Mts/Mts';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='main__grid'>
        <Header></Header>
        <Navbar></Navbar>
        <div className='main__content'>
        <Route path="/Megafon" render={ () => <Megafon/>} />
        <Route path="/Beeline" render={ () => <Beeline/>} />
        <Route path="/Mts" render={ () => <Mts/>} />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
