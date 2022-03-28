/* eslint-disable react/prop-types */
import * as React from 'react';
import style from './labTable.module.scss'
export default function RowsGrid({labDetails, setLabDetails}) {
   const onRemoveHandler = (idx)=>{
       labDetails.splice(idx,1);
        setLabDetails([...labDetails]);
   }
    return (
        <div className={[style.wrapper,'custom_scrollBar'].join(" ")}>
            <div className={style.heads}>
                <div className={style.head}>Name</div>
                <div className={style.head}>Description</div>
                <div className={style.head}>Remove</div>
            </div>
            <div className={[style.content,'no_scrollBar'].join(" ")}>

                {labDetails.map((data, idx) => {
                    return (
                        <div key={idx} className={style.row}>
                            <div className={style.name}>{data[0]}</div>
                            <div className={style.desc}>{data[1]}</div>
                            <div className={style.btn} onClick={()=>onRemoveHandler(idx)}>Remove</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
