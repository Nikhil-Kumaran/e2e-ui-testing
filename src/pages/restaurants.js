import React, { Component } from "react"
import AppLayout from '../layout/AppLayout'
import axios from "axios"
import { Input, Spin, Button } from 'antd';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
const { Search } = Input;


class Restaurants extends Component {
  state = {
    loading: false,
    error: false,
    restaurants: [],
  }

  componentDidMount() {
    console.log('hello')
    this.getRestaurantsData()
  }

  getRestaurantsData = (query = null) => {
    this.setState({ loading: true })
    let request = query ? `https://developers.zomato.com/api/v2.1/search?q=${query}&lat=13.0827&lon=80.2707` : `https://developers.zomato.com/api/v2.1/search?lat=13.0827&lon=80.2707`
    axios
      .get(request, 
        { headers: {'user-key': '7c56e626b4a480a25e75063c32d6826e'} })
      .then(data => {
        let restaurants = []
        data.data.restaurants.forEach( (res) => {
          restaurants.push({
            id: res.restaurant.id,
            name: res.restaurant.name,
            address: res.restaurant.location.address,
            cuisines: res.restaurant.cuisines,
            average_cost_for_two: res.restaurant.average_cost_for_two
          })
        })
        this.setState({
          loading: false,
          restaurants: restaurants
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  renderRestaurants(){
    const { restaurants } = this.state
    return restaurants.map( res => (
      <Col key={res.id} span={8} style={{marginTop: '15px'}}>
        <Card title={res.name} bordered={true} extra={<Link to={`/restaurant/${res.id}`} ><Button type='link' icon="right-circle" size='large' style={{fontSize: '25px'}} /> </Link>}>
          {res.address}<br/><br/>
          {res.cuisines}<br/><br/>
          {res.average_cost_for_two}<br/>
        </Card>
      </Col>
    ))
  }

  render() {
    return (
      <AppLayout linkKey={'2'}>
        <Search id='restaurant_search'
            placeholder="Search for restaurants"
            onSearch={value => this.getRestaurantsData(value)}
        />
        <Spin spinning={this.state.loading} size="large" delay={500} style={{marginTop: '20vh'}}>
          <Row gutter={16} type="flex" justify="space-around" align="middle">
            {this.renderRestaurants()}
          </Row>
        </Spin>
      </AppLayout>
    )
  }
}

export default Restaurants