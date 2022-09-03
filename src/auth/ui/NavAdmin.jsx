import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"


export const NavAdmin = () => {
    return (
        <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
                <NavLink className="nav-link" to=''>Productor <FontAwesomeIcon icon={faPlus}/></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to=''>Cliente interno <FontAwesomeIcon icon={faPlus}/></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to=''>Cliente externo <FontAwesomeIcon icon={faPlus}/></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to=''>Transportista <FontAwesomeIcon icon={faPlus}/></NavLink>
            </li>
        </ul>
    )
}
