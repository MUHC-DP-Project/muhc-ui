import {format} from 'date-fns';
import ApprovedUserButton from './ActionsList/ApprovedUserActions';
export const APPROVED_USER_COLUMN = [
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
        Header: 'Role',
        accessor: '_id',
        Cell: ({value}) => {
            return <ApprovedUserButton userId={value}/>
        },
        disableFilters: true,
        disableSortBy:true
    }
];

