import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../../services/api';
import {
  Container,
  TitleContainer,
  Title,
  Card,
  Input,
  Div,
  Div2,

} from './styles';

const Editar = () => {
  const { params } = useRouteMatch();
  const history = useHistory();
  const [userData, setUserData] = useState({
    nome: '',
    usuario: '',
    cpf: '',
    email: '',
    dataNascimento: '',
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  });

  useEffect(() => {

    api.get(`/cliente/${params.id}`).then(response => {
      setUserData(response.data)
    })
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { dataNascimento } = userData
    const formatedDate = format(new Date(dataNascimento), "yyyy-MM-dd'T'HH:mm:ss'Z'")
    const data = { ...userData, dataNascimento: formatedDate }

    const response = await api.put(`/cliente/${params.id}`,
      data
    ).then(response => { history.push('/') })
  };

  const handleDelet = async (event) => {
    event.preventDefault();

    const response = await api.delete(`/cliente/${params.id}`).then(response => { history.push('/') })

  };


  return (
    <Container>
      <TitleContainer>
        <Title> Cadastro </Title>
      </TitleContainer>
      <Card>
        <Input placeholder="Nome" value={userData.nome} type="text" required onChange={event => setUserData({ ...userData, nome: event.target.value })}></Input>
        <Input placeholder="Usuario" value={userData.usuario} type="text" required onChange={event => setUserData({ ...userData, usuario: event.target.value })}></Input>
        <Input placeholder="Cpf" value={userData.cpf} type="text" required onChange={event => setUserData({ ...userData, cpf: event.target.value.toString() })}></Input>
        <Input placeholder="E-mail" value={userData.email} type="email" required onChange={event => setUserData({ ...userData, email: event.target.value })}></Input>
        <Input placeholder="Data de Nascimento" value={userData.dataNascimento} type="date" required onChange={event => setUserData({ ...userData, dataNascimento: event.target.value })}></Input>
        <Input placeholder="Rua" value={userData.endereco.rua} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, rua: event.target.value } })}></Input>
        <Input placeholder="Numero" value={userData.endereco.numero} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, numero: event.target.value.toString() } })}></Input>
        <Input placeholder="Complemento" value={userData.endereco.complemento} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, complemento: event.target.value } })}></Input>
        <Input placeholder="Bairro" value={userData.endereco.bairro} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, bairro: event.target.value } })}></Input>
        <Input placeholder="Cidade" value={userData.endereco.cidade} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cidade: event.target.value } })}></Input>
        <Input placeholder="Estado" value={userData.endereco.estado} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, estado: event.target.value } })}></Input>
        <Input placeholder="Cep" value={userData.endereco.cep} type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cep: event.target.value.toString() } })}></Input>
        <Div>
          <Button onClick={handleSubmit} variant="contained" color="primary"> Atualizar </Button>
        </Div>
        <Div2>
          <Button onClick={handleDelet} variant="contained" color="primary"> Deletar </Button>
        </Div2>
      </Card>
    </Container>
  )

}

export default Editar;