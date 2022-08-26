import './App.css';
import TopBar from './components/TopBar';
import UserDetails from './components/UserDetails';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <TopBar />
      <UserDetails />
      <Content />
    </div>
  );
}

export default App;
