import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";

const CountryFlags = () => {
  const [selectedFlag, setSelectedFlag] = useState("IN");

  return (
    <>
<ReactFlagsSelect
    selected={selectedFlag}
    onSelect={(code) => setSelectedFlag(code)}
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