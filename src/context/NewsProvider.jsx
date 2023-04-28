import axios from "axios";
import { createContext, useEffect, useState } from "react";


const NewsContext = createContext();

const NewsProvider = ({ children }) => {

    const [country, setCountry] = useState('us')
    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);
            setNews(data.articles);
            setTotalNews(data.totalResults);
            setPage(1)
        }

        getNews();
    }, [category, country]);
    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);
            setNews(data.articles);
            setTotalNews(data.totalResults);
        }

        getNews();
    }, [page]);

    const handleChangeCountry = e => {
        setCountry(e.target.value);
    }
    const handleChangeCategory = e => {
        setCategory(e.target.value);
    }

    const handleChangePage = (e, value) => {
        setPage(value);
    }


    return (
        <NewsContext.Provider
            value={{
                country,
                handleChangeCountry,
                category,
                handleChangeCategory,
                news,
                totalNews,
                page,
                handleChangePage
            }}
        >
            {children}
        </NewsContext.Provider>
    );
}

export {
    NewsProvider
}

export default NewsContext;