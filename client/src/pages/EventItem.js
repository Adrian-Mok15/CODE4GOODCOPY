import './EventItem.css';
import React from 'react';

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
                            <div className="event-name">Event name</div>
                            <div className="event-time">Event time</div>
                        </div>
                        <div className="attend-event">
                            Attend event
                        </div>
                    </div>

                    <div className="attendees">
                        <div className="attendee-1">M</div>
                        <div className="attendee-2">R</div>
                        <div className="attendee-3">A</div>
                        <div className="attendee-4">C</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventItem;