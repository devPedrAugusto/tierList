import './SemTier.css';
import React, { useContext, useEffect, useState } from 'react';
import { TierListContext } from '../../context/TierListContext';
import Colaborador from '../Colaborador';
import { Droppable } from '@hello-pangea/dnd';

const SemTier = () => {
    const { colaboradores } = useContext(TierListContext);

    const [colaboradorsemTier, setColaboradorsemTier] = useState(null);

    useEffect(() => {
        const colaboradorEncontrado = colaboradores.find(
            (colaborador) => colaborador.time === 'Sem time'
        );

        setColaboradorsemTier(colaboradorEncontrado);

    }, [colaboradores]);

    return (
        colaboradorsemTier && (
            <Droppable droppableId="Sem Tier" type="list" direction="horizontal">
                {(provided) => (
                    <section className="semTier">
                        <h3>Sem Tier</h3>
                        <div
                            className="semTierFlex"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {colaboradores
                                .filter((colaborador) => colaborador.time === 'Sem time')
                                .map((colaborador, index) => (
                                    <Colaborador
                                        key={colaborador.id}
                                        id={colaborador.id}
                                        index={index}
                                        favorito={colaborador.favorito}
                                        nome={colaborador.nome}
                                        imagem={colaborador.imagem}
                                    />
                                ))}
                            {provided.placeholder}
                        </div>
                    </section>
                )}
            </Droppable>
        )
    );
};

export default SemTier;
