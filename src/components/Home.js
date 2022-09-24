import {Link} from 'react-router-dom';
import './Home.css';

export default function Home() {
    return(
        <div className='home-container'>
            <h1>Your Favorite Food Delivered While Coding!</h1>
            <Link to='/pizza' id='order-pizza'>Order Pizza?</Link>
        </div>
    )
}