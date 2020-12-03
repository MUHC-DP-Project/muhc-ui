import '../css/CreateProject.css'
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

const formMargin = {
  margin: "2rem",
};
const cardStyle = {
  backgroundColor: "white",
  maxWidth:"40rem",
  padding:"0.75rem"
};


function CreateProject() {
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
          <Box display="flex" 
          p={1} 
          alignContent="center"
          bgcolor="#f6f7f8"
          flexDirection="column" 
          flexWrap = "wrap">
            <Card style={cardStyle}>
              <Box style= {formMargin}>
                <FormLabel component="legend">What is the project title?</FormLabel>
                <TextField id="standard-basic" />
              </Box>
                
              
              <Box style= {formMargin}>
                <FormLabel component="legend">What is the project description?</FormLabel>
                <TextField
                  multiline
                  variant="outlined"
                  rows={2}
                  rowsMax={4}
                />
              </Box>
            
            <FormControl component="scientificApprovalFieldSet" style= {formMargin}>
              <FormLabel component="legend">Has scientific review passed?</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
            
            
            <FormControl component="feasibilityApprovalFieldSet" style= {formMargin}>
                <FormLabel component="legend">Has each participating clinic gave feasibility approval</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender1" >
                      <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="No" control={<Radio />} label="No" />
                    </RadioGroup>
            </FormControl>
            

            <Box style= {formMargin}>
              <FormLabel component="legend">What is the research committee in charge of project?</FormLabel>
              <TextField id="standard-basic"/>
            </Box>
          </Card>
        </Box>
        </form>
    );
}

export default CreateProject;