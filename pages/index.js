import React from 'react'
import { bindActionCreators } from 'redux'
import { fetchWeather, actionTypes } from '../store'
import { connect } from 'react-redux'
import { Flex, Box, Image } from '@rebass/grid'
import { Heading, Text } from '../styles'

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this) 
  }

  componentDidMount () {
    let { fetchWeather } = this.props
    fetchWeather()
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let { fetchWeather } = this.props
    fetchWeather(this.state.value)
  }

  render() {
    return <Flex>
       <Box width={1/2} px={2}>
         <form onSubmit={this.handleSubmit}>
           <input type="text" value={this.state.value}  onChange={this.handleChange} />
           <input type="submit" value="Submit" />
         </form>
       </Box>
       {this.props.weather !== null &&
         <Box width={1/2} px={2}>
	   <Text
	     my={4}
	     fontSize={[2, 3]}
	     >
             kota: {this.props.weather.data.name}
           </Text>
           <img
             src={`http://openweathermap.org/img/w/${this.props.weather.data.weather[0].icon}.png`} />
	   <Heading
             as='h1'
             my={4}
             fontSize={[6, 7]}>
             {this.props.weather.data.main.temp}
           </Heading>
	   <Text
	     my={4}
	     fontSize={[3, 4]}
	     >
             kelembaban: {this.props.weather.data.main.humidity}
           </Text>
         </Box>
       }
     </Flex>
  }
}

Index.getInitialProps = ({ store }) => {
  console.log('test di sini')
}

const mapStateToProps = ({ weather }) => ({ weather })

const mapDispatchToProps = dispatch => {
  return {
    fetchWeather: bindActionCreators(fetchWeather, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
