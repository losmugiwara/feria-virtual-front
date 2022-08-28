import './login.css'

export const CreateAccount = () => {
    return (
        <div className="contenedor p-4">
            <h3>Crear Cuenta</h3>
            <form >
                <div className="mb-3 d-grid">
                    <div>
                        <label className="form-label">Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label className="form-label">Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electronico</label>
                    <input
                        type="email"
                        className="form-control"
                    />
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
