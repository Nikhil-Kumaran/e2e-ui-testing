import React, { Component } from "react"
import AppLayout from '../layout/AppLayout'
import axios from "axios"
import { Spin, Row, Card, Col } from 'antd';

const emojis = {
  address: '📬',
  cuisines: '😋',
  average_cost_for_two: '⏰',
  timings: '💰',
  user_rating: '⭐',
  all_reviews_count: '👩‍',

}
class Restaurant extends Component {
  state = {
    loading: false,
    error: false,
    restaurant: {},
  }

  componentDidMount() {
    this.getRestaurantDataById(this.props.match.params.resId)
  }

  getRestaurantDataById = (id) => {
    this.setState({ loading: true })

    let request = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`
    axios
      .get(request, 
        { headers: {'user-key': '7c56e626b4a480a25e75063c32d6826e'} })
      .then(data => {
        let restaurant = {
            id: data.data.id,
            name: data.data.name,
            address: data.data.location.address,
            cuisines: data.data.cuisines,
            timings: data.data.timings,
            average_cost_for_two: data.data.average_cost_for_two,
            user_rating: data.data.user_rating.aggregate_rating,
            all_reviews_count: data.data.all_reviews_count,
            featured_image: data.data.featured_image,
        }

        this.setState({
          loading: false,
          restaurant: restaurant
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }

  renderRestaurant(){
    const { restaurant } = this.state
    return (
        <Col span={24} >
            <Card title={restaurant.name} style={{ width: '100%' }}>
                <Col span={16} >
                    {
                      Object.keys(restaurant).map((key, index) => {
                        return (key !== 'name' && key !== 'id' && key !== 'featured_image') && <p id={key} key={index} style={{color:'black'}}><span style={{fontSize: '25px', verticalAlign: 'middle'}}>{emojis[key]}</span> &nbsp; {restaurant[key]}</p>
                      })
                    }
                </Col>
                <Col span={8} >
                    <img src = {restaurant.featured_image} width='100%' alt='featured'></img>
                </Col>
            </Card>
        </Col>
    )
  }

  render() {
    return (
      <AppLayout linkKey={'2'}>
        <Spin spinning={this.state.loading} size="large" delay={500} style={{marginTop: '20vh'}}>
          <Row gutter={16} type="flex" justify="space-around" align="middle">
            {this.renderRestaurant()}
          </Row>
        </Spin>
      </AppLayout>
    )
  }
}

export default Restaurant