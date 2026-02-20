import '/src/styles/components/Filter.css';
import searchlogo from '/src/assets/icons/icons8-search.svg';
export function Filter({ query, onQueryChange, sort, onSortChange }) {
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
                <select id="sort" value={sort} onChange={e => onSortChange(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="title">Title</option>
                </select>

            </div>
        </div>
    );
}