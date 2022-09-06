import './login.css'
import { useForm } from '../../../hooks/useForm';
import { registerApi } from '../../../helpers/auth';

export const CreateAccount = () => {
    const {formState, onInputChange} = useForm({
        name: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    }); 


    const onClickRegister = async (e) => {
        e.preventDefault();

        const user = {
            name: formState.name,
            lastName: formState.lastName,
            userName: formState.username,
            email: formState.email,
            password: formState.password,
            roles: ["ROLE_CUSTOMER_EXTERNAL"]
        }

        const resp = await registerApi(user);

        console.log(resp);

    }


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
                            value={formState.name}
                            name="name"
                            onChange={onInputChange}
                        />
                    </div>
                    <div>
                        <label className="form-label">Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formState.lastName}
                            name="lastName"
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        value={formState.username}
                        name="username"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electronico</label>
                    <input
                        type="email"
                        className="form-control"
                        value={formState.email}
                        name="email"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password"
                        className="form-control"
                        value={formState.password}
                        name="password"
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3 form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-form fw-semibold font-Jaldi"
                    onClick={onClickRegister}
                    >Iniciar Sesión</button>
            </form>
        </div>
    )
}
