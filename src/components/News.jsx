import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../components/NewsItem';

function News(props) {
    let headtext = props.mode === 'dark' ? 'light' : 'dark';
    let btntext = props.mode === 'dark' ? 'light' : 'dark';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);
    const [page, setpage] = useState(null);

    // Default fetch



    useEffect(() => {
      const fetchData = async () => {
        const url = "https://newsdata.io/api/1/latest?country=bd&apikey=pub_45944fb1a9de14510e09d7c3c52b9275745a4";


          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const result = await response.json();
              setArticles(result.results); // Update state with the fetched data
              setpage(result.nextPage); //set nextpage
          } catch (error) {
              setError(error);
          } finally {
              setLoading(false); // Set loading to false
          }
      };

      fetchData();
  }, []);

  // nextpage

const handlenextpage= async()=>
{
  console.log('nextpage');
    const url = 'https://newsdata.io/api/1/latest?country=bd&apikey=pub_45944fb1a9de14510e09d7c3c52b9275745a4&page='+page;
console.log('url '+url);
console.log(page);

      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setArticles(result.results); // Update state with the fetched data
          setpage(result.nextPage); //set nextpage
      } catch (error) {
          setError(error);
      } finally {
          setLoading(false); // Set loading to false
      }
  };




const handlepreviouspage=()=>
{
  console.log('previous');
}





    if (loading) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    } else if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h3 className={'my-5 text-' + headtext}><u>TOP HEADLINES</u></h3>
            <div className="container">
                <div className="row">
                    {articles.map((news) => (
                        <div className="col-md-3 my-2" key={news.article_id}>
                            <NewsItem
                                mode={props.mode}
                                title={news.title}
                                description={news.description}
                                imgurl={news.image_url}
                                newsurl={news.link}
                            />
                        </div>
                    ))}
                </div>
                <div className="container d-flex justify-content-around my-3">
                  <button className={'btn btn-sm btn-'+btntext}disabled onClick={handlepreviouspage}>	&larr; Previous</button>
                  <button className={'btn btn-sm btn-'+btntext} onClick={handlenextpage}>	Next &rarr;</button>

                </div>
            </div>
        </div>
    );
}

News.propTypes = {
    mode: PropTypes.string.isRequired,
};

export default News;
