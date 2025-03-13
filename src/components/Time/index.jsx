import './Time.css'
import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import { useContext } from 'react';
import { TierListContext } from '../../context/TierListContext';
import { Droppable } from '@hello-pangea/dnd';
import { AiFillCloseCircle } from 'react-icons/ai';


const Time = ({ id, nome, cor, time }) => {

    const { colaboradores, setColaboradores, times, setTimes } = useContext(TierListContext)

    const css = { backgroundColor: hexToRgba(cor, '0.2') }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time => {
            if (time.id === id)
                time.corTime = cor;
            return time
        }))
    }

    function deletarTime(id, nomeTime) {
        setTimes(times.filter(time => time.id !== id))
        setColaboradores(colaboradores.filter(colaborador => colaborador.time !== nomeTime))
    }

    return (

        <Droppable droppableId={nome} type='list' direction='horizontal'>
            {(provided) => (
                <section
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='time'
                    style={css}
                >
                    <div className='categoriaName'>
                        <AiFillCloseCircle
                            size={30}
                            className='deletar'
                            onClick={() => deletarTime(id, nome)}>
                        </AiFillCloseCircle>
                        <input value={cor} onChange={evento => mudarCorDoTime(evento.target.value, id)} type='color' className='input-cor'></input>
                        <h3 style={{ borderColor: cor }}>{nome}</h3>
                    </div>
                    <div className='colaboradores' >
                        {colaboradores.map((colaborador, index) =>
                            colaborador.time === time.nomeTime && (
                                <Colaborador
                                    key={colaborador.id}
                                    id={colaborador.id}
                                    index={index}
                                    nome={colaborador.nome}
                                    imagem={colaborador.imagem}
                                />
                            )
                        )}
                        {provided.placeholder}
                    </div>
                </section >
            )}

        </Droppable>

    )
}

export default Time