import React from 'react';
import AlefMirandaStyled from './styled';
import alef from '../../dist/assets/alef.png';


const AlefMiranda = () => (
    <AlefMirandaStyled >
        <div className="flex justify-between pl-10" >
            <div className='description-alef mt-52'>
                <h2 className="text-4xl mb-10">Alef Miranda</h2>
                <p>Designer/Diretor de Arte para Infoprodutores e construções de Sites/Landing Pages. Hoje, possuo mais de 1.000 alunos por meio do curso Carrossel do Zero, Grid Perfeito e Trello para Designers ensino tudo o que sei de uma maneira simples, direta e sem enrolação.</p>

                <p> Criar Landing Pages foi, sem dúvidas, a melhor decisão que já fiz na vida. Aprendi agregar valor ao meu trabalho e ainda a como faturar 3 vezes mais. Contrato rápido, fácil e com uma oportunidade escalável muito grande.</p>
            </div>
            <div className="self-alef flex justify-end w-1/2 pt-40 pr-10">
                <img className="w-4/5 h-4/5" src={alef} alt="self Alef" />
            </div>
        </div>
        <hr />
    </AlefMirandaStyled>
);

export default AlefMiranda