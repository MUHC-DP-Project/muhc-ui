import '../css/CreateProject.css'
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));
const numberInput = {
  maxWidth: "9rem",
};
const formMargin = {
  margin: "2rem",
};
const cardStyle = {
  backgroundColor: "white",
  maxWidth:"45rem",
  padding:"0.75rem",
  margin:"5rem"
};

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
              <Typography variant="h3" style= {formMargin}>
                Create a project
              </Typography>
              <Box style= {formMargin}>
                <FormLabel component="legend">What is the project title?</FormLabel>
                <TextField variant="outlined" id="standard-basic" />
              </Box>
                
              <Box style= {formMargin}>
                <FormLabel component="legend">What is the project description?</FormLabel>
                <TextField
                  multiline
                  variant="outlined"
                  rows={3}
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
            <FormLabel component="legend">What clinics are involved?</FormLabel>
              {AddClinicMenu()}
            </Box>

            <Box style= {formMargin}>
              <FormLabel component="legend">What is the research committee in charge of project?</FormLabel>
              <TextField variant="outlined" id="standard-basic"/>
            </Box>

            <Box style= {formMargin}>
              <FormLabel component="legend">How many clinicians?</FormLabel>
              <TextField style= {numberInput} variant="outlined" id="standard-basic"/>
            </Box>

            <Box style= {formMargin}>
              <FormLabel component="legend">How many participants?</FormLabel>
              <TextField style= {numberInput} variant="outlined" id="standard-basic"/>
            </Box>

            <Box style= {formMargin}>
              <FormLabel component="legend">How many students?</FormLabel>
              <TextField style= {numberInput} variant="outlined" id="standard-basic"/>
            </Box>



            <Box alignContent="center" style={formMargin}>
              <Button variant="contained" color="secondary">
                Submit Project
              </Button>
            </Box>

          </Card>
        </Box>
      </form>
    );
}

function AddClinicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={formMargin}
        onClick={handleClick}
      >
        Add Clinic +
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Clinic A" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Clinic B" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Clinic C" />
        </StyledMenuItem>
      </StyledMenu>
    </div>




  );
}

export default CreateProject;