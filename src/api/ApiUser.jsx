import API_CONFIG from "../config/ApiConfig";

export const getUser = async () => {
  try {
    const response = await fetch(API_CONFIG.userApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const CreateUser = async (newUser) => {
  try {
    const response = await fetch(API_CONFIG.userApiUrl, {
      method: "POST",
      body: JSON.stringify({
        ClientName: newUser.ClientName,
        ClientLastName: newUser.ClientLastName,
        ClientEmail: newUser.ClientEmail,
        ClientCelular: newUser.ClientCelular,
        ClientDateBirthday: newUser.ClientDateBirthday,
        ClientGenero: newUser.ClientGenero,
        ClientTipoDni: newUser.ClientTipoDni,
        ClientNumDni: newUser.ClientNumDni,
        ClientPassword: newUser.ClientPassword,
      }),
      headers: {
        "content-type": "application/json"
      }
    });
    return response.ok;
  } catch (error) {
    return error;
  }
};
