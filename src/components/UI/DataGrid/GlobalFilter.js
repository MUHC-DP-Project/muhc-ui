import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
function GlobalFilter(props) {
    const [value, setValue] = useState(props.filter)
    const onChange = useAsyncDebounce(value => {
      props.setFilter(value || undefined)
    }, 1000)
    return (
      <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </span>
    )
}

export default GlobalFilter
  


