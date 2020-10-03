import styled from 'styled-components';

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

export const P1 = styled.p`
    border: 5px solid #6495ED;
    border-radius: 50px 50px 50px 50px;
    margin: 3px;
    padding: 5px;
    font-size: 1.5em;
    font-family: Roboto;

    @media(max-width: 1180px){
        width: 100%;

}
`;

