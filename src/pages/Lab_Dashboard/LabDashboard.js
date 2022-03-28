import React, { useEffect, useState } from 'react'
import LabTable from '../../Components/LabTable/LabTable'
import style from './LabDashboard.module.scss'
import AddEquipmentModal from '../../Components/AddEquipmentModal/AddEquipmentModal';
import { labIds } from '../../Services/LabServices';
import {  useParams } from 'react-router-dom';

function LabDashboard() {
  const location = useParams();
  const labId = location.id
  const [labDetails, setLabDetails] = useState([])
  const [labDetail, setLabDetail] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getLabDetails = async  ()=>{
    let labDetails = await labIds({id:labId})
    console.log(labDetail,labDetails)
    setLabDetail(labDetails);
  }
  useEffect(() => {
    getLabDetails();
    setLabDetails([
      ['temp', 'temp'],
      ['temp1', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp2', 'temp'],
      ['temp3', 'temp']
    ])
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.head}>Lab Dashboard</div>
      <div>
        Lab Name - {labDetail.lab_name} <br />
        Lab Admin Name - {labDetail.lab_admin_name} <br />
        Lab Capacity - {labDetail.lab_student_capacity} <br />
        Lab Address - {labDetail.lab_address} <br />
      </div>
      <div className={style.btns}>
        <div className={style.btn}>Manage Slots</div>
        <div className={style.btn} onClick={handleOpen} >Add Equipment</div>
      </div>
      <LabTable labDetails={labDetails} setLabDetails={setLabDetails} />
     <AddEquipmentModal handleClose={handleClose} open={open} labDetails={labDetails} setLabDetails={setLabDetails} />
    </div>
  )
}

export default LabDashboard