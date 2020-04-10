import React, { useContext, useState, useRef } from 'react';
import Select from 'react-select';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import {
  SelectContainer,
  customStyles,
  InputContainer,
  Input
} from '../FilterAndSearch/FilterAndSearchStyled';

const FilterAndSearch = () => {
  const {
    filter_FavItem,
    clearFilter,
    search_FavItem,
    clearSearch,
    filterFavItems,
    search_filter_FavItems,
    clearSearchFilter
  } = useContext(FavItemContext);

  const searchInput = useRef('');

  const options = [
    { value: 'Movie', label: 'Movie' },
    { value: 'Music', label: 'Music' },
    { value: 'Books', label: 'Books' },
    { value: 'Other', label: 'Other' },
    { value: 'All', label: 'All cards' }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const filterByCategory = selectedOption => {
    if (searchInput.current.value === '') {
      if (selectedOption.value === 'All') {
        setSelectedOption(selectedOption);
        clearFilter();
        clearSearchFilter();
      } else {
        setSelectedOption(selectedOption);
        clearSearchFilter();
        filter_FavItem(selectedOption.value);
      }
    } else {
      if (selectedOption.value === 'All') {
        setSelectedOption(selectedOption);
        clearFilter();
        clearSearchFilter();
      } else {
        setSelectedOption(selectedOption);
        clearFilter();
        filter_FavItem(selectedOption.value);
        search_filter_FavItems([searchInput.current.value, selectedOption.value]);
      }
    }
  };

  const searchByInput = e => {
    if (filterFavItems === null) {
      if (searchInput.current.value !== '') {
        search_FavItem(e.target.value);
      } else {
        clearSearchFilter();
        clearSearch();
      }
    } else {
      search_filter_FavItems([e.target.value, selectedOption.value]);
    }
  };

  return (
    <>
      <InputContainer>
        <Input
          ref={searchInput}
          onChange={searchByInput}
          type="text"
          placeholder="Search card by name..."
        />
      </InputContainer>

      <SelectContainer>
        <Select
          value={selectedOption}
          onChange={filterByCategory}
          options={options}
          styles={customStyles}
          placeholder="Filter your cards"
        />
      </SelectContainer>
    </>
  );
};
export default FilterAndSearch;
