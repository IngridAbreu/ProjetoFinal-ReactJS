import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { Button } from '@material-ui/core';
import api from '../../services/api';

import {
  Container,
  TitleContainer,
  Title,
  Card,
  Input,

} from './styles';




const Cadastrar = () => {
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
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { dataNascimento } = userData
    const formatedDate = format(new Date(dataNascimento), "yyyy-MM-dd'T'HH:mm:ss'Z'")
    const data = { ...userData, dataNascimento: formatedDate }

    const response = await api.post('/cliente',
      data
    ).then(response => { history.push('/') })
  };



  return (
    <Container>
      <TitleContainer>
        <Title> Cadastro </Title>
      </TitleContainer>
      <Card>
        <Input placeholder="Nome" type="text" required onChange={event => setUserData({ ...userData, nome: event.target.value })}></Input>
        <Input placeholder="Usuario" type="text" required onChange={event => setUserData({ ...userData, usuario: event.target.value })}></Input>
        <Input placeholder="Cpf" type="text" required onChange={event => setUserData({ ...userData, cpf: event.target.value.toString() })}></Input>
        <Input placeholder="E-mail" type="email" required onChange={event => setUserData({ ...userData, email: event.target.value })}></Input>
        <Input placeholder="Data de Nascimento" type="date" required onChange={event => setUserData({ ...userData, dataNascimento: event.target.value })}></Input>
        <Input placeholder="Rua" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, rua: event.target.value } })}></Input>
        <Input placeholder="Numero" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, numero: event.target.value.toString() } })}></Input>
        <Input placeholder="Complemento" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, complemento: event.target.value } })}></Input>
        <Input placeholder="Bairro" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, bairro: event.target.value } })}></Input>
        <Input placeholder="Cidade" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cidade: event.target.value } })}></Input>
        <Input placeholder="Estado" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, estado: event.target.value } })}></Input>
        <Input placeholder="Cep" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cep: event.target.value.toString() } })}></Input>
        <br />
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Cadastrar um Cliente
          </Button>
      </Card>
    </Container>
  )

}

export default Cadastrar;


// {
// //   cpf: "65782885033",
// //   dataNascimento: "2019-05-19T21:00:00Z",
// //   email: "maycon22@gmail.com",
// //   endereco: { rua: "Brasil", numero: "15", complemento: "G", bairro: "Brasil", cidade: "Petropolis"

// // }
// //   nome: "maycon"
// //   usuario: "maycon22"
// // }


    // nome: "Sr L ",
    // usuario: "srlusuario",
    // cpf: "65782885033",
    // email: "srl@gmail.com",
    // dataNascimento: "2019-05-20T00:00:00Z",
    // endereco: {
    //   rua: "Brasil",
    //   numero: "15",
    //   complemento: "L",
    //   bairro: "Papagaio",
    //   cidade: "Tucano",
    //   estado: "RJ",
    //   cep: "25255225"
    // }

//     cpf: "65782885033"
// dataNascimento: "1997-10-22T22:00:00Z"
// email: "maycon22@gmail.com"
// endereco:
// bairro: "Brasil"
// cep: "25635114"
// cidade: "Petropolis"
// complemento: "G"
// estado: "RJ"
// numero: "15"
// rua: "Brasil"
// __proto__: Object
// nome: "Maycon"
// usuario: "maycon22"



/*<input placeholder="Nome" type="text" required onChange={event => setUserData({ ...userData, nome: event.target.value })}></input>
<input placeholder="Usuario" type="text" required onChange={event => setUserData({ ...userData, usuario: event.target.value })}></input>
<input placeholder="Cpf" type="text" required onChange={event => setUserData({ ...userData, cpf: event.target.value.toString() })}></input>
<input placeholder="E-mail" type="email" required onChange={event => setUserData({ ...userData, email: event.target.value })}></input>
<input placeholder="Data de Nascimento" type="date" required onChange={event => setUserData({ ...userData, dataNascimento: event.target.value })}></input>
<input placeholder="Rua" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, rua: event.target.value } })}></input>
<input placeholder="Numero" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, numero: event.target.value.toString() } })}></input>
<input placeholder="Complemento" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, complemento: event.target.value } })}></input>
<input placeholder="Bairro" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, bairro: event.target.value } })}></input>
<input placeholder="Cidade" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cidade: event.target.value } })}></input>
<input placeholder="Estado" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, estado: event.target.value } })}></input>
<input placeholder="Cep" type="text" required onChange={event => setUserData({ ...userData, endereco: { ...userData.endereco, cep: event.target.value.toString() } })}></input>
<br />
<button onClick={handleSubmit}>Criar Usuario</button>*/