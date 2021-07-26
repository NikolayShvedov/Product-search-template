import React, { useEffect, useState } from 'react';
import { debounce } from '@material-ui/core';
import { Results } from '../Results/Results';
import { Loupe } from '../../assets';
import { InputProps } from '../../types';
import { IBeers } from '../../types/Beers';
import './Input.css';
import { getBeers, getBeersByName } from '../../utils/api';

export const Input: React.FC<InputProps>  = () => {

  const users = debounce(fetchUsers, 500);
  const [beers, setBeers] = useState<IBeers[]>([]);
  
  useEffect(() => {
    users('');
  }, []);

  async function fetchUsers(value: string) {
    try {
      if(value === '') {
        setBeers(await getBeers());
      } else {
        setBeers(await getBeersByName(value));
      }
    } catch (e) {
      alert(e);
    }
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    users(e.target.value);
  };

  return (
    <div>
			<p className="search_info">Search for something</p>
      <div className="search_form">
        <img src={Loupe} alt="loupe"/>
        <input type="text" 
          className="search_input"
          placeholder="Barnsley Brew Coffee" 
          onChange={changeHandler}
        />
      </div>
      <hr className="search_line" data-align="center" color="Black"/>
      <p className="bottom_text">
        Just type something in input above to start searching. 
        Search presented by public API, and all content are fake (or maybe not)
      </p>
      <p className="result_text">Results:</p>
      <Results beers={beers}/>
    </div>
  );
};

export default Input;