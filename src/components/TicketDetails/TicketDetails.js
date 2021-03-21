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

        <div className="container">
            <div className=" row mapPage" >
                <div className="col-10 col-md-4 ">
                    {
                        newData ? (
                            <div id="searchBox" className="destination">
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
                            <div style={{ padding: '10px', borderRadius: '10px', width: '100%', height: 'auto', margin: '0 0 40px 30px' }}>
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
                </div>

                <div className="col-12 col-md-7" style={{ marginLeft: '40px' }}>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>

    );
};

export default TicketDetails;