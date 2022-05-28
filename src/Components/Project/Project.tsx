import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import CustomModal from "../UI/CustomModal";
import DataTable from "../UI/DataTable";

const backendTech = [
  "NodeJs",
  "NestJs",
  "GraphQL",
  "Socket",
  "PostgreSQL",
  "MongoDB",
];
const frontendTech = [
  "ReactJs",
  "NextJs",
  "VueJs",
  "Angular",
  "Typescript",
  "Laravel",
];

const initailValues = {
  name: "",
  description: "",
  backEnd: [],
  frontEnd: [],
  backEndDevs: [],
  frontEndDevs: [],
};
const dataItems = [
  {
    no: "1",
    name: "Protiv",
    developerCount: "4",
    frontEnd: "React,NextJS",
    backEnd: "NodeJs,NextJs",
  },
  {
    no: "2",
    name: "Minusines",
    developerCount: "4",
    frontEnd: "React,NextJS",
    backEnd: "NodeJs,NextJs",
  },
  {
    no: "3",
    name: "Tricargo",
    developerCount: "4",
    frontEnd: "React,NextJS",
    backEnd: "NodeJs,NextJs",
  },
  {
    no: "4",
    name: "Udhyogh",
    developerCount: "4",
    frontEnd: "React,NextJS",
    backEnd: "NodeJs,NextJs",
  },
];

const totalDevelopers = [
  {
    no: "1",
    name: "Akash",
    email: "as@logixbuilt.com",
    project: "#9985",
    disabled: false,
  },
  {
    no: "2",
    name: "Hemang",
    email: "hj@logixbuilt.com",
    project: "#9985",
    disabled: false,
  },
  {
    no: "3",
    name: "Pashva",
    email: "pv@logixbuilt.com",
    project: "#9985",
    disabled: false,
  },
  {
    no: "4",
    name: "Krushang",
    email: "kc@logixbuilt.com",
    project: "#9992",
    disabled: false,
  },
  {
    no: "5",
    name: "Aashish",
    email: "asm@logixbuilt.com",
    project: "#9992",
    disabled: false,
  },
];

const Project = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const columns = ["No", "Name", "Total Developers", "FrontEnd", "Backend"];
  const [userInput, setUserInput] = useState(initailValues);
  const [developers, setDevelopers] = useState<Array<any>>(totalDevelopers);
  
  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };

  const handleChange = (e: any) => {
    const tempData: any = { ...userInput };
    const name = e.target.name;
    const value = e.target.value;
    if (name !== "description" || name !== "name") {
      if (typeof value === "string") {
        tempData[name].push(value);
      } else {
        tempData[name] = value;
      }
      if (tempData[name].length !== 0) {
        const devArray = [...tempData[name]];
        const tempArray=[...developers]
        tempArray.map((x) => {
          if (devArray.indexOf(x.name) !== -1){
            x["disabled"] = true;
          }
        })
        setDevelopers(tempArray);
      }
      console.log("tempData=====>", tempData);
    }
    setUserInput(tempData);
  };
  const handleSubmit = () => {
    alert("submit");
  };
  return (
    <>
      <Layout title="Projects">
        <Box>
          <Box textAlign="right">
            <Button variant="contained" onClick={handleModalStatus}>
              + Add Project
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <DataTable columns={columns} dataItems={dataItems} />
          </Box>
        </Box>
      </Layout>
      <CustomModal
        handleSubmit={handleSubmit}
        open={modalStatus}
        title="Add Developer"
        handleClose={handleModalStatus}
      >
        <Box mt={3}>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Project Name"
              placeholder="Enter Project Name"
              name="name"
              onChange={handleChange}
              // value={values.email}
            />
          </Box>
          <Box mt={3}>
            <TextareaAutosize
              style={{
                width: "100%",
                height: "10vh",
                border: "1px solid #d2d2d2",
                padding: "16.5px 14px",
                fontFamily: "poppins",
              }}
              name="password"
              placeholder="Enter Project Description"
              onChange={handleChange}
              // value={values.password}
            />
          </Box>
          <Box mt={3}>
            <InputLabel id="demo-multiple-name-label">
              Backend Technologies
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={userInput.backEnd}
              fullWidth
              name="backEnd"
              onChange={handleChange}
              input={<OutlinedInput />}
            >
              {backendTech.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box mt={3}>
            <InputLabel id="demo-multiple-name-label">
              Frontend Technologies
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              name="frontEnd"
              value={userInput.frontEnd}
              fullWidth
              onChange={handleChange}
              input={<OutlinedInput />}
            >
              {frontendTech.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box mt={3}>
            <InputLabel id="demo-multiple-name-label">
              Backend Developers
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={userInput.backEndDevs}
              fullWidth
              name="backEndDevs"
              onChange={handleChange}
              input={<OutlinedInput />}
            >
              {developers.map((item, index) => (
                
                <MenuItem disabled={item.disabled} key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box mt={3}>
            <InputLabel id="demo-multiple-name-label">
              Frontend Developers
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              name="frontEndDevs"
              value={userInput.frontEndDevs}
              fullWidth
              onChange={handleChange}
              input={<OutlinedInput />}
            >
              {developers.map((item, index) => (
                <MenuItem disabled={item.disabled} key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </CustomModal>
    </>
  );
};

export default Project;
