import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <h1>Your Favorite Food Delivered While Coding!</h1>
            <Link to='/pizza'>Order Pizza?</Link>
        </div>
    )
}