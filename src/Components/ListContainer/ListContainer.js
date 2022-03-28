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
import GradeIcon from "@mui/icons-material/Grade";

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
      <div className="h-full p-3 lg:p-4 mt-4">
        <div className="container mx-auto ">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between  md:justify-around sm:justify-around lg:justify-around w-full">
            <div className="flex flex-col">
              <div className="flex flex-col bg-white rounded-lg border shadow-md md:flex-row lg:w-1024 hover:bg-blue-100">
                <img
                  className="object-fill rounded-t-lg md:h-auto md:w-64 md:rounded-none md:rounded-l-lg"
                  src="https://medchrome.com/wp-content/uploads/2021/12/lab.jpg"
                  alt=""
                />
                <div className="flex flex-col p-5 justify-evenly leading-normal w-full">
                  <div className="flex justify-between">
                    <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {list.lab_name}
                    </h5>
                    <div>
                      <GradeIcon />
                      <GradeIcon />
                      <GradeIcon />
                    </div>
                  </div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {list.lab_address}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt tenetur dicta odit nostrum, perspiciatis cupiditate
                    laudantium atque obcaecati, totam voluptatibus maxime
                    voluptates. Sint nam eius minima, illum tempore laboriosam
                    obcaecati?
                  </p>
                  <div className="flex justify-end">
                    <Link to={`/slots/${list.lab_id}`}>
                      <button
                        className="bg-black text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => <Slots id={list.lab_id} />}
                      >
                        Book Slot
                      </button>
                    </Link>
                    {/* <button
                    className="py-3 w-1/3 font-bold rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white   ease-linear transition-all duration-150 uppercase"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Details
                  </button> */}
                    <button
                      className="bg-blue-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Nemo consequuntur impedit quis enim eaque
                          doloribus quos ipsam? Fugit voluptatibus iure, fugiat
                          quae fuga expedita praesentium magni sunt.
                          Consequuntur, nostrum laboriosam!
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
                              <p>Description: {experiments.description}</p>
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
    </>
  );
}
