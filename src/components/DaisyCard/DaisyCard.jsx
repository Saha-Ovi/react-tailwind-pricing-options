import React from 'react';
import PricingFeature from '../PricingCard/PricingFeature';

const DaisyCard = ({Data}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {
                    Data.popular && <span className="badge badge-xs badge-warning">Most Popular</span>
                }
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{Data.name}</h2>
                    <span className="text-xl">{Data.price}</span>
                </div>
                <div>
                    <p>{Data.description}</p>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                   {
                     Data.features.map(feature=><PricingFeature feature={feature} ></PricingFeature>)
                   }
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyCard;