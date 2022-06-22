import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";

export default function Blog() {
    const [news, setNews] = useState(null);
    const [newsItem, setNewsItems] = useState(null);

    const url = window.location.href.split('/');
    const id = url[url.length - 1];

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(resp => {
                if (resp.status === 200) {
                    setNews(resp.data);
                }
            });
    }, []);

    useEffect(() => {
        news && news.forEach(element => {
            if (element.id == id) {
                setNewsItems(element);
            }
        })
    }, [news])  
    return (<>
        {
            newsItem && (
                <div className='blog-layout mb-3  mx-auto'>
                    <p className='h5 fw-bold'>{newsItem.name}</p>
                    <img className='blog-img' src={newsItem.image_url} /> <br />
                </div>)
        }</>
    );

}