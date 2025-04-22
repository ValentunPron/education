import React from 'react'
import Form from 'next/form'
// import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query}: {query?: string}) => {

  return (
    <Form action='/' scroll={false} className='search'>
      <input 
            type="text"
            name='query'
            defaultValue={query}    
            placeholder="Пошук курсів..." 
            className="w-full focus:ring-0 focus:outline-none"
        />

      <div className='flex gap-2'>
        {
          query && <SearchFormReset />
        }

        <button className="hover:scale-115 transition-all" type="submit">
            <Search />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm