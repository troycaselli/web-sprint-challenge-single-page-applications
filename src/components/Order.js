import {Link} from 'react-router-dom';
import './Orders.css';

export default function Order(props) {
    const {values, change, submit, errors, disabled} = props;

    return(
        <section className='order-page'>
            <div className='box'>
                <div className='heading'>
                    <h2>Build Your Own Pizza</h2>
                    <img src='../Assets/Pizza.jpg' alt='pizza'/>
                    <img src='pizza.jpg' alt='pizza'/>
                </div>
                <form id='pizza-form' onSubmit={submit}>
                    <h3>Build Your Own Pizza</h3>
                    <div className='grey'>
                        <label>Name:{' '}
                            <input
                                id='name-input'
                                type='text'
                                name='name'
                                value={values.name}
                                onChange={change}
                                />
                        </label>
                        <p className='errors'>{errors.name}</p>
                    </div>
                    <div className='basic'>
                        <label>Choose a Size:{' '}
                            <select 
                                id='size-dropdown'
                                name='size'
                                value={values.size}
                                onChange={change}>
                                <option value=''>--Select--</option>
                                <option value='6"'>6"</option>
                                <option value='12"'>12"</option>
                                <option value='16"'>16"</option>
                                <option value='20"'>20"</option>
                            </select>
                        </label>
                        <p className='errors'>{errors.size}</p>
                    </div>
                    <div className='grey'>
                        <p className='title-margin'> Choose a Sauce:</p>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Original Red'
                                checked={values.sauce === 'Original Red'}
                                onChange={change}
                                />Original Red
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='Garlic Ranch'
                                checked={values.sauce === 'Garlic Ranch'}
                                onChange={change}
                                />Garlic Ranch
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value='BBQ Sauce'
                                checked={values.sauce === 'BBQ Sauce'}
                                onChange={change}
                                />BBQ Sauce
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='sauce'
                                value="Spinach Alfredo"
                                checked={values.sauce === 'Spinach Alfredo'}
                                onChange={change}
                                />Spinach Alfredo
                        </label>
                        <p className='errors'>{errors.sauce}</p>
                    </div>
                    <div className='basic'>
                        <p className='title-margin'>Choose your Toppings:</p>
                        <label>
                            <input 
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={change}
                                />Pepperoni
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={change}
                                />Sausage
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='canadianBacon'
                                checked={values.canadianBacon}
                                onChange={change}
                                />Canadian Bacon
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='spicyItalianSausage'
                                checked={values.spicyItalianSausage}
                                onChange={change}
                                />Spicy Italian Sausage
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='grilledChicken'
                                checked={values.grilledChicken}
                                onChange={change}
                                />Grilled Chicken
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                onChange={change}
                                />Onions
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='greenPepper'
                                checked={values.greenPepper}
                                onChange={change}
                                />Green Pepper
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='driedTomatos'
                                checked={values.driedTomatos}
                                onChange={change}
                                />Dried Tomatos
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='blackOlives'
                                checked={values.blackOlives}
                                onChange={change}
                                />Black Olives
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='roastedGarlic'
                                checked={values.roastedGarlic}
                                onChange={change}
                                />Roasted Garlic
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='artichokeHearts'
                                checked={values.artichokeHearts}
                                onChange={change}
                                />Artichoke Hearts
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='gummyBears'
                                checked={values.gummyBears}
                                onChange={change}
                                />Gummy Bears
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={change}
                                />Pineapple
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='extraCheese'
                                checked={values.extraCheese}
                                onChange={change}
                                />Extra Cheese
                        </label>
                    </div>
                    <div className='grey'>
                        {/* <label>
                            <input
                                id='special-text'
                                type='text'
                                placeholder="Anything else you'd like to add?"
                                name='comments'
                                value={values.comments}
                                onChange={change}></input>
                        </label> */}
                        <textarea
                            name="comments"
                            id='special-text'
                            placeholder="Anything else you'd like to add?"
                            rows="3"
                            value={values.comments}
                            onChange={change}></textarea>
                        <p className='errors'>{errors.comments}</p>
                    </div>
                    <div className='line-container'>
                        <div className='line'></div>
                    </div>
                    <div className='button-container'>
                        <button
                            type='submit'
                            id='order-button'
                            disabled={disabled}
                        >Add to Order</button>
                    </div>
                </form>
            </div>
        </section>
    )
}