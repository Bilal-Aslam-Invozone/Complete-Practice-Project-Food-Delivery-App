import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login'
import PrivateComponent from './components/Login/PrivateComponent';
import GetProducts from './components/Products/GetProducts/GetProducts';
import AddProducts from './components/Products/AddProducts/AddProducts';
import UpdateProducts from './components/Products/UpdateProducts/UpdateProducts';
import DeleteProduct from './components/Products/DeleteProducts/DeleteProduct';
function App() {
  return (
    <div className="App">
      {/* <h1>FoodDeliveryApp Dashboard</h1> */}
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<GetProducts/>}/>
        <Route path='/add' element={<AddProducts/>}/>
        <Route path='/update' element={<UpdateProducts/>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
        <Route path='/delete' element={<DeleteProduct/>}/>
        <Route path='/profile' element={<h1>Profile Component</h1>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/> 
    </div>
  );
}

export default App;
