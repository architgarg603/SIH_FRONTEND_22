/* eslint-disable react/prop-types */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './InstituteTable.module.scss'
export default function InstituteTable({ InstituteDetails }) {
    const navigate = useNavigate();
    return (
        <table className={[style.wrapper, 'custom_scrollBar'].join(" ")}>
            <tr className={style.heads}>
                <th className={style.head}>Name</th>
                <th className={style.head}>Location</th>
                <th className={style.head}>Admin</th>
                <th className={style.head}>View</th>

            </tr>
            <div className={[style.content, 'no_scrollBar'].join(" ")}>

                {InstituteDetails.length > 0 ?
                    InstituteDetails.map((data, idx) => {
                        return (
                            <tr key={idx} className={style.row}>
                                <td className={style.name}>{data?.lab_name}</td>
                                <td className={style.loc}>{data?.lab_address}</td>
                                <td className={style.contact}>{data?.lab_admin_name}</td>
                                <td className={style.slot} onClick={()=>navigate(`/lab/${data?.lab_id}`)} >View</td>

                            </tr>
                        )
                    })
                    :
                    <tr>
                        <td>No Lab Registered</td>
                    </tr>
                }
            </div>
        </table>
    );
}
