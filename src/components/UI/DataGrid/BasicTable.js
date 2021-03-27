import React, {useMemo} from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';
import './BasicTable.css';
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
import Grid from '@material-ui/core/Grid';

//icons
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import TablePagination from '@material-ui/core/TablePagination';


function BasicTable({title,button,COLUMNS,MOCK_DATA}) {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const defaultColumn=useMemo(() => {
        return {
            Filter:ColumnFilter
        }
    }, []);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      pageOptions,
      gotoPage,
      setPageSize,
      state,
      prepareRow,
      setGlobalFilter,
    } = useTable({
      columns,
      data,
      defaultColumn
    },  
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination)
    const {pageIndex,globalFilter,pageSize}=state;

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage);
      };
    
    return (
       <div>
      <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} title={title} button={button}/>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} >
                  <Grid 
                  container
                    direction="row"
                    justify="center"
                    alignItems="center"                   
                    >
                  <Grid item {...column.getSortByToggleProps()}>{column.render('Header')}                                               
                    <span>
                    {column.isSorted
                        ? column.isSortedDesc
                        ? <IconButton aria-label="sort desc" size="small">
                            <ArrowDownwardIcon fontSize="small"/>
                        </IconButton>
                        : <IconButton aria-label="sort asc" size="small">
                        <ArrowUpwardIcon fontSize="small"/>
                        </IconButton>
                        : ''}
                    </span>
                  </Grid> 
            
                  </Grid>
                  <div>{column.canFilter?column.render('Filter'):null} </div>
                </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>

        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center" 
        >
        <TablePagination
            component="div"
            count={Number(pageSize*pageOptions.length)}
            page={pageIndex}
            onChangePage={handleChangePage}
            rowsPerPage={pageSize}
            onChangeRowsPerPage={e=>setPageSize(Number(e.target.value))}
            />                    
      </Grid> 
      </>
       </div>
    )
}

export default BasicTable
