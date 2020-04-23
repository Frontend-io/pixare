import React from 'react'
import "./related-image.css"
import Photo from '../../widget/photo/photo';


const Related = (props)=>{

    return(
        <section className="related">
            <div className="related-head">
                {
                    props.intro &&
                    <div className="no-wrap align-c grid">
                        <span className="black-t">Related Photos</span>
                        <div className='divider'></div>
                    </div>
                }
            </div>
           <div className="related-content">
               <Photo />
           </div>
        </section>
    )
}

export default Related