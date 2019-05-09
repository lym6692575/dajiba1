import React, { Component } from 'react';
import logo from '../logo.svg';

import PriceList from '../components/PriceList';
import ViewTab from '../components/ViewTab';
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME } from '../utility'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import CreateBtn from '../components/CreateBtn'

const items = [
    {
        "id": 1,
        "title": "去云南旅游",
        "price": 200,
        "date": "2018-09-10",
        "category": {
            "id": "1",
            "name": "旅行",
            "type": "outcome",
            "iconName": "ios-plane",
        }
    },
    {
        "id": 2,
        "title": "去云南旅游",
        "price": 400,
        "date": "2018-09-10",
        "category": {
            "id": "1",
            "name": "旅行",
            "type": "outcome",
            "iconName": "ios-plane",
        }
    },
    {
        "id": 3,
        "title": "理财收入",
        "price": 400,
        "date": "2018-09-10",
        "category": {
            "id": "1",
            "name": "理财",
            "type": "income",
            "iconName": "logo-yen",
        }
    },
];

class Home extends Component {
    render() {
        let totalIncome = 0, totalOutcome = 0
        items.forEach(item => {
            if (item.category.type === TYPE_OUTCOME) {
                totalOutcome += item.price
            } else {
                totalIncome += item.price
            }
        })
        return (
            <React.Fragment>
                <hearder className="App-header">
                    <div className="row mb-5">
                    </div>
                    <div className="row">
                        <div className="col">
                            <MonthPicker
                                year={2018}
                                month={8}
                                onChange={() => { }}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice
                                income={totalIncome}
                                outcome={totalOutcome}
                            />
                        </div>
                    </div>
                </hearder>
                <div className="content-area py-3 px-3">
                    <ViewTab activeTab ={LIST_VIEW} onTabChange={()=>{}}/>
                    <CreateBtn onClick={() => {}} />
                    <PriceList 
                        items={items}
                        onModifyItem={() =>{}}
                        ondefeteItem={() =>{}}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Home; 