import logo from './images/github.png';
import photo from './images/luca-bravo-XJXWbfSo2f0-unsplash.jpg';

const App = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🚀  Домашнее Задание Webpack</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Демонстрация работы с Webpack
      </p>


      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ marginBottom: '15px' }}>Пример PNG изображения (128px):</h2>
        <img
          src={logo}
          alt="GitHub Logo"
          style={{ width: '128px', height: 'auto' }}
        />
      </div>

      <div>
        <h2 style={{ marginBottom: '15px' }}>Пример JPG изображения (большой файл):</h2>
        <img
          src={photo}
          alt="Beautiful landscape photo from Unsplash"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.8 }}>
          Фото от Luca Bravo на Unsplash
        </p>
      </div>
    </div>
  );
}

export default App;
