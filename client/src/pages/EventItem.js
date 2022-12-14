import { IoMdWalk } from 'react-icons/io';
import './EventItem.css';
import React from 'react';
import sendIt from './SendEmail';

class EventItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="event-item-container">
                <div>
                    <div className="event-header">
                        <div className="event-header-info">
                            <div className="event-name">Career fair</div>
                            <div className="event-time">September 30th 3:00pm</div>
                        </div>
                        <button className="attend-event" onClick={sendIt}>
                            Attend event
                            <IoMdWalk />
                        </button>
                    </div>
                    <div className="attendees-container">
                        <div className="attendees">
                            <div className="attendee-1">M</div>
                            <div className="attendee-2">R</div>
                            <div className="attendee-3">A</div>
                            <div className="attendee-4">C</div>
                        </div>
                        <div className="attendees-count">4 / 4 attending</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventItem;