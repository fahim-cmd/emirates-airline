import React from 'react';
import { useParams } from 'react-router';

const TicketDetails = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h2>ticket details page</h2>
        </div>
    );
};

export default TicketDetails;