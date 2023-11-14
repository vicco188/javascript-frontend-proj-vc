import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);
export const NewsProvider = ({children}) => {
    const [allNews, setAllNews] = useState([]);
    const [newsArticle, setNewsArticle] = useState({});
    console.log("kör provider")
    const getAllNews = async () => {
        const res = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (res.status === 200) {
            setAllNews(await res.json())
            
        }
    }
    useEffect(() => {
        getAllNews()
    },[])

    return (
        <NewsContext.Provider value={{allNews}}>
            {children}
        </NewsContext.Provider>
    )
}