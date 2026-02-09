import '/src/styles/components/Filter.css';
import searchlogo from '/src/assets/icons/icons8-search.svg';

export function Filter() {
    return <div className="filter">
        <div className="searchbar">
            <input type="text" />
            <button className="search">
                <img src={searchlogo} alt="" />
            </button>
            {/* some tags/lists such as date etc */}
        </div>
    </div>
}