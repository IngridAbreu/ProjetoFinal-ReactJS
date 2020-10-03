import React, { useEffect, useState } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import api from '../../services/api';

import {
  Container,
  TitleContainer,
  Title,
  Input,
  ContainerCadastro,

} from './styles';


const Consulta = () => {
  const [clientes, setClientes] = useState([]);
  const [newId, setNewId] = useState('');

  useEffect(() => {

    api.get(`/cliente/`).then(response => {
      setClientes(response.data)
    })
  }, [])

  const handleSearch = async (event) => {
    event.preventDefault();

    if (newId === '') {
      const allClients = await api.get(`/cliente`);
      setClientes(allClients.data);

    } else {
      const cliente = await api.get(`/cliente/${newId}`);
      setClientes([cliente.data]);

    }
  };


  return (
    <Container>
      <TitleContainer>
        <Title> Sistema Interno</Title>
      </TitleContainer>
      <ContainerCadastro>
        <Link to='/cadastrar' style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Cadastrar um Cliente</Button></Link>
      </ContainerCadastro>
      <form onSubmit={handleSearch}>
        <Input value={newId} onChange={event => setNewId(event.target.value)} placeholder="Buscar por ID" />
      </form>
      {
        clientes.map(cliente => (
          <Card clientes={cliente} />
        ))
      }
    </Container >
  )
}

export default Consulta;