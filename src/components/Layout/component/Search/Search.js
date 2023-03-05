import './search.scss'

const Search = ( {className} ) => {
  return (
    < div className={className}>
        <div className="search-container">
            <div className='search-text'>
                <div className="search-greating">Good</div>
                <div className="search-heading">Where should we deliver your food today?</div>
            </div>
            
            <div className='input-search'>
                  <input
                      placeholder="Nhập địa chỉ của bạn"
                  />
                    
            </div>
            <button>Tìm Kiếm</button>
        </div>
    </div>
  )
}

export default Search