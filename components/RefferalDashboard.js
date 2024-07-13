import React from "react";
import { Link } from 'react-router-dom';
import './RefferalDashboard.css';

const refferals = [
    {id: 1, name: 'Refferal 1', reward: 50},
    {id: 2, name: 'Refferal 2', reward: 100},
];

const RefferalDashboard = () => {
    return (
        <div className="refferal-dashboard">
            <h2>Your Refferals</h2>
            <ul>
                {refferals.map(refferal => (
                    <li key={refferal.id}>
                        <Link to={`/refferal/${refferal.id}`}>{refferal.name}</Link> - Reward: ${refferal.reward}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RefferalDashboard;
