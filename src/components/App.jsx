import './styles.css';
import { useState, useEffect } from 'react';
import { fetchPictures } from '../api';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import Notiflix from 'notiflix';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);
  const [showBtn, setShowBtn] = useState();

  useEffect(() => {
    async function getImages() {
      if (query !== '') {
        try {
          setIsLoading(true);
          const { hits, total } = await fetchPictures(query, page);
          setImages(prevState => [...prevState.concat(hits)]);
          setShowBtn(page < Math.ceil(total / 12));
        } catch (error) {
          Notiflix.Notify.failure(
            'Oops, something went wrong, try reloading the page'
          );
        } finally {
          setIsLoading(false);
        }
      }
    }

    getImages();
  }, [page, query, id]);

  const handleSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setId(Date.now());
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
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
          <Button nextPage={handleLoadMore} />
        </>
      )}
    </div>
  );
};
