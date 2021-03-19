import {format} from 'date-fns';
import ColumnFilter from './ColumnFilter';
export const COLUMNS=[
    {
        Header:'Id',
        accessor:'id',
        disableFilters:true
    },
    {
        Header:'First Name',
        accessor:'first_name',
        
    },
    {
        Header:'Last Name',
        accessor:'last_name',
        
    },
    {
        Header:'Date of Birth',
        accessor:'date_of_birth',
        Cell:({value})=>{return format(new Date(value),'dd/MM/yyyy')},
        
    },
    {
        Header:'Phone',
        accessor:'phone',
        
    }
];