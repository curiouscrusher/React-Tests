// UserOutput.js
// Simple paragrapgh component with fixed text
//

import React from 'react';

const Useroutput = (props) => {
    // Component Structure
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Tilde locavore authentic raw denim fixie letterpress swag sartorial man braid YOLO meggings waistcoat dreamcatcher cloud bread. Yuccie yr flexitarian cred. Taiyaki twee trust fund flannel, franzen everyday carry seitan offal activated charcoal. Fashion axe locavore VHS flannel dreamcatcher swag, raw denim glossier cold-pressed man braid mixtape. Vinyl venmo slow-carb, shoreditch jean shorts messenger bag truffaut hell of plaid. Adaptogen fashion axe gastropub pinterest everyday carry salvia slow-carb iceland selfies umami craft beer.</p>
                <p> Paleo yuccie bushwick quinoa, crucifix tumeric farm-to-table hashtag hella gochujang craft beer wolf four loko ennui. Semiotics blue bottle venmo chia vegan succulents la croix normcore lyft portland organic selvage tousled lomo biodiesel. Lumbersexual lomo next level kombucha, dreamcatcher freegan cold-pressed salvia. Normcore organic gochujang trust fund pabst.</p>
                </div>
            </div>
        </div>
    );
}

export default Useroutput;
