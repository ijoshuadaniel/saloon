import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home, Login } from './pages';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;
