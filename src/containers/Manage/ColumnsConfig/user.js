import {format} from 'date-fns';
import NewUserButton from './ButtonList/NewUserButton';
import ApprovedUserButton from './ButtonList/ApprovedUserButton';
const APPROVED_USER_COLUMN = [
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
            return <ApprovedUserButton userId={value}/>
        },
        disableFilters: true,
        disableSortBy:true
    }
];
const NEW_USER_COLUMN = [
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
            return <NewUserButton userId={value}/>
        },
        disableFilters: true,
        disableSortBy:true
    }
];
export {APPROVED_USER_COLUMN,NEW_USER_COLUMN}; 