import React, { useEffect, useState } from "react";
import StudentTable from "../../Components/StudentTable/StudentTable";
import style from "./StudentDashboard.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from '@mui/icons-material/Email';
import { getAllSlots } from "../../Services/slotServices";
import { getStudentInfo } from "../../Services/studentServices";
function StudentDashboard() {
  const [StudentDetails, setStudentDetails] = useState({});
  const [slotDetails, setSlotDetails] = useState([]);
  let stuId = localStorage.getItem('stu_id')
  const getSlots = async () => {
    const data = await getAllSlots();
    let slots = data.filter(data => {
      return data.student_id == stuId
    });
    setSlotDetails(slots)
  }
  const getStudent = async ()=>{
    let data = await getStudentInfo({id:stuId});
    console.log(data)
    setStudentDetails(data)
  }
  useEffect(() => {
    getSlots();
    getStudent()
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.head}>Student Dashboard</div>
      <div className={style.student}>
        <div>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "60vw",
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Name" secondary={StudentDetails.name} />

              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary={StudentDetails.email} />
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Course" secondary={StudentDetails.course} />
            </ListItem>
          </List>
        </div>
        {/* <Avatar sx={{ width: 90, height: 90 }}>H</Avatar> */}
      </div>
      <div className={style.head} style={{ marginBottom: "25px", marginTop: "50px" }}>Booking List</div>
      <div className={style.table}>
        <StudentTable
          StudentDetails={slotDetails}
          setStudentDetails={setSlotDetails}
        />
      </div>
    </div>
  );
}

export default StudentDashboard;
