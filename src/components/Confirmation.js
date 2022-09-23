
export default function Confirmation(props) {
    const {order} = props;

    return(
        <div>
            <div>
                <h1>Your Order is Confirmed!</h1>
                <h3>Your pizza is on its way!</h3>
            </div>
            <div>
                <h4>Order Details:</h4>
                <p>ID #: {order.id}</p>
                <p>Name: {order.name}</p>
                <p>Size: {order.size}</p>
                <p>Sauce: {order.sauce}</p>
                <ol>Toppings:{' '}
                    {order.pepperoni ? (<li>pepperoni</li>): ''}
                    {order.sausage ? (<li>sausage</li>): ''}
                    {order.canadianBacon ? (<li>canadianbacon</li>) : ''}
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
            </div>
        </div>
    )
}