/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { labIds } from "../../Services/LabServices";
import EmptyListMsg from "../../Components/EmtyListMsg/EmptyListMsg";
import LabTable from "../../Components/LabTable/LabTable";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Slots() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const location = useParams();
  const labId = location.id;
  const [labDetails, setLabDetails] = useState([]);
  const [labDetail, setLabDetail] = useState([]);
  // const navigate = useNavigate();
  const [value, setValue] = React.useState();
  const [slot, setSlot] = React.useState("");
  // const [experiments, setExperiments] = useState();
  // const [equipments, setEquipments] = useState();
  const getLabDetails = async () => {
    let labDetails = await labIds({ id: labId });
    console.log(labDetail, labDetails);
    setLabDetail(labDetails);
  };
  useEffect(() => {
    getLabDetails();
    setLabDetails([
      ["Testing Ph of water", "Testing Ph of water in localilty"],
      [
        "Neutralization of acid-base",
        "To preform titration and and acid-base neutralization",
      ],
    ]);

    // setLabDetails(labDts);

    return () => {};
  }, []);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleSlot = (event) => {
    setSlot(event.target.value);
  };
  useEffect(async () => {
    const response = await labIds({ id });
    console.log(response);
    setData(response);

    // const exp = await labsExperiments({ id });
    // console.log(exp);
    // setExperiments(exp);
  }, []);

  return (
    <>
      <div className="bg-gray-200 min-h-screen flex px-10">
        <div className=" bg-white h-max rounded-xl flex flex-col mt-20 p-6 mx-5 w-full">
          <div className="flex justify-between">
            <p className="pl-10 text-3xl md:text-5xl font-bold  mt-7 md:mt-0 ">
              {data.lab_name?.charAt(0).toUpperCase() + data.lab_name?.slice(1)}
            </p>
            {/* <p className="text-xl md:text-4xl font-normal  mt-9 md:mt-0 ">
              {data.lab_address}
            </p> */}
          </div>
          <a
            href=""
            className="text-xl pl-10 md:text-xl w-max font-semibold text-blue-700 mt-2"
          >
            {data.lab_admin_name}
          </a>
          <div className="flex justify-between">
            <div className="mt-5 pl-10">
              <p className="text-4xl font-bold mb-3">About</p>
              <p className="w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                repellat accusantium commodi magnam nam adipisci, nihil eaque
                exercitationem! Earum iure error ullam cum velit ex blanditiis
                iste labore atque? Ut.
              </p>
              <div className="pt-10">
                <p className="text-2xl font-bold mb-3">Select Experiments</p>
                <div className="w-3/4">
                  {labDetails.length == 0 ? (
                    <EmptyListMsg msg={"No lab registered"} />
                  ) : (
                    <LabTable
                      slots={true}
                      labDetails={labDetails}
                      setLabDetails={setLabDetails}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="w-max mr-28 flex flex-col">
              <div className="font-bold w-96 text-5xl py-2 pb-10">
                Book A Slot
              </div>
              <div className="">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <MobileDatePicker
                      label="Choose a date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      minDate={new Date()}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </div>
              <div className="pt-5">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Choose a Slot
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={slot}
                      label="Age"
                      onChange={handleSlot}
                    >
                      <MenuItem value={10}>10:00 am- 1:00 pm</MenuItem>
                      <MenuItem value={20}>11:00 am- 2:00 pm</MenuItem>
                      <MenuItem value={30}>12:00 am- 3:00 pm</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <button
                className="bg-[#407BFF] text-white font-bold uppercase text-sm px-6 py-3 my-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-max"
                onClick={handleClick}
              >
                BOOK SLOT
              </button>
              <div className="bg-green-500">
                <Snackbar
                  open={open}
                  autoHideDuration={60000000}
                  onClose={handleClose}
                  variant="outlined" 
                >
                  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                  </Alert>
                </Snackbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
