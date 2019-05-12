import React from 'react'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'
import { items, categoies } from '../../contarners/Home'

const itemsWithCategory = items.map(item => {
    item.category = categoies[item.cid]
    return item
})

const props = {
    items: itemsWithCategory,
    onModifyItem: () => { },
    onDeleteItem: () => { },
}

let wrapper
describe('test PriceList component', () => {
    beforeEach(() => {
        wrapper = shallow(<priceList{...props} />)
    })
    it('should render the component to match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correct price items length', () => {
        expect(wrapper.find('.list-group-item').length).toEqual(itemsWithCategory.length)
    })
    it('should render correct icon and price for each item',()=>{
        const iconList= wrapper.find('.list-group-item').first().find(Ionicon)
        expect(iconList.length).toEqual(3)
    })
    
})