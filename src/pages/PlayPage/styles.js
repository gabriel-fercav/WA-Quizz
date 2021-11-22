import styled from 'styled-components'

export const PageContainer = styled.main`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    .form_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 25%;
    }

    .card_container {
        width: 50%;
    }

    @media (max-width: 900px) {
            padding: 10px 0px;

            .card_container {
                width: 90%;
            }
        }


`