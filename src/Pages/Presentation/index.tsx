import React from 'react';
import PresentationStyled from './styled';
import Heading1Presentation from '../../dist/assets/heading-presentation.png';
import alefMiranda from '../../dist/assets/alef-miranda-presentation.png';
import shadowPresentation from '../../dist/assets/shadow-presentation.svg';

const Presentation = () => (
    <PresentationStyled className="flex justify-between box-border">
        <img className="shadow-top-presantation" src={shadowPresentation} alt="" />
        <div className="container-l-end">
            <img className="l-end" src={Heading1Presentation} alt="</lEnd>" />
            <h1>A Nova Era da Landing Page</h1>
            <p className="mt-5 mb-10">Dê o próximo passo na sua carreira de designer, feche projetos de 5 dígitos através da atividade mais lucrativa no mercado de design</p>

            <div className="retangle"></div>
            <div className="retangle"></div>
            <button className="text-white">Garantir meu lugar agora</button>
            <p className="mt-3 mb-10"><span className="font-bold">Importante:</span> o endereço de e-mail informado deve ser válido para que você possa ter acesso ao conteúdo.</p>

            <div className="container">
                <div className="">Um evento online e gratuito para te mostrar como dar o próximo passo como um designer</div>
            </div>
        </div>

        <div className="alef-miranda mt-28">
            <img src={alefMiranda} alt="Alef Miranda" />
        </div>
    </PresentationStyled>
);

export default Presentation;