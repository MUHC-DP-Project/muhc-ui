import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import './BasicTable.css';
function GlobalFilter(props) {
    const [value, setValue] = useState(props.filter)
    const onChange = useAsyncDebounce(value => {
      props.setFilter(value || undefined)
    }, 300)
    return (
      <div className="globalFilter" >
        <TextField 
        placeholder="Search" 
        variant="outlined"   
        className="globalFilterText"         
        value={value || ''}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        InputProps={{
          startAdornment: <SearchIcon className="globalFilterIcon"/>         
        }}
        />
      </div>
    )
}

export default GlobalFilter
  


