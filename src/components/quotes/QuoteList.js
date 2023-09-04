import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

// dùng để  sắp xếp id trong quote
const sortQuotes = (quotes, ascending) => { // ascending sắp xếp tăng giảm (boolean)
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

// dùng để xử lý nút nhấn asc và des , đưa props.quotes vào QuoteItem
const QuoteList = (props) => {
  const history = useHistory();

  const location = useLocation();// được sử dụng để lấy thông tin về vị trí hiện tại trong ứng dụng.

  const queryParams = new URLSearchParams(location.search);//lấy các tham số truyền vào URL thông qua location.search.

  const isSortingAscending = queryParams.get('sort') === 'asc';
  console.log(isSortingAscending)

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);// truyền props.quotes vào và xác định xem có phải isSortingAscending là asc 
  // nếu là asc thì quotes được truyền vào sẽ sắp xếp tăng dần 

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,// lấy url 
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        {/* event này để thực hiện thay đổi tăng giảm id quocte */}
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
