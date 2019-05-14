import React, { Component } from 'react';
import Tabs from '../components/Tabs'
import CategorySelect from '../components/CategorySelect'

import { BrowserRouter as Router } from "react-router-dom"
import { LIST_VIEW, CHART_VIEW } from '../utility'

const categories = [
    {
        "id": "1",
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane",
    },
    {
        "id": "2",
        "name": "理财",
        "type": "income",
        "iconName": "logo-yen",
    },
    {
        "id": "3",
        "name": "理财",
        "type": "income",
        "iconName": "logo-yen",
    }
]
class CreatePage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Tabs />
                    <CategorySelect
                        items={categories}
                    />
                </div>
            </Router>
        )
    }
}

export default CreatePage;
