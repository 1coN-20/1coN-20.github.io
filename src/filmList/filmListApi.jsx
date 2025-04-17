import { useEffect, useState } from "react"
import axios from 'axios'
import styles from '../styles/index.module.css'

export default function api({selCat}){
    const api_key = 'b79c350014575dbf5d946973f0f7d597'
    const[movies, setMovies]=useState([])
    const[loading, setLoading]=useState(true) 

    let genreIds = ""

    if(selCat === "all")
        genreIds = "28,878,18,27" //Все вместе
    else if(selCat === "action")
        genreIds = "28" //Боевик
    else if(selCat === "fantastic")
        genreIds = "878" //Фантасика
    else if(selCat === "drama")
        genreIds = "18" //Драма
    else if(selCat === "horror")
        genreIds = "27" //Ужасы
    

    useEffect(()=> {
        const fetch = async () => {
            try {
                setLoading(true)
              const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${genreIds}`
              );
              console.log(response)
              setMovies(response.data.results)
            } catch (error) {
              console.error(`Error fetching ${genreIds} movies:`, error)
            } finally{setLoading(false)}
          };
      
          fetch()
    }, [api_key, genreIds])

    return (
      <>{
        loading ? (<p>Загрузка...</p>) : (
      
        <ul className={styles.main_list_products}>
          {movies.map((movie, index) => (
            <li key={index}>
              <div className={styles.product_div1}>
                <p className={styles.product_name}>{movie.title}</p>
                <div className={styles.product_div2}>
                  {movie.poster_path && (
                    <img
                      className={styles.product_img}
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                  )}
                  <p className={styles.product_description}>{movie.overview}</p>
                  <button className={styles.addCart}>Посмотреть</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        )}
      </>
    );
}