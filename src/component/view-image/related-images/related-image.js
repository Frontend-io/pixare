import React from 'react'
import "./related-image.css"
import { Photo } from "../../gallery/gallery"

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
               <Photo image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
               <Photo height="400" image="https://i.pinimg.com/originals/c2/5b/9d/c25b9dd1ae1888b1714f8b2c0888a50c.jpg"  />
               <Photo />
               <Photo />
               <Photo image="https://i.pinimg.com/originals/42/2b/8c/422b8ca6e34541b58c75dd1d8431e872.jpg"/>
               <Photo height="400" image="https://i.pinimg.com/originals/c2/5b/9d/c25b9dd1ae1888b1714f8b2c0888a50c.jpg"  />
               <Photo />
           </div>
        </section>
    )
}

export default Related