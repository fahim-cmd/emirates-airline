import React from 'react';
import { useParams } from 'react-router';
import './TicketDetails.css';
import fakedata from '../../fakedata/data.json';
import { useContext } from 'react';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useEffect } from 'react';

const TicketDetails = () => {
    // const [user, setUser] = useContext(UserContext);

    
    const { id } = useParams();
    const newId = id;
    console.log(newId)

    // useEffect(() => {
    //    setUser(fakedata)
    //    console.log(user)
    // }, [])



    return (
        <>
            <div className="d-flex container mapPage" >
                <div id="searchBox" className=" col-md-3 destination">
                    <label htmlFor="">Pick From</label>
                    <input type="search" name="" id="" /> <br />

                    <br />
                    <label htmlFor="">Pick To</label>
                    <input type="search" name="" id="" /> <br />

                    <br />
                    <button >Search</button>
                </div>
                <div className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </>
    );
};

export default TicketDetails;