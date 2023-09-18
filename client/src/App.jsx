import './App.css'
import { Routes, Route } from 'react-router-dom'
// import ProductComponent from './components/ProductComponent.jsx'
import Store from './views/Store'
import Detail from './views/Detail'
import NavBar from './components/NavBar/NavBar'
// import Filtersa from './components/Filter/filterOptions'
import Filters from './components/Filter/filterCard'
import Login from './components/Login/Login'
import About from './views/About'
import ContactForm from './components/Contact/ContactForm'
import Faqs from './views/Faqs'
import Footer from './components/Footer/Footer'






function App() {

  return (
    <div className="App">
        
        <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store/:productId" element={<Detail />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/filter" element={<Filters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/faqs" element={<Faqs />} />

        </Routes>
        <Footer />

    </div>
  )
}

export default App