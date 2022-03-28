/* eslint-disable react/prop-types */
import * as React from 'react';
import Institute_Row from '../institute_Row/institute_Row';
import style from './InstituteTable.module.scss'
export default function InstituteTable({ InstituteDetails }) {
    return (
        <div className={[style.content, 'no_scrollBar'].join(" ")}>
            {InstituteDetails.map((data, idx) => {
                return (
                    <Institute_Row data={data} key={idx} />
                )
            })}
        </div>
    );
}
