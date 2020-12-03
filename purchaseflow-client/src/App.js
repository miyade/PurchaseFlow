import './App.css';
import { Container } from 'reactstrap';
import Routes from './routes';
import Header from './pages/header/Header'; 
import Footer from './pages/footer/Footer'; 

function App() {
  return (
    <div> 
    <Header></Header>
    <Container>
      
      <Routes/>
    </Container>
    <Footer></Footer>
    </div>

   
  );
}

export default App;
