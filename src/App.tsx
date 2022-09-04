import { NavMenu } from './components/NavMenu';
import { MyRoute } from './components/MyRoutes';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <div className='content'>
      <MyRoute/>
      </div>
    </div>
  );
}

export default App;
