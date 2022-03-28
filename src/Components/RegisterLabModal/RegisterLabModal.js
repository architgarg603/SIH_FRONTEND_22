import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { createLab } from '../../Services/LabServices';
import style from "./RegisterLabModal.module.scss"


export default function RegisterLabModal({ handleClose, open, setInstituteDetails, instituteDetails }) {
    const inst_id = localStorage.getItem("inst_id")
    const [details, setDetails] = useState({ institute_id: inst_id })
    const onSubmitHandler = async () => {
        try {
           let labData =  await createLab(details);
           console.log(labData)
            let data = { ...instituteDetails };
            data.labs.push({ ...details, lab_id:labData.lab_id });
            setInstituteDetails(data);
            handleClose();

        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={style.wrapper}>
                    <h1 className={style.head}>Create Lab</h1>
                    <div className={style.row1}>

                    <input type='text' placeholder='Enter name' onChange={(e) => setDetails({ ...details, lab_name: e.target.value })} />
                    <input type='text' placeholder='Enter address' onChange={(e) => setDetails({ ...details, lab_address: e.target.value })} />
                    </div>
                    <div className={style.row2}>
                    <input type='text' placeholder='Enter admin name' onChange={(e) => setDetails({ ...details, lab_admin_name: e.target.value })} />
                    <input type='number' defaultValue={'50'} onChange={(e) => setDetails({ ...details, lab_student_capacity: e.target.value })} />

                    </div>
                    <div className={style.btn} onClick={onSubmitHandler}>Submit</div>
                </Box>
            </Modal>
        </div>
    );
}
