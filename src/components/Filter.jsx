import '/src/styles/components/Filter.css';
import searchlogo from '/src/assets/icons/icons8-search.svg';
export function Filter({ query, onQueryChange }) {
    return (
        <div className="filter">
            <div className="searchbar">
                <input
                    type="text"
                    value={query}
                    onChange={e => onQueryChange(e.target.value)}
                    placeholder="Search projects..."
                />
                <button className="search"><img src={searchlogo} alt="" /></button>
            </div>
        </div>
    );
}
