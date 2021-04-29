import React from 'react';

const header = () => {
    return(
        <header className="row">
            <div>
                <a className="brand" href="/">Potter's Pot</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
    )
}

export default header;