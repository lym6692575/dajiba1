import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PriceList from './components/PriceList';
import Button from 'antd/lib/button';
import IconFont from './config/iconfont';

const items = [
  {
    "id": 1,
    "title": "去云南旅游",
    "price": "200",
    "date":"2018-09-10",
    "category":{
      "id":"1",
      "name":"旅行",
      "type":"outcome",
    }
  },
  {
    "id": 2,
    "title": "去云南旅游",
    "price": "400",
    "date":"2018-09-10",
    "category":{
      "id":"1",
      "name":"旅行",
      "type":"outcome",
    }
  }
];

class App extends Component {
  render(){
    return (
      <div>
        {/* <IconFont className="icon-test" type="iconDollar" /> */}
        <PriceList 
          items={items} 
          onModifyItem={(item)=>{alert(item.id)}}
          onDeleteItem={(item)=>{alert(item.id)}}
        />
      </div>
    );
  }
}

export default App;
