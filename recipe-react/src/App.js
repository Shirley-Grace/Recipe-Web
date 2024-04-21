import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import Results from './components/Results';


function App() {
  return (
    <div className="App">
      <Header />
      <div class="content">

      <Card />
      <Results/>
      <Results/>
      <Results/>

      </div>
      <Footer />


    </div>
  );
}

export default App;
