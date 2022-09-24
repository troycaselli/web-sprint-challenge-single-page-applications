import './Confirmation.css';

export default function Confirmation(props) {
    const {order} = props;

    return(
        <div className='order-container'>
            <div id='confirmation-header'>
                <h1>Order Confirmed!<br /><span>Your pizza is on its way</span></h1>
            </div>
            <div id='order-container'>
                <h4>Order Details:</h4>
                <div className='order-divider'>
                    <div id='order-name'>
                        <p>Name: {order.name}</p>
                        <p>ID #: {order.id}</p>
                    </div>
                    <div id='order-specs'>
                        <p>Size: {order.size}</p>
                        <p>Sauce: {order.sauce}</p>
                        <p>Toppings:{' '}</p>
                        <ol>
                            {order.pepperoni ? (<li>pepperoni</li>): ''}
                            {order.sausage ? (<li>sausage</li>): ''}
                            {order.canadianBacon ? (<li>canadian bacon</li>) : ''}
                            {order.spicyItalianSausage ? (<li>spicy italian sausage</li>) : ''}
                            {order.grilledChicken ? (<li>grilled chicken</li>) : ''}
                            {order.onions ? (<li>onions</li>) : ''}
                            {order.greenPepper ? (<li>green pepper</li>) : ''}
                            {order.driedTomatos ? (<li>dried tomatos</li>) : ''}
                            {order.blackOlives ? (<li>black olives</li>) : ''}
                            {order.roastedGarlic ? (<li>roasted garlic</li>) : ''}
                            {order.artichokeHearts ? (<li>artichoke hearts</li>) : ''}
                            {order.gummyBears ? (<li>gummy bears</li>) : ''}
                            {order.pineapple ? (<li>pineapple</li>) : ''}
                            {order.extraCheese ? (<li>extra cheese</li>) : ''}
                        </ol>
                        <p id='requests'>Special Requests:<br />{order.comments}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}