import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingPromiseData=use(pricingPromise);
    const pricingData  =(pricingPromiseData.pricingOptions);
    return (
        <div className='my-5'>
            <h1 className='text-4xl font-bold underline text-center'>Our Packages : </h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                {/* {
                    pricingData.map(Data=><PricingCard key={Data.id} Data={Data} ></PricingCard>)
                } */}

                {
                    pricingData.map(Data=><DaisyCard key={Data.id} Data={Data}></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;