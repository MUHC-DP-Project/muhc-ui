import '../css/TableComponent.css'
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';



const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#004F95',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


// function to create dummy data for testing
function createData(date, author, interest, description) {
    return { date, author, interest, description };
}
// hummy data content
const rows = [
    createData('29 March 2020', 'Iyatan Atchoro', 'Generated 1 paragraph, 1 words, 5 bytes of', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae purus vel neque elementum facilisis. Quisque velit quam, tincidunt sit amet gravida sed, rhoncus sed dui. Ut tristique, urna vel iaculis tincidunt, elit enim eleifend arcu'),
    createData('29 March 2020', 'Iya Atchoro', 'Generated 1 paragraph, 1 words, 5 bytes of', ', commodo elementum ligula leo eu leo. Nullam eget leo nulla. Cras nisi nisi, scelerisque a risus eget, auctor scelerisque quam. Aenean et mi pulvinar eros egestas ornare. Mauris tincidunt cursus pharetra. Suspendisse malesuada tincidunt mauris, a ultricies lacus commodo in. Vivamus ultricies orci id libero aliquet, ut vulputate nunc lobortis. Nulla facilisi. Praesent laoreet sem vel elit mollis, lobortis dignissim velit porttitor.'),
    createData('29 March 2020', 'tan Atchoro', 'Generated 1 paragraph, 1 words, 5 bytes of', 'Pellentesque non tellus quis neque pellentesque hendrerit. In eget sollicitudin augue, quis tincidunt quam. Nunc placerat porta lacus. Suspendisse augue libero, aliquet nec auctor blandit', 'Vivamus bibendum blandit quam a finibus. Nam nec velit dui. Praesent gravida, nulla vel cursus hendrerit, tortor ante pellentesque tortor, pretium consequat nisl lorem ac erat. Nunc ullamcorper leo sit amet neque pretium lobortis.'),
    createData('29 March 2020', 'tan Atch', 'Generated 1 paragraph, 1 words, 5 bytes of', 'Vivamus bibendum blandit quam a finibus. Nam nec velit dui. Praesent gravida, nulla vel cursus hendrerit, tortor ante pellentesque tortor, pretium consequat nisl lorem ac erat. Nunc ullamcorper leo sit amet neque pretium lobortis.'),
    createData('29 March 2020', 'Iya Atc', 'Generated 1 paragraph, 1 words, 5 bytes of', 'porttitor velit massa, blandit laoreet lorem eleifend ut. Duis fermentum purus et molestie fringilla. Pellentesque luctus nibh justo, at luctus risus feugiat a. Aliquam vitae fringilla augue. Integer porta pellentesque tellus quis pulvinar.'),
];

const useStyles = makeStyles({
    table: {
    },
});



export default function TableComponent() {
    const classes = useStyles();
    return (

        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className="TableComponent">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Date</StyledTableCell>
                                    <StyledTableCell align="center">Project Details</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.date}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">
                                            <b>{row.author}</b>
                                            <p><b>Interests :</b> {row.interest}</p>
                                            <p><b>Description:</b> {row.description}</p>

                                        </StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </Container>
        </React.Fragment>

    );
}