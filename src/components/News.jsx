import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../components/NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {
    let headtext = props.mode === 'dark' ? 'light' : 'dark';
    let btntext = props.mode === 'dark' ? 'light' : 'dark';
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [articles, setArticles] = useState([]);
    const [page, setpage] = useState(null);
    const [Totalresults, setTotalresults] = useState(0);

    // Default fetch





    useEffect(() => {
        const fetchData = async () => {
            const nextpage = page ? '&page=' + page : '';
            const url = 'https://newsdata.io/api/1/latest?country=bd&apikey=pub_45944fb1a9de14510e09d7c3c52b9275745a4' + nextpage;
            console.log(url);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                props.setProgress(50);
                const result = await response.json();
                setArticles(result.results); // Update state with the fetched data
                setpage(result.nextPage); //set nextpage
                setTotalresults(result.totalResults);
                props.setProgress(100);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // Set loading to false
                
            }
        };

        fetchData();
    }, []);



    // fetchmore data Infinite scroll
    const fetchMoreData = async () => {
        const nextpage = page ? '&page=' + page : '';
        const url = 'https://newsdata.io/api/1/latest?country=bd&apikey=pub_45944fb1a9de14510e09d7c3c52b9275745a4' + nextpage;
        console.log(url);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setArticles(articles.concat(result.results)); // Update state with the fetched data
            setpage(result.nextPage); //set nextpage
            setTotalresults(result.totalResults);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false); // Set loading to false
        }
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

            {/* Infinite Scroll */}

            <InfiniteScroll

                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length != Totalresults}
                loader={<div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>All News are Seen</b>
                    </p>
                }>

                <div className="container"  width="100%">


                    <div className="row" >
                        {articles.map((news) => (
                            <div className="col-md-3 my-2" key={news.article_id}>
                                <NewsItem
                                    mode={props.mode}
                                    title={news.title}
                                    description={news.description}
                                    imgurl={news.image_url}
                                    newsurl={news.link}
                                    source={news.source_id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>


        </div>

    );
}

News.propTypes = {
    mode: PropTypes.string.isRequired,
};

export default News;
