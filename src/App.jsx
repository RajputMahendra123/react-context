import PageNotFound from './components/404/PageNotFound';
import AddTodo from './components/To-Do/AddTodo';
import Home from './components/Home/Home';
import Login from './components/Login/Login'
import Profile from './components/Profile'
import CombinedContextProvider from './context/CombinedContextProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <CombinedContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/> 
          <Route path="/" element={<Login />}/> 
          <Route path="/login" element={<Login />}/> 
          <Route path="/profile" element={<Profile />}/> 
          <Route path="/add-to-do" element={<AddTodo />}/> 
          <Route  path='*' element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  </CombinedContextProvider >
  )
}

export default App