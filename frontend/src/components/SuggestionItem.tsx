import React from 'react';

const SuggestionItem = ({ imageUrl, title, price, statValue }) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={imageUrl} className="w-10" alt="Placeholder" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="stat-value text-primary">{statValue}</div>
                </div>
            </div>
        </div>
    );
};

export default SuggestionItem;
