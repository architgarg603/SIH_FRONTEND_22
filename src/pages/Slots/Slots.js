/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Labs } from "../../Dummy";
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

export default function Slots() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // const navigate = useNavigate();
  const [value, setValue] = React.useState();
  const [slot, setSlot] = React.useState("");

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
  }, []);

  return (
    <>
      <div className="min-h-screen w-screen flex">
        <div className="flex flex-col mt-20 p-6 mx-5 space-y-5 w-full">
          <div className="flex justify-between">
            <p className="text-3xl md:text-5xl font-bold  mt-7 md:mt-0 ">
              {data.lab_name}
            </p>
            <p className="text-xl md:text-4xl font-normal  mt-9 md:mt-0 ">
              {data.lab_address}
            </p>
          </div>
          <a
            href=""
            className="text-xl md:text-xl w-max font-semibold text-blue-700"
          >
            {data.lab_admin_name}
          </a>

          <div className="w-max bg-white p-10">
            <div className="font-bold  text-3xl py-2 pb-10">Book Lab</div>
            <div className="w-max">
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
              type="submit"
              className="py-1 w-max text-center text-sm md:text-lg px-3 md:py-2 md:px-5 text-white bg-blue-600 rounded-lg cursor-pointer mt-5"
            >
              Book Slot
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
