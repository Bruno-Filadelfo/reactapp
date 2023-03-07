import './style.css';

import { Card } from '../../components/card';

export function Home() {
  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite o nome..."/>
    <button type="button">Adicionar</button>

    <Card name="Bruno Filadelfo" time="08:30:00" />
    <Card name="Lucas Barbosa" time="09:00:30" />
    <Card name="Aline Souza" time="09:15:40" />
    </div>
  )
}

