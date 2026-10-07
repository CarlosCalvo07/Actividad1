import { useEffect, useState } from "react";

import Navbar from "../components/Navbar.jsx";
import Loading from "../components/Loading.jsx";

import { useAuth } from "../context/AuthContext.jsx";
import { getDashboardRequest } from "../services/api.js";

const Dashboard = () => {
  const { token, user, logout } = useAuth();

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboardRequest(token);

        setData(response.data);
      } catch (error) {
        setError(error.message);

        if (
          error.message === "Token inválido o expirado" ||
          error.message === "Token no proporcionado"
        ) {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [token, logout]);

  return (
    <div className="dashboard-page">
      <Navbar />

      <main className="dashboard-content">
        <section className="dashboard-header">
          <h1>Dashboard protegido</h1>

          <p>
            Bienvenido, {user?.username}
          </p>
        </section>

        {loading && (
          <Loading message="Consultando recurso protegido..." />
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && data && (
          <div className="dashboard-grid">
            <section className="dashboard-card">
              <h2>Autenticación</h2>

              <p>
                Estado:
                <strong> Autenticado</strong>
              </p>

              <p>
                Método:
                <strong> JWT</strong>
              </p>
            </section>

            <section className="dashboard-card">
              <h2>Usuario</h2>

              <p>
                Nombre:
                <strong> {data.user.username}</strong>
              </p>

              <p>
                Rol:
                <strong> {data.user.role}</strong>
              </p>
            </section>

            <section className="dashboard-card">
              <h2>Zero Trust</h2>

              <p>
                Solicitud validada:
                <strong>
                  {data.security.authenticated ? " Sí" : " No"}
                </strong>
              </p>

              <p>
                Zero Trust:
                <strong>
                  {data.security.zeroTrust ? " Activo" : " Inactivo"}
                </strong>
              </p>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;