import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import CustomModal from "../UI/CustomModal";
import DataTable from "../UI/DataTable";

const Developer = () => {
  const initailValues = {
    email: "",
    password: "",
  };
  const [modalStatus, setModalStatus] = useState(false);
  const columns = ["No", "Name", "Email Address", "Project"];
  const [developers, setDevelopers] = useState<Array<any>>([initailValues]);
  const dataItems = [
    { no: "1", name: "Akash", email: "as@logixbuilt.com", project: "#9985" },
    { no: "2", name: "Hemang", email: "hj@logixbuilt.com", project: "#9985" },
    { no: "3", name: "Pashva", email: "pv@logixbuilt.com", project: "#9985" },
    { no: "4", name: "Krushang", email: "kc@logixbuilt.com", project: "#9992" },
    { no: "5", name: "Aashish", email: "asm@logixbuilt.com", project: "#9992" },
    {
      no: "6",
      name: "Dnyaneshwar",
      email: "dt@logixbuilt.com",
      project: "#9992",
    },
  ];

  const handleModalStatus = () => {
    setModalStatus(!modalStatus);
  };
  const handleChange = () => {
    // alert("here");
  };
  const handleSubmit = () => {
    alert("submit");
  };
  const handleAddDeveloper=()=>{
    setDevelopers(prevState=>[...prevState,initailValues])
  }
  return (
    <>
      <Layout title="Developers">
        <Box>
          <Box textAlign="right">
            <Button variant="contained" onClick={handleModalStatus}>
              + Add Developer
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
        {developers.map((item,index) => (
          <Box key={index} mt={3}>
            <Typography>Developer {index+1}</Typography>
            <Box mt={3}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="Enter Email"
                name="email"
                onChange={handleChange}
                // value={values.email}
              />
            </Box>
            <Box mt={3}>
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                placeholder="Enter Password"
                onChange={handleChange}
                // value={values.password}
              />
            </Box>
          </Box>
        ))}
        <Box textAlign="right" sx={{padding:'10px 0'}}>
        <Button onClick={handleAddDeveloper}>+ Add Developer</Button> 
        </Box>
      </CustomModal>
    </>
  );
};

export default Developer;
