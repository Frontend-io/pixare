import React from 'react'
import "./related-image.css"
import Photo from '../../widget/photo/photo';
import randID from '../../../utilities/randID';


const Related = ({withIntro, data})=>{
    const validateData = data ? true : false 



    return(
        <React.Fragment>
            {
                validateData &&
                <section className="related">
                    <div className="related-head">
                        {
                            withIntro &&
                            <div className="no-wrap align-c grid">
                                <span className="black-t">Related Photos</span>
                                <div className='divider'></div>
                            </div>
                        }
                    </div>
                   <div className="related-content">
                       {
                            data.map( (photo, index) =>{
                                return(
                                    <Photo data={photo} index={index} key={randID()}/>
                                )
                            })
                       }
                   </div>
                </section>
            }
        </React.Fragment>
    )
}

export default Related