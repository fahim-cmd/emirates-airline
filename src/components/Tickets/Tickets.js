import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tickets = (props) => {
    const { title, price, description, id } = props.ticket;

    return (
        <div className="d-flex justify-content-between" >
            <div className='col-sm-6 col-lg-3 col-md-3 '>
                <Card style={{ width: '13rem', height: '16rem', marginLeft: '15px', marginTop: '60px', color: 'white', backgroundImage: ' linear-gradient(#41729F, #5885AF, #274472)' }}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <button class="btn btn-outline-light mb-2"><Link to={`/ticketDetails/${id}`}>Buy Now</Link> </button>
                        
                        <p style={{marginBottom: '5px'}}>Price: ${price}</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Tickets;