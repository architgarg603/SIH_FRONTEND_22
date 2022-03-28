/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

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
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ marginBottom: "30px" }}>
                    Add Equipment
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter Name' style={{ borderBottom: '2px solid grey', padding: '10px', fontSize: 'large', outline:'none', width:'90%', marginBottom:'40px'}} />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <input type='text' onChange={(e) => setDetails(e.target.value)} placeholder='Enter Name' style={{ borderBottom: '2px solid grey', padding: '10px', fontSize: 'large', outline:'none', width:'90%', marginBottom:'40px'}} />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, width:'150px', height:'40px', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', background:'#8080804a', borderRadius:'15px' }} onClick={onSubmitHandler}>
                    Submit
                </Typography>
            </Box>
        </Modal>
    )
}

export default AddEquipmentModal