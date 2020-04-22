import React from 'react';
import "./collection.css"
import Related from '../view-image/related-images/related-image';
import { img } from '../view-image/view';

const Collections = (props)=>{

    return(
        <React.Fragment>
            <div className="grid apart align-c -width content-head">
                <div className="">
                    <h2>My Bucket</h2>
                    <label className="red-t">2,340 pictures</label>
                </div>
                <button className="red">
                    Empty Backet
                </button>
            </div>
            <div className="collections">
                <div className="action-tab">
                    <div className="grey-t title align-c grid apart">
                        <span>Children playing in the waters</span>
                    </div>
                    <div className="specimen">
                        <img src={img} />
                    </div>
                    <div className="action">
                        <button className="full-width">Remove favourite</button>
                        <button className="full-width">Download</button>
                    </div>
                </div>
                <div className="collection-content">
                    <Related />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Collections