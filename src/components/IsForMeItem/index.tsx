import React from 'react';

export type Item = {
    img: string,
    description: string,
    className: string,
};

const IsForMeItem = ({img, description, className}: Item) => (
    <div className={className}>
        <img src={img}/>
        <p className="text-xl">{description}</p>
    </div>
);

export default IsForMeItem