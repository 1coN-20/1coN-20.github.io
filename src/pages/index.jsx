import styles from '../styles/index.module.css'
import FilmListApi from '../filmList/filmListApi.jsx'
import React, { useState } from 'react'
import filmData from '../filmList/filmData.jsx'
import FilmList from '../filmList/filmList.jsx'

export default function Main() {

    const [selectedGenre, setSelectedGenre] = useState("all");

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    const filteredFilms = selectedGenre === "all" 
        ? filmData 
        : filmData.filter(film => film.genre === selectedGenre);


    return (
        <>
            <header>
                <div className={styles.name_div}>
                    <h2>Страница каталога фильмов с динамической фильтрацией по жанру</h2>
                </div>
                <div className={styles.sort_div}>
                    <span>Выберите жанр: </span>
                    <select className={styles.sort_select} onChange={handleGenreChange}>
                        <option value="all">Все</option>
                        <option value="actions">Боевики</option>
                        <option value="drama">Драма</option>
                        <option value="fantastic">Фантастика</option>
                        <option value="horror">Ужасы</option>
                    </select>
                </div>
            </header>
            <main>
                <div className={styles.main}>
                <div className={styles.n_div}><h3>Фильмы добавленные через файлы filmData.jsx и filmList.jsx</h3></div>
                    <FilmList films={filteredFilms}/>
                    <div className={styles.name_div}><h3>Фильмы добавленные через API (нужен VPN)</h3></div>
                    <FilmListApi selCat={selectedGenre}/>
                </div>
            </main>
        </>
    );
}