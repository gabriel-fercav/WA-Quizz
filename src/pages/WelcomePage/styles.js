import styled from 'styled-components'

export const PageContainer = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: rgb(253, 231, 97);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .logo_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 35%;
    }

    .logo_container-message {
        position: absolute;
        font-size: 4.7rem;
        font-family: 'Roboto';
        bottom: 51%;
        color: #323232;
    }

    .logo_container-quizz {
        width: 100%;
        height: 400px;
        object-fit: contain;
    }

    .form_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 20%;
    }

`