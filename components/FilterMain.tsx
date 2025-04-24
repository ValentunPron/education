"use client"
import React from 'react'
import SearchForm from './SearchForm'


const FilterMain = ({query}: {query?: string}) => {
  const [buttonActive, setButtonActive] = React.useState('All');

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <nav className="flex flex-wrap gap-2 justify-start md:justify-normal">
        <button
          className={`button-select ${buttonActive === 'All' && 'active'}`}
          onClick={() => setButtonActive('All')}
        >
          Всі
        </button>
        <button
          className={`button-select ${buttonActive === 'FrontEnd' && 'active'}`}
          onClick={() => setButtonActive('FrontEnd')}
        >
          FrontEnd
        </button>
        <button
          className={`button-select ${buttonActive === 'IoT' && 'active'}`}
          onClick={() => setButtonActive('IoT')}
        >
          IoT
        </button>
        <button
          className={`button-select ${buttonActive === 'Cybersecurity' && 'active'}`}
          onClick={() => setButtonActive('Cybersecurity')}
        >
          Кібербезпека
        </button>
      </nav>
      
      <div className="w-full md:w-auto">
        <SearchForm query={query} />
      </div>
    </div>
  )
}

export default FilterMain