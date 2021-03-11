import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import MUI_TextField from '../MaterialUI/MUI_TextField';
import Typography from '@material-ui/core/Typography';
import {Field} from 'redux-form';
import {v4 as uuidv4} from 'uuid';
import './ListOfUsers.css';
//Icons
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
function ListOfUsers(props) {
    const title = props.title;
    const field_props=props.field_props;

    const [list_of_users,
        set_list_of_users] = useState([
        {
            fName: "",
            lName: "",
            id: uuidv4()
        }
    ]);
    function handleAdd() {
        set_list_of_users(preItems => {
            return [
                ...preItems, {
                    fName: "",
                    lName: "",
                    id: uuidv4()
                }
            ]
        });
    }
    function handleRemove(i) {
        const new_list_of_users = [...list_of_users];
        const new_list = new_list_of_users.filter((item, index) => {
            return index !== i
        });
        set_list_of_users(new_list);
    }

    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm={12}>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        style={props.field_props.style_title}>
                        <Grid item>
                            <Typography variant="h5" gutterBottom>{title}</Typography>
                        </Grid>
                        <Grid
                            item
                            style={{
                            marginLeft: 15,
                            marginBottom: 10
                        }}>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => handleAdd()}>
                                <AddIcon/>
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
                {list_of_users.map((item, index) => {
                    return <Grid item sm={12}>
                        <Grid
                            container
                            className='item-align'
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                            spacing={3}
                            key={item.id}>
                            <Grid item sm={5}>
                                <Field component={MUI_TextField} name={field_props.symbol+"fName_"+item.id} label="First Name" {...field_props} validate={props.validate} fullwidth={true}/>
                            </Grid>
                            <Grid item sm={5}>  
                            <Field component={MUI_TextField} name={field_props.symbol+"lName_"+item.id} label="Last Name" {...field_props} validate={props.validate} fullwidth/>
                            </Grid>
                            <Grid item sm={2}>
                                {index !== 0 && <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="remove"
                                    onClick={() => handleRemove(index)}>
                                    <RemoveSharpIcon/>
                                </Fab>}
                            </Grid>
                        </Grid>

                    </Grid>

                })}

            </Grid>

        </React.Fragment>
    )
}

export default ListOfUsers
