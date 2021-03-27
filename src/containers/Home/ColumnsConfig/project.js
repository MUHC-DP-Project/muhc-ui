import {format} from 'date-fns';
import ButtonList from '../../../components/UI/DataGrid/ActionCell/Personal/ButtonList'
export const PROJECT_COLUMN = [
    {
        Header: 'Official title',
        accessor: 'officialProjectTitle'
    }, {
        Header: 'Description',
        accessor: 'projectDescription'
    }, {
        Header: 'Project Start',
        accessor: 'startDateProject',
        Cell: ({value}) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    }, {
        Header: 'Project End',
        accessor: 'endDateProject',
        Cell: ({value}) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    }, {
        Header: 'Study Size',
        accessor: 'studySize'
    }
    ,{
        Header:'Action',
        accessor:'_id',
        Cell: ({value}) => {
            return <ButtonList privilege="author"/>
        },
        disableFilters:true
    }
];
