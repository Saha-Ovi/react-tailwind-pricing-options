import React, { use } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = ({resultPromise}) => {
    const resultPromiseData=use(resultPromise);
    const resultData=resultPromiseData.students;
    // console.log(resultData);
    return (
        <div style={{width:"100%",maxWidth:600} } >
            <LineChart width={1000} height={800} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                 <Line dataKey={"math"} stroke='green'  ></Line>
                 <Line dataKey={"physics"} stroke='brown'  ></Line>
                 <Line dataKey="biology" stroke='blue'  ></Line>
                 <Line dataKey={"chemistry"} stroke='red' ></Line>
                 
            </LineChart>
           
        </div>
    );
};

export default Rechart;