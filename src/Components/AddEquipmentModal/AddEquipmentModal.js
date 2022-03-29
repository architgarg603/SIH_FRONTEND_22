/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import style from "./AddEquipmentModal.module.scss"


function AddEquipmentModal({ open, handleClose, setLabDetails, labDetails }) {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')

    const onSubmitHandler = () => {
        setLabDetails([...labDetails, [name, details]]);
        handleClose();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={style.wrapper}>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ marginBottom: "30px" }}>
                    Add Equipment
                </Typography>
                <div className='modal-container'>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' style={{ borderBottom: '2px solid grey', padding: '10px', fontSize: 'large', outline:'none', width:'30vw', marginBottom:'40px'}} />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type='text' onChange={(e) => setDetails(e.target.value)} placeholder='Enter Details' style={{ borderBottom: '2px solid grey', padding: '10px', fontSize: 'large', outline:'none', width:'30vw', marginBottom:'40px'}} />
                </Typography>
                </div>
                <Typography  id="modal-modal-description" sx={{ mt: 2, width:'150px', height:'40px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', background:'#2db6bc', borderRadius:'15px' }} onClick={onSubmitHandler}>
                    Submit
                </Typography>
            </Box>
        </Modal>
    )
}

export default AddEquipmentModal