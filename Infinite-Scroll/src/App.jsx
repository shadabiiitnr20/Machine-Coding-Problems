import { useState, useEffect } from 'react';

const App = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://meme-api.com/gimme/20');
      const data = await res.json();
      setLoading(false);
      setMemes((memes) => [...memes, ...data.memes]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    //scrollY - how much I have scrolled on the page
    //innerHeight - height of the window (visible section)
    //document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  useEffect(() => {
    fetchMemes();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h3 className='text-3xl font-bold underline m-2'>Memes</h3>
      <hr />
      <div className='grid grid-cols-4 gap-4 m-4 h-fit'>
        {memes.map((item, index) => {
          return (
            <div key={index} className='border border-black p-2'>
              <img src={item.url} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;
