import { Container, Navbar } from 'reactstrap';
import { NavMenu } from './components/NavMenu';
import { MyRoute } from './components/MyRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavMenu />
          </Container>
        </Navbar>
      </header>
      <div className='content'>
        <MyRoute />
      </div>
    </div>
  );
}

export default App;
