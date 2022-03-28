/* eslint-disable react/prop-types */
import * as React from 'react';
import Lab_row from '../Lab_Row/Lab_row';
export default function RowsGrid({ labDetails, setLabDetails, slots }) {
    const onRemoveHandler = (idx) => {
        labDetails.splice(idx, 1);
        setLabDetails([...labDetails]);
    }
    return (
        <div style={{height:"250px", overflow:'auto'}} className='custom_scrollBar' >
            {
                labDetails?.map((data, idx) => {
                    return (
                        <Lab_row key={idx} data={data} onRemoveHandler={onRemoveHandler} idx={idx} slots = {slots} />
                    )
                })
            }
        </div>
    );
}
