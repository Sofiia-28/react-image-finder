import './styles.css';
import { Component } from 'react';
import { fetchPictures } from '../api';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    id: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, id } = this.state;
    if (
      prevState.query !== query ||
      prevState.page !== page ||
      prevState.id !== id
    ) {
      try {
        this.setState({ isLoading: true, error: false });
        const initialSearch = await fetchPictures(query, page);
        this.setState(prevState => {
          const { hits, total } = initialSearch;
          return {
            images: [...prevState.images, hits],
            showBtn: page < Math.ceil(total / 12),
          };
        });
      } catch (error) {
        console.log(error);
        Notiflix.Notify.failure(
          'Oops, something went wrong, try reloading the page'
        );
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
      id: Date.now(),
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, showBtn } = this.state;

    return (
      <div className="app">
        <SearchBar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} />
          </>
        )}
        {isLoading === true && (
          <>
            <Loader />
          </>
        )}
        {showBtn && (
          <>
            <Button nextPage={this.handleLoadMore} />
          </>
        )}
      </div>
    );
  }
}
