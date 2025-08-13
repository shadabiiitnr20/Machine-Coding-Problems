import { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [numberofPages, setNumberOfPages] = useState(null);

  const LIMIT = 10;
  const SKIP = (currentPage - 1) * LIMIT;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${SKIP}&select=title,price,category,brand`
      );
      const data = await response.json();
      const { products, total } = data;
      setNumberOfPages(Math.ceil(total / LIMIT));
      setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <div className='m-2 p-1'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => {
          return (
            <div key={item.id} className='border border-black m-2 p-[6px]'>
              <h4 className='font-bold underline'>
                {item.id}. {item.title}
              </h4>
              <div className='flex flex-row gap-4'>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
                <p>Brand: {item.brand}</p>
              </div>
            </div>
          );
        })
      )}
      {!loading && (
        <div className='flex flex-row items-center justify-center mx-1 p-1'>
          {currentPage > 1 && (
            <span
              className='m-1 p-2 bg-slate-100 rounded-md hover:cursor-pointer'
              onClick={handlePrevClick}
            >
              Prev
            </span>
          )}
          {[...Array(numberofPages).keys()].map((page, index) => (
            <span
              className={`m-1 p-2 w-10 text-center rounded-md hover:cursor-pointer ${
                currentPage === page + 1
                  ? 'font-semibold bg-slate-400'
                  : 'font-normal bg-slate-100'
              }`}
              key={index}
              onClick={() => handlePagination(page + 1)}
            >
              {page + 1}
            </span>
          ))}
          {currentPage !== numberofPages && (
            <span
              className='m-1 p-2 bg-slate-100 rounded-md hover:cursor-pointer'
              onClick={handleNextClick}
            >
              Next
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
