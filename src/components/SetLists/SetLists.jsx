import React from 'react';
import './SetLists.css';
import {Link} from 'react-router-dom';

const SetLists = (props) => {
    return (
        <div className="grid">
            <div className="row">
                {props.studySets.map(s => (
                    <div className="thumbnail">
                        <p><Link to={`/flashcard/${s._id}`}>{s.title}</Link></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SetLists;