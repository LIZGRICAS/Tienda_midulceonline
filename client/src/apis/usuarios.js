const Login = async () => {
    return fetch('https://apimidulceonline.azurewebsites.net/usuarios/login').then((response) =>
        response.json()
).catch((err) => console.log(err));
};

export const usuarios = {
    Login
  };