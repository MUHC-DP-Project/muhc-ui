import React,{useState} from 'react'
import {useAsyncDebounce} from 'react-table'
function ColumnFilter({ column,filter }) {
    const { filterValue, setFilter } = column;
    const [value, setValue] = useState(filter);
    const onChange=useAsyncDebounce(value=>{
        setFilter(value||undefined)
    },1000)//300-400 ms delay
    return (
        <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={e => 
          {
            setFilter(e.target.value)
          onChange(e.target.value)
          }
          }
        />
      </span>
    )
}

export default ColumnFilter
