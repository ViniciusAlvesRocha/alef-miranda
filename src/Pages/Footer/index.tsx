import React from 'react';
import lendFooter from '../../dist/assets/lend-footer.svg';
import FooterStyled from './styled';
import Blur from '../../components/Blur';

const Footer = () => (
    <FooterStyled className="flex justify-around relative bottom-52">
        <img className="mt-64" src={lendFooter} alt="lend footer" />
        <div className="mt-64">
            <h2 className='uppercase bg-black rounded-full border-solid border border-white w-80 text-center p-1'>19 Setembro - Online e gratuito</h2>
            <p className='uppercase balgin my-10'>Aprenda agora a fazer suas primeiras landing pages</p>

            <p>#ANovaEraDaLP</p>

            <button className="cta">Garantir meu lugar agora</button>
        </div>
    </FooterStyled>
);

export default Footer;