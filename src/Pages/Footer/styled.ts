import styled from 'styled-components';
import blurBottom from '../../dist/assets/blur-bottom.svg';

const FooterStyled = styled.section`
    height: 50vh;

    & > img {
        width: 40%;
        height: 200px;
    }

    .cta {
        background: linear-gradient(269.01deg, #FBB962 -32.41%, #BB93D1 96.36%);
        border-radius: 9px;
    }
`;

export default FooterStyled;