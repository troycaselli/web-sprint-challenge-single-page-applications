
export default function Order() {
    return(
        <section>
            <div>
                <h3>Build Your Own Pizza</h3>
                <img src='../../Assets/Pizza.jpg' alt='pizza'/>
            </div>
            <form id='pizza-form'>
                <h2>Build Your Own Pizza</h2>
                <div>
                    <label>Name:{' '}
                        <input id='name-input' type='text'/>
                    </label>
                </div>
                <div>
                    <label>Choice of Size
                        <p>Required</p>
                        <select id='size-dropdown'>
                            <option value=''>-Select-</option>
                            <option value='1'>6"</option>
                            <option value='2'>12"</option>
                            <option value='3'>16"</option>
                            <option value='4'>20"</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <input type='radio' name='sauce'/>Original Red
                    </label>
                    <label>
                        <input type='radio' name='sauce'/>Garlic Ranch
                    </label>
                    <label>
                        <input type='radio' name='sauce'/>BBQ Sause
                    </label>
                    <label>
                        <input type='radio' name='sauce'/>Spinach Alfredo
                    </label>
                </div>
                <div>
                    <label>
                        <input type='checkbox'/>Pepperoni
                    </label>
                    <label>
                        <input type='checkbox'/>Sausage
                    </label>
                    <label>
                        <input type='checkbox'/>Canadian Bacon
                    </label>
                    <label>
                        <input type='checkbox'/>Spicy Italian Sausage
                    </label>
                    <label>
                        <input type='checkbox'/>Grilled Chicken
                    </label>
                    <label>
                        <input type='checkbox'/>Onions
                    </label>
                    <label>
                        <input type='checkbox'/>Green Pepper
                    </label>
                    <label>
                        <input type='checkbox'/>Dried Tomatos
                    </label>
                    <label>
                        <input type='checkbox'/>Black Olives
                    </label>
                    <label>
                        <input type='checkbox'/>Roasted Garlic
                    </label>
                    <label>
                        <input type='checkbox'/>Artichoke Hearts
                    </label>
                    <label>
                        <input type='checkbox'/>Gummy Bears
                    </label>
                    <label>
                        <input type='checkbox'/>Pineapple
                    </label>
                    <label>
                        <input type='checkbox'/>Extra Cheese
                    </label>
                </div>
                <div>
                    <label>
                        <input id='special-text' type='text' placeholder="Anything else you'd like to add?"></input>
                    </label>
                </div>
                <button id='order-button'>Add to Order</button>
            </form>
        </section>
    )
}