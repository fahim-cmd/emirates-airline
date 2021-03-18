import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const Tickets = (props) => {
    const {title, price, description} = props.ticket;

    return (
        <div> 
            <Card style={{ width: '13rem', height: '16rem', marginLeft: '15px', marginTop: '110px'}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <button class="btn btn-outline-info">Buy Now</button>
                    <p>Price: ${price}</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tickets;