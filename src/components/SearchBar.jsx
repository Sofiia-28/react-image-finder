import './styles.css';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="searchForm">
        <button
          type="submit"
          className="searchForm-button"
          onClick={evt => {
            onSubmit(evt.target.nextElementSibling.value);
            evt.preventDefault();
          }}
        >
          <span className="searchForm-button-label">
          </span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
