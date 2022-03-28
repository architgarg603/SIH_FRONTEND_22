/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import Slots from "../../pages/Slots/Slots";
import { labsEquipments, labsExperiments } from "../../Services/LabServices";

export default function ListContainer({ list }) {
  const [showModal, setShowModal] = useState(false);
  const [experiments, setExperiments] = useState();
  const [equipments, setEquipments] = useState();

  useEffect(async () => {
    const response = await labsExperiments({ id: list.lab_id });
    // console.log(response);
    setExperiments(response);

    const s = await labsEquipments({ id: response.experiment_id });
    console.log(s);
    setEquipments(s);
  }, []);

  return (
    <>
      <div className="h-full p-3 lg:p-8 mt-4">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between  md:justify-around sm:justify-around lg:justify-around w-full">
            <div className="rounded-xl overflow-hidden shadow-md bg-white">
              <div className="p-10  w-96">
                <div className="font-bold text-3xl text-center pb-1">
                  {list.lab_name}
                </div>
                <p className="text-gray-800 text-xl font-semibold pb-3 pt-1 text-md text-center">
                  {" "}
                  {list.lab_address}
                </p>
                <div className="flex justify-center items-center">
                  <Link to={`/slots/${list.lab_id}`}>
                    <button className="bg-black mt-3 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Book Slot
                    </button>
                  </Link>

                  <button
                    className="py-3 px-6 mt-3 mx-2 font-bold rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white  mr-1 mb-1 ease-linear transition-all duration-150 uppercase"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Details
                  </button>

                  {/* lab details MODAL */}
                  {showModal ? (
                    <>
                      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex  items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-bold">
                                {list.lab_name} <br />
                                <a
                                  href=""
                                  className="text-xl font-semibold text-blue-700"
                                >
                                  {list.lab_admin_name}
                                </a>
                              </h3>
                              <button
                                className=" ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                              >
                                <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                  x
                                </span>
                              </button>
                            </div>

                            <div className="relative p-6 flex-auto">
                              <p className="my-1 text-blueGray-500 text-lg leading-relaxed mb-4">
                                {list.description}
                              </p>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography className="font-bold">
                                    Equipments
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <h1>{equipments.equipment_name}</h1>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel2a-content"
                                  id="panel2a-header"
                                >
                                  <Typography>Experiments</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography>
                                    <h1 className="font-bold">
                                      {" "}
                                      Aim: {experiments.aim}
                                    </h1>
                                    <p>
                                      Description: {experiments.description}
                                    </p>
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                              >
                                Close
                              </button>
                              <Link to={`/slots/${list.lab_id}`}>
                                <button
                                  className="bg-black text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => <Slots id={list.lab_id} />}
                                >
                                  Book Slot
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
