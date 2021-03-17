import './App.css';
import { Container } from 'react-bootstrap';
import CustomerPanel from './components/CustomerPanel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container className="App">
      <h1>
        Assignment 1 - RESIT
      </h1>
      <CustomerPanel/>
    </Container>
  );
}

export default App;
