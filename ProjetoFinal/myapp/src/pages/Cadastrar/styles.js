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
  margin-bottom: 5px;
  color: #6495ED;

  @media(max-width: 1180px){
        width: 100%;

}
`;

export const Title = styled.div`
  font-size: 50px;
  color: #404040;
  
  @media(max-width: 1180px){
        width: 100%;

}
`;

export const Card = styled.div`
    width: 45%;
    height: 80%;
    border: 5px solid #6495ED;
    border-radius: 1% 1% 1% 1%;
    color: #404040;
    background-color: 	#E0E0E0;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;

    @media(max-width: 1180px){
        width: 100%;

}
`;

export const Input = styled.input`
    width: 45%;
    height: 70%;
    border: 5px solid #6495ED;
    border-radius: 50px 50px 50px 50px;    
    color: #404040;
    background-color: 	#E0E0E0;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;
    font-size: 1.5em;
    font-family: Roboto;

    @media(max-width: 1180px){
        width: 100%;

}
`;