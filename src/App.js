import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import NotFound from './components/NotFound';
import userData from './data/userData';
import UserDetail from './components/UserDetail';

function App() {
  const users = userData;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/users" element={<UserList users={users}/>}/>
            <Route path="/users/:id" element={<UserDetail users={users}/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
