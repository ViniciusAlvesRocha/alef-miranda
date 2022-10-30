import {Item} from '../components/IsForMeItem';
import circuitItem from '../dist/assets/circuit1.svg';



const Items: Item[]  = [
    {
        img: circuitItem,
        description: 'Quer fazer parte do grupo de designers que ganham bem mais do que a maioria.',
        className: "want-make"
    },
    {
        img: circuitItem,
        description: 'Já sabe fazer suas landing page mas quer aprender a como otimizá-las, trazer autenticidade tornando elas únicas e bonitas.',
        className: "already-think"
    },
    {
        img: circuitItem,
        description: 'Que é designer e já entendeu que precisa se atualizar para se manter vivo no mercado de design e quer aprender uma atividade lucrativa e simples de executar.',
        className:"what-is-designer"
    },
];

export default Items;