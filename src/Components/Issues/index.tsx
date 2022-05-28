import {
  Autocomplete,
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
import { useState } from "react";
import Layout from "../Layout";
import CustomModal from "../UI/CustomModal";
import DataTable from "../UI/DataTable";

const dataItems = [
  {
    no: "1",
    issue: "Payment Module Error",
    desc: "andsklasdkasd",
    tags: "Reactjs,Nodejs",
    status:0,
  },
  {
    no: "2",
    issue: "Login Module Error",
    desc: "andsklasdkasd",
    tags: "Reactjs,Nodejs",
    status:0
  },
  {
    no: "3",
    issue: "Sign Up Module Error",
    desc: "andsklasdkasd",
    tags: "Reactjs,Nodejs",
    status:0
  },
  {
    no: "4",
    issue: "Image Module Error",
    desc: "andsklasdkasd",
    tags: "Reactjs,Nodejs",
    status:1
  },
  {
    no: "5",
    issue: "Employee Module Error",
    desc: "andsklasdkasd",
    tags: "Reactjs,Nodejs",
    status:1
  },
];

const moduleArray = [
  "Image Module",
  "Signup Module",
  "Login Module",
  "Employee Module",
  "Design Bugs",
];

const tags = [
  "ReactJs",
  "NextJs",
  "VueJs",
  "Angular",
  "Typescript",
  "Laravel",
  "NodeJs",
  "NestJs",
  "GraphQL",
  "Socket",
  "PostgreSQL",
  "MongoDB",
];
const developers = [
    {
      no: "1",
      name: "Me",
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

const Issues = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [issueModal,setIssueModal]=useState(false)
  const [dummyData,setDummyData]=useState(dataItems)
  const columns = ["No", "Issue", "Description", "Tags","Status","Action"];
  const [value,setValue]=useState(null)
  const [ID,setID]=useState(0)

  const [userInput, setUserInput] = useState({
    modules: "",
    desc: "",
    priority: "",
    tags: [],
  });
  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  const handleIssueModalStatus=()=>{
    setIssueModal(false)
  }
  const handleSubmit = (e:any) => {
    const tempData=[...dummyData]
    const index=tempData.findIndex(item=>{
        return item.no===ID.toString()
    })
    tempData[index].status=1
    setDummyData(tempData)
    setIssueModal(false)
  };

  const handleChange = (e: any) => {
    const tempData: any = { ...userInput };
    const name = e.target.name;
    const value = e.target.value;
    tempData[name] = value;
    setUserInput(tempData);
  };

  const handleDevChange=(e:any)=>{
    setValue(e.target.value)
  }

  const handleResolveClick=(id:any)=>{
    setIssueModal(true)
    setID(id)
  }
  
  return (
    <>
      <Layout title="Issues">
        <Box>
          <Box textAlign="right">
            <Button variant="contained" onClick={handleModalStatus}>
              Raise Issues
            </Button>
          </Box>
          <Box sx={{ mt: 2 }}>
            <DataTable columns={columns} dataItems={dataItems} handleClick={handleResolveClick}/>
          </Box>
        </Box>
      </Layout>
      <CustomModal
        handleSubmit={handleSubmit}
        open={issueModal}
        title="Resolve Issue"
        handleClose={handleIssueModalStatus}
      >
          <Box mt={3}>
            <InputLabel id="demo-multiple-name-label">
              Resolved By
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={value}
              fullWidth
              name="backEndDevs"
              onChange={handleDevChange}
              input={<OutlinedInput />}
            >
              {developers.map((item, index) => (
                
                <MenuItem disabled={item.disabled} key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
      </CustomModal>
      <CustomModal
        handleSubmit={handleSubmit}
        open={modalStatus}
        title="Raise Issue"
        handleClose={handleModalStatus}
      >
        <Box mt={3}>
          <InputLabel id="demo-multiple-name-label">Module Name</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={userInput.modules}
            fullWidth
            name="modules"
            onChange={handleChange}
            input={<OutlinedInput />}
          >
            {moduleArray.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
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
            name="desc"
            placeholder="Enter Issue Description"
            onChange={handleChange}
            // value={values.password}
          />
        </Box>
        <Box mt={3}>
          <InputLabel id="demo-multiple-name-label">Priority</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={userInput.priority}
            fullWidth
            name="priority"
            onChange={handleChange}
            input={<OutlinedInput />}
          >
            {["High", "Modarate", "Low"].map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box mt={3}>
          <Autocomplete
            onChange={(e)=>{
                console.log("e======>",e.target)
            }}
            freeSolo
            multiple
            id="tags-outlined"
            options={tags}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tags"
              />
            )}
          />
        </Box>
      </CustomModal>
    </>
  );
};

export default Issues;
