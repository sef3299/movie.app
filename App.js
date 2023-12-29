
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './components/data';
import Movielists from './components/Movielist';
import Navbar1 from './components/Navbar';

function App() {
  console.log(data)
  const obj =JSON.parse(localStorage.getItem('movie'))
  data.push(obj)
  return (
    <div className="App">
     <Navbar1/>
     <Movielists movies={data}/>
    </div>
  );
}

export default App;
