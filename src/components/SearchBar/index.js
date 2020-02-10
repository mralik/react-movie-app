import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

import {H3, InputWrap, SearchBarContainer, SearchIcon, SearchInput} from './styled';

function Search({ handler, value }) {
  return (
    <SearchBarContainer>
        <div><H3 href={`/`}>FMOVIES</H3></div>
     <InputWrap>
         <SearchIcon>
             <MdSearch />
         </SearchIcon>
         <SearchInput
             onChange={handler}
             value={value}
             placeholder='Search Movies ...'
         />
     </InputWrap>
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string
};

Search.defaultProps = {
  handler: () => {},
  value: ''
};

export default Search;
