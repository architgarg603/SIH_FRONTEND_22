/* eslint-disable react/prop-types */
import * as React from 'react';
import Student_Row from '../student_row/student_Row';
export default function StudentTable({ StudentDetails }) {
    return (
        <>
            {StudentDetails.map((data, idx) => {
                return (
                    <Student_Row data={data} idx={idx} key={idx} />
                )
            })}
        </>
    );
}
