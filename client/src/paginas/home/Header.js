import React from "react";
import "./Header.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { imageBanner, imageLogo } from "../../assets";

const Header = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["diviertete", "sueña", "antójate"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const [cart, setCart] = useState(false);

  const toggleCart = () => {
    setCart(!cart);
  };

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header>
        <nav className="nav-home">
          <li>
            <img src={imageLogo} alt="logo" className="logo-home" />
          </li>
          <li className="burger" onClick={toggleMenu}>
            <i className="bx bx-menu bx-lg " style={{ color: "#fff002" }} />
          </li>
          <div className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
            <ul className="nav-box">
              <li className="container-icono-home">
              <Link to={"/login"} className="icono-home">
                <i className="bx bxs-user bx-lg" style={{ color: "#fff002" }} />
              </Link>              
              <p className="text-burguer">Usuario <br/> Admin</p>
              </li>
              {/* carrito */}
              <li className="two columns u-pull-right">
                <ul>
                  <li className="submenu-home">
                    <h2>
                      <i
                        className="bx bxs-cart-alt bx-tada bx-lg"
                        style={{ color: "#fff002" }}
                        onClick={toggleCart}
                      />
                    </h2>

                    <p className="text-burguer">Carrito</p>
                    <div className={`carrito ${cart ? "isActive" : ""}`}>
                      <table className="lista-carrito u-full-width">
                        <thead>
                          <tr>
                            <th>Img</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cant</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody />
                      </table>
                      <a
                        href="#"
                        className="vaciar-carrito button u-full-width"
                      >
                        Vaciar Carrito
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <li className="buscar-home">
            <input
              type="search"
              className="buscar_texto"
              placeholder="cuentanos que buscas?"
            />
            <a href="#" className="btn_buscar">
              <i className="bx bx-search-alt-2" />
            </a>
          </li>
        </nav>
        <div className="hero">
          <h1>
            ¡Disfruta de una explosión de sabores <br /> y{" "}
            <span ref={el} className="auto-type" /> como niño!
          </h1>
          <img src={imageBanner} className="banner" alt="" />
        </div>
      </header>
    </>
  );
};

export default Header;
