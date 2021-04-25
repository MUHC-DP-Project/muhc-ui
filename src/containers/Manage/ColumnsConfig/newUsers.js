import {format} from 'date-fns';
import NewUserButton from './ActionsList/NewUserActions';
export const NEW_USER_COLUMN = [
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
            return <NewUserButton userId={value}/>
        },
        disableFilters: true,
        disableSortBy: true
    }
];