import {format} from 'date-fns';
import {Link} from 'react-router-dom';
export const USER_COLUMN = [
    {
        Header: 'First Name',
        accessor: 'firstName'
    }, {
        Header: 'Last Name',
        accessor: 'lastName'
    }, {
        Header: 'Email',
        accessor: 'email'
    }, {
        Header: 'Role',
        accessor: 'role',
        Cell: ({value}) => {
            return !value
                ? "N/A"
                : value
        }
    }, {
        Header: 'Research Interest',
        accessor: 'researchInterests',
        Cell: ({value}) => {
            return value.length === 0
                ? "N/A"
                : value + ', '
        },
        disableSortBy: true
    }, {
        Header: 'Profession',
        accessor: 'professionalOccupation',
        Cell: ({value}) => {
            return !value
                ? "N/A"
                : value
        }
    }, {
        Header: 'Action',
        accessor: '_id',
        Cell: ({value}) => {
            return <Link
            style={{
                    textDecoration:"none",
                    color:"blue"
                }}
                to={{
                pathname: '/userreport',
                state: {
                    Id: value
                }
            }}>View</Link>
        },
        disableFilters: true,
        disableSortBy: true
    }
];
