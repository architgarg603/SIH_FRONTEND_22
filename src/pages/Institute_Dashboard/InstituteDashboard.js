import React, { useEffect, useState } from 'react'
import InstituteTable from '../../Components/InstituteTable/InstituteTable';
import style from './InstituteDashboard.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { getInstituteDetails, getPerticularInstituteLabs, getPerticularInstituteStudent } from '../../Services/InstituteService';
import RegisterLabModal from '../../Components/RegisterLabModal/RegisterLabModal';
import EmptyListMsg from '../../Components/EmtyListMsg/EmptyListMsg';

function InstituteDashboard() {
  const [instituteDetails, setInstituteDetails] = useState({})
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const getInstituteDetail = async () => {
    let id = localStorage.getItem("inst_id")
    let data = await getInstituteDetails({ id })
    let labDetails = await getPerticularInstituteLabs({ id });
    let studentDetails = await getPerticularInstituteStudent({ id });
    data.students = studentDetails;
    data.labs = labDetails;
    // data.labs = []
    setInstituteDetails(data)
  }

  useEffect(() => {
    getInstituteDetail();
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.head}>Institute Dashboard</div>
      <div className={style.Institute}>
        <div>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            <ListItem className={style.details1} sx={{
              display: 'flex',
              justifyContent: "space-between",
              width: "50vw"
            }}>
              <ListItemAvatar >
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary={instituteDetails?.institute_email} />
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Address" secondary={instituteDetails?.institute_address} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <AppRegistrationIcon sx={{ backgroundColor: "grey" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Number Of Students Registered So far" secondary={instituteDetails?.students?.length} />
            </ListItem>
          </List>
        </div>
        {/* <Avatar sx={{ width: 90, height: 90 }}>H</Avatar> */}
      </div>
      <div className={style.btns}>
        <div className={style.btn} onClick={handleOpen} >Register A Lab</div>
      </div>
      <div className={style.head} style={{ marginBottom: "30px" }}>Lab List</div>
      {instituteDetails?.labs && <InstituteTable InstituteDetails={instituteDetails?.labs} />}
      {(instituteDetails?.labs?.length == 0) ? <EmptyListMsg msg={'No lab Registered'} /> : null}
      <RegisterLabModal handleClose={handleClose} open={open} setInstituteDetails={setInstituteDetails} instituteDetails={instituteDetails} />
    </div>
  )
}

export default InstituteDashboard



