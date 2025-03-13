import { useContext, useState } from 'react'
import './Formulario.css'
import Botao from '../Botao'
import Campo from '../Campo'
import { v4 as uuidv4 } from 'uuid';
import { TierListContext } from '../../context/TierListContext'


const Formulario = () => {

    const {
        times, setTimes, setColaboradores
    } = useContext(TierListContext);

    const [existeCategoria, setExisteCategoria] = useState(false)
    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores(colaboradores => [...colaboradores, colaborador])
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, { ...novoTime, id: uuidv4() }])
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoNovoColaboradorAdicionado({
            id: uuidv4(),
            nome,
            imagem,
            time: "Sem time"
        })
        setNome('')
        setImagem('')
    }

    return (
        <>
            <section className="formulario">

                <form onSubmit={(evento) => {
                    evento.preventDefault()
                    setExisteCategoria(true)
                    return cadastrarTime({ nomeTime, corTime })
                }}>
                    <h2>Preencha os dados para criar uma nova categoria</h2>
                    <Campo
                        obrigatorio
                        label="Nome"
                        placeholder="Digite o nome da categoria"
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />
                    <Campo
                        //obrigatorio
                        type='color'
                        label="Cor"
                        placeholder="Digite a cor do time"
                        valor={corTime}
                        aoAlterado={valor => setCorTime(valor)}
                    />
                    <Botao>
                        Criar categoria
                    </Botao>
                </form>

                {existeCategoria &&
                    <form onSubmit={aoSalvar}>
                        <h2>Preencha os dados para criar o card do colaborador</h2>
                        <Campo
                            obrigatorio={true}
                            label="Nome"
                            placeholder="Digite seu nome"
                            valor={nome}
                            aoAlterado={valor => setNome(valor)}
                        />
                        <Campo
                            label="Imagem"
                            placeholder="Digite o endereço da imagem"
                            valor={imagem}
                            aoAlterado={valor => setImagem(valor)}
                        />
                        <Botao>
                            Criar Card
                        </Botao>
                    </form>
                }

            </section>
        </>
    )
}

export default Formulario