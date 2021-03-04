
import React from 'react';
import CustomAppBar from '../AppBar/CustomAppBar';
import {DataGrid} from '@material-ui/data-grid';
import './CustomDataGrid.css'

function CustomDataGrid(props) {
    const tableRow=props.row;
    const tableColumn=props.column;
    const tableSortModel=props.sortModel;
    const tableTitle=props.title;
    console.log("rerender");
    return (
        <React.Fragment>
            <h1>test</h1>
           <DataGrid
            className="table"
                sortModel={tableSortModel}
                rows={tableRow}
                columns={tableColumn}
                autoHeight={true}              
                /> 
        </React.Fragment>
    )
}

export default CustomDataGrid;
