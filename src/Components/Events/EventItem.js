import React from "react";
import './Events.css';


const EventItem = props =>(
    <li className="events__list-item">
        <div>
                <h1>{props.event.title}</h1>
                <h2>${props.event.price}</h2>
        </div>
        <div>
            {props.authUserId !== props.event.creator._id  && <button className="btn">View Details</button>}
            {props.authUserId === props.event.creator._id  &&<p>This is your event!</p>}
        </div>
        </li>
)

export  default EventItem;
