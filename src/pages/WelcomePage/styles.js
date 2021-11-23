import styled from 'styled-components'

export const PageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    .logo_container {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40%;
    }

    .message_container {
        display: flex;
        height: 20%;
        flex-direction: column;
        align-content: center;
        justify-content: space-around;
    }

    .logo_container-message {
        position: absolute;
        font-size: 4.7rem;
        font-family: 'Roboto';
        bottom: 51%;
        color: grey;
    }

    .logo_container-quizz {
        width: 100%;
        position: absolute;
        height: 500px;
        object-fit: contain;
    }

    .form_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 20%;
    }

    @media (min-width: 1920px) {
        .logo_container {
            height: 30%;
        }  

        .message_container {
            height: 15%;
        }

        .logo_container-message {
            font-size: 7.7rem;
        }

        .logo_container-quizz {
            height: 800px;
        }


    }

`