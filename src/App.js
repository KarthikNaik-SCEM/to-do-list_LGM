import './App.css';
import Form from './components/Form';
import Header from './components/Header';


function App() {
  return (
    <div className='container'>
      <div className="d-flex flex-column align-items-center justify-content-center">
      <Header/>
      <Form/>
      </div>
    </div>
  );
}

export default App;
