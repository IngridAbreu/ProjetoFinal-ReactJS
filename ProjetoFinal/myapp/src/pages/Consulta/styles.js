import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D0D0D0;

  @media(max-width: 1180px){
        width: 100%;

}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  margin-top: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #6495ED;

  @media(max-width: 1180px){
        width: 100%;

}
`;

export const Title = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
  color: #404040;

  @media(max-width: 1180px){
        width: 100%;

}
`;

export const Input = styled.input`
      width: 500px;
      height: 40px;
      border-radius: 5px;
      border-color: #6495ED;
      font-size: 30px;
      color: #404040;
      margin-bottom: 20px;
      background-color: #D0D0D0;

      @media(max-width: 1180px){
        width: 100%;

}
`;

export const ContainerCadastro = styled.div`
    position: fixed;
    margin: 0 1em;
    margin-top: 30px;
    top: 20%;
    z-index: 3;
    left: 80%;

    @media(max-width: 1180px){
        top: 0;
        left:50px;
        margin-top: 0;
        position:absolute;
        width: 100%;

}
`;





