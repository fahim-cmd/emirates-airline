import React from 'react';
import { useParams } from 'react-router';
import './TicketDetails.css';
import fakedata from '../../fakedata/data.json';
import { useContext } from 'react';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';

const TicketDetails = () => {
    // const [user, setUser] = useContext(UserContext);

    const { id } = useParams();
    const newId = id;

    const fakedataItem = fakedata.filter(item => item.id === newId)
    // setUser(fakedataItem)
    // console.log(user)
    const items = fakedataItem;
  
    const handleSearch = () => {
        const searchBox = document.getElementById('searchBox').innerHTML = '';
        searchBox.innerHTML = `
            <div>
                <div> 
                    <p>Mirpur</p>
                    <pre>to</pre>
                    <p>dhanmondi</p>
                </div>
                <div>

                </div>

            </div>
        `;
    }


    return (
        <>
            <div className=" d-flex " >
                <div id="searchBox" className=" col-md-3 destination">
                    <label htmlFor="">Pick From</label>
                    <input type="search" name="" id="" /> <br />

                    <br />
                    <label htmlFor="">Pick To</label>
                    <input type="search" name="" id="" /> <br />

                    <br />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </>
    );
};

export default TicketDetails;