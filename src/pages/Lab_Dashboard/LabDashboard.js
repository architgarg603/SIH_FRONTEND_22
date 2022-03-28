import React, { useEffect, useState } from "react";
import LabTable from "../../Components/LabTable/LabTable";
import style from "./LabDashboard.module.scss";
import AddEquipmentModal from "../../Components/AddEquipmentModal/AddEquipmentModal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import { labIds } from "../../Services/LabServices";
import { useParams } from "react-router-dom";
import EmptyListMsg from "../../Components/EmtyListMsg/EmptyListMsg";

function LabDashboard() {
  const location = useParams();
  const labId = location.id;
  const [labDetails, setLabDetails] = useState([]);
  const [labDetail, setLabDetail] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const getLabDetails = async () => {
    let labDetails = await labIds({ id: labId });
    console.log(labDetail, labDetails);
    setLabDetail(labDetails);
  };
  useEffect(() => {
    getLabDetails();
    setLabDetails([
      ["temp", "temp"],
      ["temp1", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp2", "temp"],
      ["temp3", "temp"],
    ]);
  }, []);

  return (
    <div
      className={[style.wrapper, "custom_scrollBar"].join(" ")}
      style={{ backgroundColor: "white" }}
    >
      <div className={style.head}>Lab Dashboard</div>
      <div className={style.btns}>
        <div className={style.btn}>Manage Slots</div>
        <div className={style.btn} onClick={handleOpen}>
          Add Equipment
        </div>
      </div>
      <div className={style.details}>
        <List sx={{ width: "100%", maxWidth: 160 }}>
          <ListItem
            className={style.details1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "75vw",
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={labDetail?.lab_name} />
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Admin Name"
              secondary={labDetail?.lab_admin_name}
            />
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                <PeopleIcon sx={{ backgroundColor: "grey" }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lab Capacity"
              secondary={labDetail?.lab_student_capacity}
            />

            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: "#2db6bc" }}>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Address"
              secondary={labDetail?.institute_address}
            />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </div>

      <div className={style.head} style={{ marginBottom: "15px" }}>
        Experminet List
      </div>
      {labDetails.length == 0 ? (
        <EmptyListMsg msg={"No lab registered"} />
      ) : (
        <LabTable labDetails={labDetails} setLabDetails={setLabDetails} />
      )}
      <div className={style.head} style={{ margin: "55px 0px 15px 0px" }}>
        Equipment List
      </div>
      {labDetails.length == 0 ? (
        <EmptyListMsg msg={"No lab registered"} />
      ) : (
        <LabTable labDetails={labDetails} setLabDetails={setLabDetails} />
      )}
      <AddEquipmentModal
        handleClose={handleClose}
        open={open}
        labDetails={labDetails}
        setLabDetails={setLabDetails}
      />
    </div>
  );
}

export default LabDashboard;
