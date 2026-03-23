import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksPromiseData=use(marksPromise);
    // console.log(marksPromiseData);
    const marksDataArray=marksPromiseData.data;
    // console.log(marksData);

    // to deploy data on chart have to use array of object .any data in nested object must be preprocessed

        const marksData=marksDataArray.map(Data=>
        {
            const student={
                id:Data.student_id,
                name:Data.name,
                physics:Data.marks.physics,
                chemistry:Data.marks.chemistry,
                math:Data.marks.math,
            }
            const avg =(student.physics+student.chemistry+student.math)/3;
            student.avg=avg;
            return student;
        }
       
        )
        // console.log(marksData);
    return (
        <div>
            <BarChart width={1000} height={400} data={marksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"physics"} fill='blue'></Bar>
                <Bar dataKey={"chemistry"} fill="red"></Bar>
                <Bar dataKey={"math"} fill='yellow'></Bar>

                <Bar dataKey={"avg"} fill="green"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;