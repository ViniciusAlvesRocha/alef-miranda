import React from 'react';
import WhoIsTheEventForStyled from './styled';
import universalBus from '../../dist/assets/universal-bus.png';
import contentItems from '../../models/isForMeItems';
import IsForMeItem from '../../components/IsForMeItem';

const WhoIsTheEventFor = () => (
    <WhoIsTheEventForStyled className="flex flex-col items-center">
        <h2 className="px-5 py-1">Para quem é o evento</h2>

        <div className="is-for-me bg-gradient-to-r from-orange-500 to-orange-400 px-20 py-2 rounded font-bold text-lg mt-3 mb-4">É para mim</div>

        <img src={universalBus} alt="way" />
        <div className="is-for-me-items">
            {contentItems.map(item => <IsForMeItem {...item} />)}
        </div>
    </WhoIsTheEventForStyled>
);

export default WhoIsTheEventFor;