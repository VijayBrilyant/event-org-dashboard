import React from 'react'
import ReactFlagsSelect from "react-flags-select";

const CountryFlags = ({selectedFlag, getFlagCode}) => {

  return (
    <>
<ReactFlagsSelect
    selected={selectedFlag}
    onSelect={(code) => getFlagCode(code)}
    searchable
    fullWidth={false}
    alignOptionsToTop
    showSelectedLabel = {false}
    className='menu-flags'
    selectButtonClassName="menu-flags-button"
  />
    </>
  )
}

export default CountryFlags