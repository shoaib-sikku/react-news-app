import Navbar from './components/Navbar'
import AllNews from './components/AllNews';
import Footer from './components/Footer';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<AllNews></AllNews>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
