import '../css/CreateProject.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function CreateProject() {
    const classes = useStyles();
    return (
        <form className={classes.root} autoComplete="off">
        <div>
          <TextField id="standard-basic" label="Project Title" />
        </div>
        <div>
          <TextField
            label="Project Description"
            multiline
            rows={2}
            rowsMax={4}
          />
        </div>
        <div>
        <FormControl component="scientificApprovalFieldSet">
          <FormLabel component="legend">Has scientific review passed?</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
        </div>
        <div>
        <FormControl component="feasibilityApprovalFieldSet">
            <FormLabel component="legend">Has each participating clinic gave feasibility approval</FormLabel>
                <RadioGroup row aria-label="gender" name="gender1" >
                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
        </FormControl>
        </div>

        <div>
            <FormLabel component="legend">What is the research committee in charge of project?</FormLabel>
            <TextField id="standard-basic"  />
        </div>
        </form>
    );
}

export default CreateProject;