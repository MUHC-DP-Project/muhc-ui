import {format} from 'date-fns';
import {Link} from 'react-router-dom';
export const PROJECT_COLUMN = [
    {
        Header: 'Official title',
        accessor: 'officialProjectTitle'
    }, {
        Header: 'Description',
        accessor: 'projectDescription',
        Cell: ({value}) => {
            if(value.length>100)
            return value.substring(0,100)+'...';
            else return value;
        },
        disableSortBy: true
    }, {
        Header: 'Keywords',
        accessor: 'keywords',
        Cell: ({value}) => {
            return value+', '
        },
        disableSortBy: true
    }, {
        Header: 'Project Start',
        accessor: 'startDateProject',
        Cell: ({value}) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    }, {
        Header: 'Project Conception',
        accessor: 'projectConception.projectStage'
    }
    ,{
        Header:'Action',
        accessor:'_id',
        Cell: ({value}) => {
            return <Link
                style={{
                    textDecoration:"none",
                    color:"blue"
                }}
                to={{
                pathname: '/projectreport',
                state: {
                    Id: value
                }
            }}>View</Link>
        },
        disableFilters: true,
        disableSortBy:true
    }
];
