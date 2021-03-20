import React, {useMemo,useState} from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import './BasicTable.css';
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
import Grid from '@material-ui/core/Grid';

//icons
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


import TablePagination from '@material-ui/core/TablePagination';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function BasicTable() {

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
      footerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      gotoPage,
      pageCount,
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
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
        className="footer">
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
