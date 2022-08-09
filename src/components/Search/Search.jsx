import {useState} from "react";
import reactStringReplace from 'react-string-replace';

import './Search.scss';

function Search({setSearch, search, products, searchFilter}) {

    const[autoComplete, setAutoComplete] = useState(false)

    function handleOnChange(event) {
        setSearch(event.target.value);
        if (event.target.value === "") {
            setAutoComplete(false)
        } else {
            setAutoComplete(true);
        }
    }

    // event.target.value === "" ? setAutoComplete(false) : setAutoComplete(true);

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search Alegrosz"
                className="search__input"
                value={search}
                onChange={handleOnChange}
            />
            {autoComplete && (
                <ul className="search__autocomplete autocomplete">
                    {products.filter(searchFilter).map(({name, id}) => (
                        <li
                            key={id}
                            className="autocomplete__item"
                            onClick={() => {
                                setSearch(name);
                                setAutoComplete(false);
                            }}>
                            {reactStringReplace(name,
                                new RegExp(`${search}`, "i"),
                                (match, i) => (
                                    <span key={i}>
                                        <span className="autocomplete__highlight">{search}</span>
                                        <span>{match}</span>
                                    </span>
                                ))}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;