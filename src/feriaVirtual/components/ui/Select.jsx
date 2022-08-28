import './ui.css'

export const Select = () => {
    return (
        <>
            <select className="form-select grid text-center pose tamaño" >
                <option >Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </>
    )
}
