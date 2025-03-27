import React, { useState } from 'react';

export default function AgeCalculator() {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [age, setAge] = useState({ years: '', months: '', days: '', hours: '', minutes: '', seconds: '' });

    const calculateAge = () => {
        if (!birthDate || !birthTime) return;

        const birthDateTime = new Date(`${birthDate}T${birthTime}`);
        const now = new Date();
        let diff = now - birthDateTime;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        diff -= years * (1000 * 60 * 60 * 24 * 365.25);

        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
        diff -= months * (1000 * 60 * 60 * 24 * 30.44);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);

        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);

        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);

        const seconds = Math.floor(diff / 1000);

        setAge({ years, months, days, hours, minutes, seconds });
    };

    return (
        <div className="main">
            <h2>Age Calculator</h2>
            <input type="date" className="in-data" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            <input type="time" className="in-data" value={birthTime} onChange={(e) => setBirthTime(e.target.value)} />
            <br />
            <button onClick={calculateAge}>Calculate Age</button>
            <br />
            <div className='result'>
                <label>Years: </label>
                <input type="text" className="text" value={age.years} readOnly /><br />
                <label>Months: </label>
                <input type="text" className="text" value={age.months} readOnly /><br />
                <label>Days: </label>
                <input type="text" className="text" value={age.days} readOnly /><br />
                <label>Hours: </label>
                <input type="text" className="text" value={age.hours} readOnly /><br />
                <label>Minutes: </label>
                <input type="text" className="text" value={age.minutes} readOnly /><br />
                <label>Seconds: </label>
                <input type="text" className="text" value={age.seconds} readOnly /><br />
            </div>
        </div>
    );
}
