import './styles.css';

export const Button = ({nextPage}) => {
  return <button onClick={nextPage} className="button" type='button'>Load More</button>;
};
