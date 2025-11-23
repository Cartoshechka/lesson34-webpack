import {createRoot} from 'react-dom/client';
import './index.css';
import './fonts.css'
import logo from './images/github.png';
import photo from './images/luca-bravo-XJXWbfSo2f0-unsplash.jpg';

const App = () => {
    return (
        <div>
            <h1>Webpack Homework!</h1>
            <img src={logo} alt="GitHub Logo" style={{width: '128px'}} />
            <img src={photo} alt="Sample Photo" style={{maxWidth: '100%', height: 'auto', marginTop: '20px'}} />
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

