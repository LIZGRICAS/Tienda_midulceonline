import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import Footer from "../../componentes/Footer";

const Login = () => {
  //para redireccionar de un componente a otro
  const navigate = useNavigate();

  //definimos el estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("email").focus();
  }, []);

  const iniciarSesion = async () => {
    if (password.length < 6) {
      const msg = "La contraseña debe ser al menos de 6 caracteres.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const data = {
        email: usuario.email,
        password: usuario.password,
      };
      const response = await APIInvoke.invokePOST(`/api/auth`, data);
      const mensaje = response.msg;

      if (
        mensaje === "El usuario no existe" ||
        mensaje === "Contraseña incorrecta"
      ) {
        const msg =
          "No fue posible iniciar la sesión verifique los datos ingresados.";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else {
        //obtenemos el token de acceso jwt
        const jwt = response.token;

        //guardamos el token en el localstorage
        localStorage.setItem("token", jwt);

        //redireccionamos al home la pagina principal
        navigate("/admin");
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  return (
    <>
      <div className="vh-90 log-box ">
        <div className="container-fluid h-custom">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Iniciar</b> Sesión
            </Link>
          </div>
          <div className="login-container d-flex justify-content-center align-items-center ">
            <img
              src="https://i.ibb.co/v4C3D82/Banner-de-You-Tube-Gamer-Juego-de-MMO-Rol-Moderno-Amarillo-y-Morado.gif"
              className="img-fluid"
              alt="Banner"
            />
            <div className="card card-login-width">
              <div className="card-body login-card-body">
                <p className="login-box-msg">
                  Bienvenido, ingrese sus credenciales.
                </p>

                <form onSubmit={onSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>

                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="social-auth-links text-center-cuenta mb-3">
                    <button type="submit" className="btn btn-block btn-primary">
                      Ingresar
                    </button>
                    <Link
                      to={"/crear-cuenta"}
                      className="btn btn-block btn-danger"
                    >
                      Crear Cuenta
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
