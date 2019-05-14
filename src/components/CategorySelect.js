import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'
const { categories } = this.props
class CategorySelect extends React.Component {
    render() {
        
        return (
            <div className="category-select-component">
                <a>
                    <Ionicon
                        className="rounded-circle"
                        fontSize="50px"
                        style={{ backgroundColor: '#007BFF', padding: '5px' }}
                        color={'#fff'}
                        icon={categories.iconName}
                    />
                </a>
            </div>
        )
    }
}
export default CategorySelect;