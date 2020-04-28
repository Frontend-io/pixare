import React, { useState } from 'react'
import "./dropdown.css"
import PropTypes from 'prop-types';
import randID from '../../../utilities/randID';
import { fetchPhoto } from '../../../container/redux/actions/photo-action/photo-action-creator';


const Dropdown = (props)=>{
    const { type, data, dispatch } = props
    const [visible, setVisible] = useState(false)
    const [ category, setCategory ] = useState('Trending')
    const classes = visible ? "visible drop-down" : "drop-down"
    const styles = {
        btn:{
            minWidth: '200px',
            padding: '5px 20px',
            background: '#fff',
            border: '1px solid #eee'
        }
    }

    const handlClick = ()=>{
        visible ? setVisible(false): setVisible(true)
    }
    const selectOption = (e)=>{
        const value = e.target.getAttribute('data-value')
        setCategory(value)
        setVisible(false)
        
        // DISPATCH AND FETCH NEW CATEGORY
        dispatch(fetchPhoto(value))
    }
    // Dropdown icon
    const icon = visible ? 'arrow_drop_up' : 'arrow_drop_down'
    
    

    return(
        <div className={classes}>
            <input value={category} type="hidden"  />
            <button onClick={handlClick} style={styles.btn} className="full-width grid align-c apart ">
                <span>{category}</span> 
                {
                    props.type === 'list' &&
                    <i className="material-icons">{icon}</i>
                }
            </button>
            <div className={`content ${type === "list" ? "list" : "paragraph"}`}>
               {
                   data.map( option => {
                       const { title, value } = option
                       return <li data-value={value} onClick={selectOption} className="link" key={randID()}>{title}</li>
                   })
               }
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    type:PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string)
}
Dropdown.defaultProps = {
    type : "list"
}



export default Dropdown