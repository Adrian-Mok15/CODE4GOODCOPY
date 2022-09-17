import './Map.css';
import {GoogleMap, useLoadScript, MarkerF, InfoWindow} from '@react-google-maps/api';
import EventItem from './EventItem';
import { useMemo } from 'react';
import React from 'react';
// require('dotenv').config()
import axios from "axios"

import AddModal from '../components/AddModal/AddModal'
{/* <script src="https://unpkg.com/axios/dist/axios.min.js"></script> */}


export default function Map(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    });
    if (!isLoaded) return <div>Loading...</div>

    geocode();

    function geocode(){
      var location = "22 Main st Boston MA";//hardcoded
      axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
        params:{
          address:location,
          key: process.env.REACT_APP_GOOGLE_MAPS_KEY
        }
      })
      .then(function(response){
        // console.log(response.data.results[0] + "hello");
        // console.log((response.data.results[0].geometry.location.lng));
        let coord = (response.data.results[0].geometry.location);
        let lat = coord.lat;
        let lon = coord.lng;

        console.log(lat + " " + lon);
      })
    }

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
{/*                  
{longitude: -73.999157, latitude: 40.754475, stationName: '10 AV/W 34 ST', id: '401404', routes: Array(1), …}
1
: 
{longitude: -73.998776, latitude: 40.75433, stationName: 'W 34 ST/10 AV', id: '403192', routes: Array(1), …}
2
: 
{longitude: -74.000606, latitude: 40.752373, stationName: '10 AV/W 30 ST', id: '401402', routes: Array(1), …}
3
: 
{longitude: -73.997736, latitude: 40.75408, stationName: 'W 34 ST/DYER AV', id: '403519', routes: Array(1), …}
4
: 
{longitude: -74.000858, latitude: 40.755366, stationName: 'W 34 ST/HUDSON BL', id: '803079', routes: Array(1), …}
5
: 
{longitude: -73.996625, latitude: 40.753153, stationName: '9 AV/W 34 ST', id: '401501', routes: Array(1), …}
6
: 
{longitude: -74.001906, latitude: 40.755718, stationName: 'W 34 ST/11 AV', id: '403191', routes: Array(1), …}
7
: 
{longitude: -74.002186, latitude: 40.755629, stationName: '11 AV/W 34 ST', id: '405285', routes: Array(1), …}
8
: 
{longitude: -74.002167, latitude: 40.755664, stationName: '11 AV/W 34 ST', id: '403816', routes: Array(1), …}
9
: 
{longitude: -74.00191, latitude: 40.755882, stationName: '34 St-Hudson Yards', id: '726N', routes: Array(2), …}
10
: 
{longitude: -74.00191, latitude: 40.755882, stationName: '34 St-Hudson Yards', id: '726S', routes: Array(2), …}
11
: 
{longitude: -73.996044, latitude: 40.753361, stationName: 'W 34 ST/9 AV', id: '403528', routes: Array(1), …}
12
: 
{longitude: -73.996044, latitude: 40.753361, stationName: 'W 34 ST/9 AV', id: '403528', routes: Array(2), …}
13
: 
{longitude: -73.995857, latitude: 40.753106, stationName: 'W 34 ST/9 AV', id: '401818', routes: Array(2), …}
14
: 
{longitude: -73.995857, latitude: 40.753106, stationName: 'W 34 ST/9 AV', id: '401818', routes: Array(2), …} */}


                <MarkerF position={{ lat: 40.7128, lng: -74.0060 }} />

                <MarkerF position={{ lat: 40, lng: -74 }} />



                
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
        <div>
          <AddModal />
          <div className="events-container">
            <EventItem />
            <EventItem />
            <EventItem />
            <EventItem />
          </div>
        </div>
        
        <Map />
      </div>
    )
    

}