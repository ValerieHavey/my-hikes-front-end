import { useState, useEffect } from 'react';

const HikeDetail = (props) => {
    if (!props.selected)
        return (
    <div>
        <h1>No Details</h1>
    </div>
        );
        return (
            <div>
                <h1>{props.selected.name}</h1>
                <h2>Location: {props.selected.location}</h2>
                <h2>
                    Length: {props.selected.length} mile{props.selected.length > 1 ? 's' : ''}
                </h2>
            </div>
        );
};

export default HikeDetail;