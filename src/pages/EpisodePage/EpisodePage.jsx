import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./EpisodePage.module.css"; // Import module styles

export const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEpisodes() {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    "https://rickandmortyapi.com/api/episode"
                );
                setEpisodes(response.data.results);
            } catch (err) {
                setError("Failed to fetch episodes.");
                console.error("Error fetching episodes:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchEpisodes();
    }, []);

    if (loading) {
        return <div className="pageContainer">Loading episodes...</div>;
    }

    if (error) {
        return <div className="pageContainer">Error: {error}</div>;
    }

    return (
        <div className="pageContainer">
            <h1 className={`pageTitle ${s.episodePageTitle}`}>EpisodePage</h1>
            {episodes.map((episode) => (
                <div key={episode.id} className={s.episodeCard}>
                    <h3 className={s.episodeTitle}>
                        Эпизод: {episode.episode}
                    </h3>
                    <h2 className={s.episodeName}>
                        Название эпизода: {episode.name}
                    </h2>
                    <p className={s.episodeInfo}>
                        Дата выхода эпизода в эфир: {episode.air_date}
                    </p>
                    <p className={s.episodeInfo}>
                        Список персонажей, которые были замечены в эпизоде:{" "}
                        {episode.characters.length}
                    </p>
                </div>
            ))}
        </div>
    );
};