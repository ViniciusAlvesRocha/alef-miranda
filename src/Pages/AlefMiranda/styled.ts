import styled from 'styled-components';
import elementor from '../../dist/assets/elementor.svg';
import code from '../../dist/assets/code.svg';
import photoShop from '../../dist/assets/photo-shop.svg';

const AlefMirandaStyled = styled.section`
    font-family: 'Balgin Regular';
    
    hr {
        position: relative;
        bottom: 168px;
        height: 1px;
        background-color: #222;
        border: none;
    }

    .description-alef {
        width: 50%;

        & > p {
            font-size: 30px;
            margin-bottom: 40px;
            font-family: Arial;
            line-height: 35px;
        }
    }

    .self-alef {
        height: 1000px;
        background-image: url('${elementor}'), url('${code}'), url('${photoShop}');
        background-repeat: no-repeat;
        background-position: 180px -30px, 540px 70px, 100px 250px;
    }
`;

export default AlefMirandaStyled;