import './Map.css';
import {GoogleMap, useLoadScript, MarkerF, InfoWindow} from '@react-google-maps/api';
import EventItem from './EventItem';
import { useMemo } from 'react';
import React from 'react';

export default function Map(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA3F0vP9ymuzI_mAJP2BNtxioSSbdqkri0',
    });
    if (!isLoaded) return <div>Loading...</div>

    function Map() {
        const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []);
        const [selected, setSelected] = React.useState(null);
        return (
          <div className="map-container">
            <GoogleMap zoom={11} 
                center={center} 
                mapContainerClassName="map-container">
                {/* {Object.values(props.courses).map((course) => {
                    return <Marker key={Math.random() * 1000000000} 
                    position={{lat: course.location.lat, lng: course.location.long}}
                    onClick={() => {setSelected(course)}}/>
                })} */}
                <MarkerF position={{ lat: 40.7128, lng: -74.0060 }} />
                {/* {selected ? <InfoWindow position={{lat: selected.location.lat, lng: selected.location.long}} onCloseClick={() => setSelected(null)}>
                    <div className="course-info">
                        <div className="course-photo">
                            lorem ipsum dolor
            
                            <img className="event-img" src="" alt="course-photo"/>
                        </div>
                    </div>
                </InfoWindow> : null} */}
            </GoogleMap>
          </div>
        )
    }

    return (
      <div className="maps-page">
        <Map />
        <EventItem />
      </div>
    )
    

}