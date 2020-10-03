import React from 'react';

import { Button } from '@material-ui/core';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import { 
  Card, 
  P1, 
} from './styles';

const Cliente = (props) => {


  return (
    <>
      <Card>
        <P1>ID: {props.clientes.id}</P1>
        <P1>Cliente: {props.clientes.nome}</P1>
        <P1>Usuario: {props.clientes.usuario}</P1>
        <P1>CPF: {props.clientes.cpf}</P1>
        <P1>E-mail: {props.clientes.email}</P1>
        <P1>Nascimento: {format(new Date(props.clientes.dataNascimento), 'dd/MM/yyyy')}</P1>
        <P1>Endereco: <br /></P1>
        <P1>Rua: {props.clientes.endereco?.rua}</P1>
        <P1>Nº: {props.clientes.endereco?.numero}</P1>
        <P1>Complemento: {props.clientes.endereco?.complemento}</P1>
        <P1>Bairro: {props.clientes.endereco?.bairro}</P1>
        <P1>Cidade: {props.clientes.endereco?.cidade}</P1>
        <P1>Estado: {props.clientes.endereco?.estado}</P1>
        <P1>Cep: {props.clientes.endereco?.cep}</P1>
        <br />
        <Link to={`/editar/${props.clientes.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Editar
          </Button>
        </Link>
      </Card>
    </>
  )
}

export default Cliente;