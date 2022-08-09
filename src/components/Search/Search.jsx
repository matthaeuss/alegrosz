import './Search.scss';

function Search({setSearch, search, products, searchFilter}) {

    function handleOnChange(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search Alegrosz"
                className="search__input"
                value={search}
                onChange={handleOnChange}
            />
            {search && (
                <ul>
                    {products.filter(searchFilter).map(({name, id}) => (
                        <li key={id}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;