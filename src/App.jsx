import { Routes, Route, BrowserRouter } from "react-router-dom"
import Main_Page from "./routes/Main_Page"
import SignUp_Page from "./routes/SignUp_Page"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Signin_Page from "./routes/SignIn_Page"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Main_Page /> } />
          <Route path="/signup" element={ <SignUp_Page /> } />
          <Route path="/signin" element={ <Signin_Page /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
