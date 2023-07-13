import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./routes/Home/home"
import About from "./routes/About/about/about"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Book from "./routes/Book/book"
import SingleBook from "./routes/Book/singleBook"
import UpdateBook from "./routes/Book/updateBook"
import EditBook from "./routes/Book/editBook"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Book />} />
          <Route path='/books/:slug' element={<SingleBook />} />
          <Route path='/updatebook' element={<UpdateBook />} />
          <Route path='/editbook/:slug' element={<EditBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
