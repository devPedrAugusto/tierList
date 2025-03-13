import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useContext } from 'react'
import { TierListContext } from '../../context/TierListContext'
import { Draggable } from '@hello-pangea/dnd'

const Colaborador = ({ id, index, nome, imagem }) => {

    const { colaboradores, setColaboradores } = useContext(TierListContext)

    const css = { backgroundImage: `url(${imagem})` }

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (

                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                    className='colaborador'
                >
                    <AiFillCloseCircle
                        size={30}
                        className='deletar'
                        onClick={() => deletarColaborador(id)}>
                    </AiFillCloseCircle>
                    <div
                        className='cabecalho'
                        style={css}
                    />
                    <div className='colaborador-rodape'>
                        <h4>{nome}</h4>
                    </div>
                </div>
            )}
        </Draggable>

    )
}

export default Colaborador