import {format} from 'date-fns';
import ButtonList from '../../../components/UI/DataGrid/ActionCell/Personal/ButtonList'
export const PROJECT_COLUMN = [
    {
        Header: 'Official title',
        accessor: 'officialProjectTitle'
    }, {
        Header: 'Description',
        accessor: 'projectDescription',
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
            return <ButtonList privilege="author"/>
        },
        disableFilters:true,
        sortable: false,
    }
];
