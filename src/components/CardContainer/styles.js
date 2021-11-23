import styled from 'styled-components'

export const Container = styled.main`
        display: flex;
        width: 50%;
        flex-direction: column;
        padding-top: 3%;
        align-items: center;
        margin-bottom: 30px;
        justify-content: space-around;
        height: 25%;

        @media (max-width: 900px) {
            width: 80%;
            padding-top: 3%;
        }


`