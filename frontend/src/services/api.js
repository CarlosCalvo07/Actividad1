const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const loginRequest = async (username, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "No fue posible iniciar sesión"
    );
  }

  return data;
};

export const getDashboardRequest = async (token) => {
  const response = await fetch(`${API_URL}/dashboard`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "No fue posible obtener el Dashboard"
    );
  }

  return data;
};