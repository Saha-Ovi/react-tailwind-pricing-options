import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    // console.log(feature);
    return (

       <ul className='my-2'>
        <li className='flex gap-2 items-center '><CircleCheck></CircleCheck>{feature}</li>
       </ul>
        
                 
    );
};

export default PricingFeature;