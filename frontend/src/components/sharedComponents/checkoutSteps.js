import React from 'react'

const checkoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <div className="row checkout-steps">
            <div className={step1 ? 'active' : ''}>Connexion</div>
            <div className={step2 ? 'active' : ''}>Livraison</div>
            <div className={step3 ? 'active' : ''}>Paiement</div>
            <div className={step4 ? 'active' : ''}>Validation</div>
        </div>
    )
}

export default checkoutSteps
