import React from 'react'
import PropTypes from 'prop-types'
import './burger-ingredient.styles.css'

class BurgerIngredient extends React.Component {
    render() {
        let ingredient = null;
        
        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className="bread-bottom"></div>
                break;
            case ('bread-top'): 
                ingredient = (
                    <div className="bread-top">
                        <div className="seeds1"></div>
                        <div className="seeds2"></div>
                    </div>
                  )
                break;
            case ('meat'):
                ingredient = <div className="meat"></div>
                break;
            case ('cheese'):
                ingredient = <div className="cheese"></div>
                break;
            case ('salad'):
                ingredient = <div className="salad"></div>
                break;
            case ('bacon'):
                ingredient = <div className="bacon"></div>
                break;
            case ('tomato'):
                ingredient = <div className="tomato"></div>
                break;
            default:
                ingredient = null;
        }
        return (ingredient);
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient; 
