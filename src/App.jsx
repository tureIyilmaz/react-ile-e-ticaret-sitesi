import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import NotFoundPages from './pages/NotFoundPages';
import Header from './components/Header';
import Footer from './components/Footer';
import Media from './pages/Media';
import Questions from './pages/Questions';
import Visions from './pages/Visions';
import Register from './pages/Register';
import Login from './pages/Login';
import Settings from './pages/Settings';
import SettingsInfo from './pages/SettingsInfo';
import Notifications from './pages/Notifications';
import Security from './pages/Security';
import Cart from './pages/Cart';
import CustomerServices from './pages/CustomerServices';
import Pizza from './pages/Pizza';
import DiscountPizza from './pages/DiscountPizza';
import TrendPizza from './pages/TrendPizza';
import PlentyPizza from './pages/PlentyPizza';
import Sauce from './pages/Sauce';
import Dessert from './pages/Dessert';
import Drink from './pages/Drink';
import Loading from './components/Loading';
import Checkout from './pages/Checkout';
import MobileAppSection from './components/MobileAppSection';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div>
      <Loading />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Products />} >
          <Route path='pizza' element={<Pizza />} />
          <Route path='discount' element={<DiscountPizza />} />
          <Route path='trend' element={<TrendPizza />} />
          <Route path='ingredientsCount' element={<PlentyPizza />} />
          <Route path='sauce' element={<Sauce />} />
          <Route path='dessert' element={<Dessert />} />
          <Route path='drink' element={<Drink />} />
        </Route>
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/visions' element={<Visions />} />
        <Route path='/contact/media' element={<Media />} />
        <Route path='/contact/questions' element={<Questions />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />}>
          <Route path='info' element={<SettingsInfo />} />
          <Route path='security' element={<Security />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='customer-service' element={<CustomerServices />} />
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cart/checkout' element={<Checkout />}></Route>
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
      <MobileAppSection />
      <Footer />
      <ScrollTop/>
    </div>
  )
}

export default App;
