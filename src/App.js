import Header from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
   <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Home/>} />
      <Route path='/movies/:movieId' element={<MovieDetail />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
    </BrowserRouter>

    

   </div>
  );
}

export default App;
