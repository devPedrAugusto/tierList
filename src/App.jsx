import { useContext } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from '../src/components/Rodape'
import { TierListContext } from './context/TierListContext';
import SemTier from './components/SemTier';
import { DragDropContext } from '@hello-pangea/dnd';

function App() {

  const { colaboradores, setColaboradores, times } = useContext(TierListContext);

  const handleDragEnd = (result) => {
    const destino = result.destination;

    if (!destino)
      return

    const colaboradoresAtualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === result.draggableId) {
        return { ...colaborador, time: destino.droppableId };
      }
      return colaborador;
    });

    setColaboradores(colaboradoresAtualizados);
  };


  return (
    <div className="App">

      <Banner />
      <Formulario />

      <DragDropContext onDragEnd={handleDragEnd}>
        {times.map(time =>
          <Time
            id={time.id}
            key={time.id}
            nome={time.nomeTime}
            cor={time.corTime}
            time={time}
          />)}

        <SemTier />
      </DragDropContext>

      < Rodape />

    </div>
  );
}

export default App;