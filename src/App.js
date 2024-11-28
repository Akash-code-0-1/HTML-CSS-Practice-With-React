import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>HTML CSS PRACTICE</h1>

      <div className='tags'>
        <span>Heading Tag</span>
        <Heading />
      </div>

      <div className='tags'>
        <span>HTML Paragraphs</span>
        <Paragraph />
      </div>

      <footer>
        <p>&copy; 2024 JuNnOs TiMe</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </footer>


    </div>
  );
}

export default App;
