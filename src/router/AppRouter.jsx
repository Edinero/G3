import { Route, Routes, BrowserRouter, Navigate  } from "react-router-dom";
import MoviesApp from "../pages/MoviesApp";
import { useContext } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginUser from "../pages/LoginUser";
import MovieDetails from "../pages/MovieDetails";
import RegisterUser from "../pages/RegisterUser";
import Comprar from "../pages/Comprar";
import { AuthContext } from "../context/AuthContext";
import Promociones from "../pages/Promociones";
import MoviesTop from "../pages/MoviesTop";


const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesApp />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/registrar" element={<RegisterUser />} />
        {isAuth() ? (
          <Route path="/comprar" element={<Comprar />} />
        ) : (
          <Route
            path="/comprar"
            element={<Navigate to="/login" replace />}
          />
        )}
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/peliculastop" element={<MoviesTop />} />
        
        <Route path="*" element={<MoviesApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
