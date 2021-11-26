import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "../components/Layout";
import Carta from "../containers/Carta/Carta";
import Nosotros from "../containers/Nosotros/Nosotros";
import Servicios from "../containers/Servicios/Servicios";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
import Reserva from "../containers/Reserva/reserva";
import Carrito from "../containers/Carrito/Carrito";
import Mapa from "../containers/Mapa/Mapa";
import Login from "../containers/Login/Login";
import Register from "../containers/Login/Register";
import UpdateCarta from "../containers/Carta/UpdateCarta";
import InicioAdmin from "../containers/Login/InicioAdmin";
import Contact from "../containers/ContacUs/ContactUs";
import Comentarios from "../containers/Comentarios/Comentarios";
import ReservasAdmin from "../containers/ReservasAdmin/ReservasAdmin";
import ComentariosAdmin from "../containers/ComentariosAdmin/ComentariosAdmin";
import NosotrosAdmin from "../containers/NosotrosAdmin/NosotrosAdmin";
import ServiciosAdmin from "../containers/ServiciosAdmin/ServiciosAdmin";
import ContactanosAdmin from "../containers/ContactanosAdmin/ContactanosAdmin";
/* 
  función que permite crear todas las rutas de la página:
  -. Es necesario de traer un componente que desde los containers.
  -. Si no existe una ruta específica se direcciona al componente NotFound
*/

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Layout>
          <Switch>
            {localStorage.getItem("isAdmin") ? (
              <Route exact path="/" component={InicioAdmin} />
            ) : (
              <Route exact path="/" component={Home} />
            )}
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/carta" component={Carta} />
            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/reserva" component={Reserva} />
            <Route exact path="/contactanos" component={Contact} />
            <Route exact path="/carrito" component={Carrito} />
            <Route exact path="/mapa" component={Mapa} />
            <Route exact path="/comentarios" component={Comentarios} />

            {/* <Route exact path="/signin">
              <Redirect to="/" />
            </Route> */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            {localStorage.getItem("isAdmin") ? (
              <>
                <Route exact path="/updateCarta" component={UpdateCarta} />
                <Route exact path="/Admin/Reservas" component={ReservasAdmin} />
                <Route
                  exact
                  path="/Admin/Comentarios"
                  component={ComentariosAdmin}
                />

                <Route exact path="/Admin/Nosotros" component={NosotrosAdmin} />

                <Route
                  exact
                  path="/Admin/Contactanos"
                  component={ContactanosAdmin}
                />
                <Route
                  exact
                  path="/Admin/Servicios"
                  component={ServiciosAdmin}
                />
              </>
            ) : null}

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </BrowserRouter>
  );
}

export default App;
