import React, {useMemo} from 'react';
import {useTable,useSortBy,useGlobalFilter,useFilters,usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import './BasicTable.css';
import GlobalFilter from './GlobalFilter';
import ColumnFilter from './ColumnFilter';
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
    const {pageIndex,globalFilter}=state;

    return (
       <div>
      <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <div>{column.canFilter?column.render('Filter'):null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
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
        <div>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={()=>previousPage()}  disabled={!canPreviousPage}>
            Previous
        </button>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>
            Next
        </button>
        </div>
      </>
       </div>
    )
}

export default BasicTable
