import styled from "styled-components";

const Conteiner = styled.main `
    width: 80%;
    margin: 0 auto;
    display: flex;
    margin-top: 20px;

    @media(max-width: 800px){
        flex-direction: column;
        gap: 20px;
    }
`
export default Conteiner