import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.scss';

const contianer = document.getElementById('root') as HTMLElement;
const root = createRoot(contianer);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);
