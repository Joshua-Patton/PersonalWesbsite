import '/src/styles/components/Filter.css';
import searchlogo from '/src/assets/icons/icons8-search.svg';
export function Filter({ query, onQueryChange }) {
    return (
        <div className="filter">
            <div className="searchbar">
                <img src={searchlogo} alt="" />
                <input
                    type="text"
                    value={query}
                    onChange={e => onQueryChange(e.target.value)}
                    placeholder="Search either title, date, tags..."
                />

            </div>
        </div>
    );
}