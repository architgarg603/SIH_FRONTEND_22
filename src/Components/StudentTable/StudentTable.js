/* eslint-disable react/prop-types */
import * as React from 'react';
import style from './StudentTable.module.scss'
export default function StudentTable({StudentDetails}) {
  
    return (
        <table className={[style.wrapper,'custom_scrollBar'].join(" ")}>
            <tr className={style.heads}>
                <th className={style.head}>Name</th>
                <th className={style.head}>Location</th>
                <th className={style.head}>Contact</th>
                <th className={style.head}>Slot</th>
               
            </tr>
            <div className={[style.content,'no_scrollBar'].join(" ")}>

                {StudentDetails.map((data, idx) => {
                    return (
                        <tr key={idx} className={style.row}>
                            <td className={style.name}>{data[0]}</td>
                            <td className={style.loc}>{data[1]}</td>
                            <td className={style.contact}>{data[2]}</td>
                            <td className={style.slot}>{data[3]}</td>
                           
                        </tr>
                    )
                })}
            </div>
        </table>
    );
}
