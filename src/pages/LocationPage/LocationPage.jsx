import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./LocationPage.module.css"; // Import module styles

export const LocationPage = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchLocations() {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    "https://rickandmortyapi.com/api/location"
                );
                setLocations(response.data.results);
            } catch (err) {
                setError("Failed to fetch locations.");
                console.error("Error fetching locations:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchLocations();
    }, []);

    if (loading) {
        return <div className="pageContainer">Loading locations...</div>;
    }

    if (error) {
        return <div className="pageContainer">Error: {error}</div>;
    }

    return (
        <div className="pageContainer">
            <h1 className={`pageTitle ${s.locationPageTitle}`}>LocationPage</h1>
            {locations.map((location) => (
                <div key={location.id} className={s.locationCard}>
                    <h2 className={s.locationName}>Название локации: {location.name}</h2>
                    <p className={s.locationInfo}>
                        <span className={s.infoLabel}>Тип локации:</span> {location.type}
                    </p>
                    <p className={s.locationInfo}>
                        <span className={s.infoLabel}>Измерение:</span> {location.dimension === "unknown" ? "неизвестно" : location.dimension}
                    </p>
                    <p className={s.locationInfo}>
                        <span className={s.infoLabel}>Количество персонажей:</span> {location.residents.length}
                    </p>
                </div>
            ))}
        </div>
    );
};