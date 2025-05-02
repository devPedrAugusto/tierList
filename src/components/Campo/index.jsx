import './Campo.css'

const Campo = ({ placeholder, type, label, valor, aoAlterado, image, obrigatorio }) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento) => {
        if (image != undefined)
            aoAlterado(evento.target.files[0])
        else
            aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={aoDigitado}
                accept={image ? "image/*" : ""}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default Campo