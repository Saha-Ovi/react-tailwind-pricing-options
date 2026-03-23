import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({Data}) => {
    // console.log(Data);
    return (
        <div className='border border-white-300 rounded-2xl bg-indigo-700 p-4 flex flex-col  '>
            <div>
                <h1>Plan Name : {Data.name}</h1>
            </div>
            <div>
                <p>Plan Price: {Data.price}</p>
                <p>Description: {Data.description}</p>
            </div>
            <div className='flex-1' >
                {
                    Data.features.map(feature=><PricingFeature feature={feature} ></PricingFeature>)
                }
            </div>
            <button className='btn w-full'>Subscribe Now</button>
        </div>
    );
};

export default PricingCard;