import React, { useEffect, useState } from 'react'
import LabTable from '../../Components/LabTable/LabTable'
import style from './LabDashboard.module.scss'
import AddEquipmentModal from '../../Components/AddEquipmentModal/AddEquipmentModal';
import { labIds } from '../../Services/LabServices';
import { useParams } from 'react-router-dom';
import EmptyListMsg from '../../Components/EmtyListMsg/EmptyListMsg';

function LabDashboard() {
  const location = useParams();
  const labId = location.id
  const [labDetails, setLabDetails] = useState([])
  const [labDetail, setLabDetail] = useState([])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getLabDetails = async () => {
    let labDetails = await labIds({ id: labId })
    console.log(labDetail, labDetails)
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
    <div className={[style.wrapper, "custom_scrollBar"].join(" ")} style={{ backgroundColor: "white" }}>
      <div className={style.head}>Lab Dashboard</div>
      <div className={style.btns}>
        <div className={style.btn}>Manage Slots</div>
        <div className={style.btn} onClick={handleOpen} >Add Equipment</div>
      </div>
      <div className={style.details}>
        <div className={style.subHead}><div>Name</div> <div>{labDetail.lab_name}</div> </div>
        <div className={style.subHead}><div>Admin Name</div> <div>{labDetail.lab_admin_name}</div> </div>
        <div className={style.subHead}><div>Lab Capacity</div> <div>{labDetail.lab_student_capacity}</div> </div>
        <div className={style.subHead}><div>Address</div> <div>{labDetail.lab_address}</div> </div>
      </div>

      <div className={style.head} style={{ marginBottom: "15px" }}>Experminet List</div>
      {labDetails.length == 0 ?
        <EmptyListMsg msg={"No lab registered"} /> :
        <LabTable labDetails={labDetails} setLabDetails={setLabDetails} />
      }
      <div className={style.head} style={{ margin: "55px 0px 15px 0px" }}>Equipment List</div>
      {labDetails.length == 0 ?
        <EmptyListMsg msg={"No lab registered"} /> :
        <LabTable labDetails={labDetails} setLabDetails={setLabDetails} />
      }
      <AddEquipmentModal handleClose={handleClose} open={open} labDetails={labDetails} setLabDetails={setLabDetails} />
    </div>
  )
}

export default LabDashboard