import React, { useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function SearchButton() {
  const [showInput, setShowInput] = useState(false);

  function toggleInput() {
    setShowInput(!showInput);
  }

  if (!showInput)
    return (
      <SearchIcon
        className='navbar__search-input__icon'
        onClick={toggleInput}
      />
    );

  return (
    <FormControl className='navbar__search-input__container'>
      <Input
        className='navbar__search-input'
        disableUnderline
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon
              className='navbar__search-input__icon'
              onClick={toggleInput}
            />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchButton;
