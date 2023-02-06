import './App.css';
import {Select} from 'antd';
import 'antd/dist/antd.min.css';
import React, {useState} from 'react';

const {Option} = Select;

const languages = [
    {label: "US", value: "us"},
    {label: "CA", value: "ca"},
    {label: "MX", value: "mx"}]

function App() {
    const [selectedValue, setSelectedValue] = useState("us");

    function handleChange(value) {
        setSelectedValue(value);
        console.log(`Selected Value: ${value}`);
    };

    return (<div className="App">
        <Select size={"large"}
                defaultValue="US"
                style={{width: 100}}
                suffixIcon={<img className="icon-item" src={require(`../flags/${selectedValue}.svg`)}
                                 alt={selectedValue}/>}
                onChange={handleChange}
                optionLabelProp="label">
            {
                languages.map(item => (
                    <Option value={item.value} label={item.label} key={item.value}>
                        <div className="icon-option-item">
                            {item.label}
                            <img className="icon-item" src={require(`../flags/${item.value}.svg`)} alt={item.label}/>
                        </div>
                    </Option>
                ))
            }
        </Select>
    </div>);
}

export default App;