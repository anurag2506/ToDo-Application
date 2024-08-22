import './App.css';
import Navbar from './components/navbar/navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;