import React from 'react';
import emirates from '../../images/emirates.jpg';
import Tickets from '../Tickets/Tickets';

const Home = () => {

    const tickets = [
        {
            id: 1,
            title: 'one time ticket',
            description: 'Standard Single chair are designed in open -concept front area and have many facilities.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            price: 119
        },
        {
            id: 2,
            title: 'one day pass',
            description: 'Superior Double chair are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            price: 149
        },
        {
            id: 3,
            title: 'Monthly pass',
            description: ' Have some of in-room facilities and are designed in open-concept internal area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            price: 192
        },
        {
            id: 4,
            title: 'Annual pass',
            description: ' Have some  of in-room facilities and are designed in open-concept internal area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            price: 199
        }
    ]

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${emirates})`, width: '100%', height: '580px' }} >

            <div className="row" style={{ marginLeft: '90px' }}>
                {
                    tickets.map(ticket => <Tickets ticket={ticket} key={ticket.price}></Tickets>)
                }

            </div>
        </div>
    );
};

export default Home;