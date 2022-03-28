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
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
function StudentDashboard() {
  const [StudentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    setStudentDetails([
      ["temp", "temp", "contact", "slot"],
      ["temp1", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp2", "temp", "contact", "slot"],
      ["temp3", "temp", "contact", "slot"],
    ]);
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
              <ListItemText primary="Name" secondary="John Doe" />

              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone" secondary="0000000000" />
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Address" secondary="xyx" />
            </ListItem>
          </List>
        </div>
        <Avatar sx={{ width: 90, height: 90 }}>H</Avatar>
      </div>
      <div className={style.head} style={{marginBottom:"25px", marginTop:"50px"}}>Booking List</div>
      <div className={style.table}>
        <StudentTable
          StudentDetails={StudentDetails}
          setStudentDetails={setStudentDetails}
        />
      </div>
    </div>
  );
}

export default StudentDashboard;
