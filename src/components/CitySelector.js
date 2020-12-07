import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
//import { API_KEY, API_BASE_URL } from '../apis/config';

const CitySelector =({onSearch})=>
{
    const [city, setCity] = useState('');
    //const [results, setResults] = useState(null);

    //const onSearch = () =>
    //{
    //    fetch(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    //    .then((response) => response.json())
    //    .then((results) => {setResults(results)
    //    setCity("")});
    //};
    //const onKeyDown = (event)=>{
    //    if (event.keyCode === 13){
    //        onSearch();
    //    }
    //};
      const onKeyDown = (event)=>{
       if (event.keyCode === 13){
           onSearch(city)
            setCity('');
       }}
    return(
    <>
        <Row>
            <Col>
                <h1> Search your city</h1>
            </Col>
        </Row>

        <Row>
        <Col xs={4} className="text-center">
            <FormControl
                placeholder="enter city"
                onChange={(event) => setCity(event.target.value)}
                value={city}
                onKeyDown={onKeyDown}
            />

        </Col>
    </Row>

        <Row>
            <Col>
                <Button onClick={() => {onSearch(city)
                setCity('')}}>Check Weather</Button>
            </Col>
        </Row>
    </>
    );
};

export default CitySelector;
