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
        Header: 'Verification Note',
        accessor: 'verificationNotes'
    }, {
        Header: 'Sign Up Date',
        accessor: 'createdAt',
        Cell: ({value}) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    }, {
        Header: 'Action',
        accessor: '_id',
        Cell: ({value}) => {
            return <Link
                to={{
                pathname: '/',
                state: {
                    Id: value
                }
            }}>View</Link>
        },
        disableFilters: true,
        disableSortBy:true
    }
];
