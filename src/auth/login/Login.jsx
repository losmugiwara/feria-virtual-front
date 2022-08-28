import './login.css';

export const Login = () => {
    return (
        <div className="login-contenedor p-4">
        <h3>Iniciar Sesión</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Correo electronico</label>
                    <input
                        type="email"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                </div>
                <button type="submit" className="btn btn-form fw-semibold font-Jaldi">Iniciar Sesión</button>
            </form>
        </div>
    )
}
