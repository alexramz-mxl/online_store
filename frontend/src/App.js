
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './Pages/Catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import ShoppingList from './Pages/ShoppingList';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Catalog />
      
      <ShoppingList />

      <Footer />
    </div>
  );
}

export default App;
