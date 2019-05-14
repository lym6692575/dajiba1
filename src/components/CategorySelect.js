import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

class CategorySelect extends React.Component {
    // render() {
    //     return (
    //         <div className="category-select-component">
    //             <Ionicon
    //                 className="rounded-circle"
    //                 fontSize="80px"
    //                 style={{ backgroundColor: '#007BFF', padding: '5px' }}
    //                 color={'#fff'}
    //                 icon={this.props.categories}
    //             />
    //         </div>
    //     )
    // }
    render() {
        const { categories, selectedCategory } = this.props
        const selectedCategoryId = selectedCategory && selectedCategory.id
        return (
            <div className="category-select-component">
                <div className="row">
                    {
                        categories.map((category, index) => {
                            const activeClassName = (selectedCategoryId === category.id)
                                ? 'category-item col-3 active' : 'category-item col-3'
                            return (
                                <div className={activeClassName} key={index} role="button" style={{ textAlign: 'center' }}
                                    onClick={(event) => { this.selectCategory(event, category) }}>
                                    <Ionicon
                                        className="rounded-circle"
                                        style={{backgroundColor:'#007BFF', padding:'5px'}}
                                        fontSize="50px"
                                        color={'#fff'}
                                        icon={category.iconName}
                                    />
                                    <p>{category.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default CategorySelect;