import React from "react";
import { useParams } from 'react-router-dom';
import './RefferalDetail.css';

const refferals = [
    {id: 1,name: 'Refferal 1', reward: 50, details: 'Details of Refferal 1'},
    {id: 2,name: 'Refferal 2', reward: 100, details: 'Details of Refferal 2'},
];

const RefferalDetail = () => {
const { id } = useParams();
const refferal = refferals.find(r => r.id ===parseInt(id));

if (!refferal) {
    return <p> Refferal not found</p>;
}

return (
    <div>
        <h2>{refferal.name}</h2>
        <p>{refferal.details}</p>
        <p>Reward: ${refferal.reward}</p>
    </div>
);
};

export default RefferalDetail;