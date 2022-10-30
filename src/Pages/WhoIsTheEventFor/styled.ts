import styled from 'styled-components';

const WhoIsTheEventForStyled = styled.div`

    h2 {
        border: 1px solid #fbb962;
        border-radius: 15px;
    }

    .is-for-me {
        box-shadow: 0px 0px 19px rgba(251, 185, 98, 0.67);
    }

    .bus {
        position: absolute;
    }

    .is-for-me-items {
        height: 200px;
        & p {
            width: 311px;
        }
        .want-make {
            position: relative;
            bottom: 370px;
            right: 480px;
        }

        .already-think {
            position: relative;
            bottom: 250px;
            left: 70px;
        }

        .what-is-designer {
            position: relative;
            bottom: 650px;
            left: 520px;
        }
    }

`;

export default WhoIsTheEventForStyled;