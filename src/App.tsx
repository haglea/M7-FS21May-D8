import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import MyNavbar from './Components/MyNavbar';
import MyHome from './Components/MyHome';
import MyTrack from './Components/MyTrack';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Container>
        <MyNavbar />
        <Route exact path="/" component={MyHome} />
        <Route exact path='/:id' component={MyTrack} />
      </Container>
    </Router> 
  );
}

export default App;