import React from 'react';
import { useParams } from 'react-router';
import './TicketDetails.css';
import fakeData from '../../fakedata/data.json';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useState } from 'react';

const TicketDetails = () => {
    const [newData, setNewData] = useState(true)

    const { id } = useParams();
    const newId = id;

    const ticket = fakeData.find(tkt => tkt.id === parseInt(newId))


    return (

        <div className="d-flex container mapPage" >
            {
                newData ? (
                    <div id="searchBox" className=" col-md-3 destination">
                        <label htmlFor="">Pick From</label>
                        <input type="search" name="from" id="" /> <br />

                        <br />
                        <label htmlFor="">Pick To</label>
                        <input type="search" name="to" id="" /> <br />

                        <br />
                        <div>
                            <button className="btn btn-outline-light" onClick={() => setNewData(!newData)}>Search</button>
                        </div>
                    </div>
                ) : (
                    <div style={{ padding: '10px', borderRadius: '10px', width: '100%', height: 'auto' }}>
                        <div style={{ backgroundColor: '#fb743e', padding: '10px', color: 'white', fontWeight: 'bold', borderRadius: '8px' }}>
                            <p>{ticket.pickFrom}</p> to
                                <p>{ticket.pickTo}</p>

                        </div>
                        <div className="d-flex dollar" >
                            <img src={ticket.imgURL} alt="" />
                            <p>ticket-1</p>
                            <p>BDT.{ticket.price}</p>
                        </div>
                        <div className="d-flex dollar" >
                            <img src={ticket.imgURL} alt="" />
                            <p>ticket-2</p>
                            <p>BDT.{ticket.price}</p>
                        </div>
                        <div className="d-flex dollar" >
                            <img src={ticket.imgURL} alt="" />
                            <p>ticket-3</p>
                            <p>BDT.{ticket.price}</p>
                        </div>
                    </div>
                )
            }

            <div className="col-md-8" style={{ marginLeft: '100px' }}>
                <GoogleMap></GoogleMap>
            </div>
        </div>

    );
};

export default TicketDetails;