import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from '../../global';
import './SearchForm.css';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = React.useRef('');
  const navigate = useNavigate();

  React.useEffect(() => {
    searchText.current.focus()}
    ,[]);

  // const getBooksData = async()=>{
  //   let result = await reqAllBooks(searchText.current.value)
  //   console.log(result)
  // } 

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm('the lost world');
      setResultTitle('Please Enter Something ...');
    } else {
      setSearchTerm(searchText.current.value);
      // getBooksData()

    }

    navigate('/book');
  };
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input 
              type="text" 
              className='form-control'
              placeholder='The Lost World ...'
              ref={searchText}
              onSubmit={handleSubmit}
              />
              <button
              type='submit'
              className='flex flex-c'
              onClick={handleSubmit}
              >
                <FaSearch className='text-purple' size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm