import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);
export const NewsProvider = ({children}) => {
    const [allNews, setAllNews] = useState([]);
    const [newsArticle, setNewsArticle] = useState({});

    const getAllNews = async () => {
        const res = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (res.status === 200) {
            setAllNews(await res.json());  
        }
    }

    const getNewsArticle = async (id) => {
        const res = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        if (res.status === 200){
            setNewsArticle(await res.json());
        }
    }

    const clearArticle = () => {
        setNewsArticle({});
    }

    useEffect(() => {
        getAllNews()
    },[])

    return (
        <NewsContext.Provider value={{allNews, getNewsArticle, newsArticle, clearArticle}}>
            {children}
        </NewsContext.Provider>
    )
}