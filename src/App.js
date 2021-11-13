import './App.css';
import Card from './components/Card/Card';
import CardImg from './components/Card/CardImg/CardImg'

function App() {
  return (
    <div className="App-container">
      <Card
        width="18rem"
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        btnName="Go somewhere"
      >
        <CardImg
          src="https://picsum.photos/300/200"
          alt="Plug"
        />
      </Card>
    </div>
  );
}

export default App;
