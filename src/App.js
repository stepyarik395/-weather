import React from 'react';
import './App.css';
import styled from 'styled-components'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: [],
      weather: '',
      tmp: '',
      feals_like: '',
      wind_deg: '',
      wind_speed: ''
    }
  }
  componentDidMount() {
    const key = "0532bb9a34f3828c54873d434b9bf5a5";
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=47.858597&lon=35.105597&
    exclude=hourly,daily&appid=${key}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState((state) => {
          return {
            main: data,
            weather: data.current.weather,
            tmp: Math.floor(data.current.temp - 273.15),
            feals_like: Math.floor(data.current.feels_like - 273.15),
            wind_speed: data.current.wind_speed,
          }
        })
      });
  }
  render() {
    return (
      <div className="App">
        <h2>Погода Запорожья</h2>
        <span>Температура: {this.state.tmp}	&deg;</span>
        <br />
        <span>Чувствуется {this.state.feals_like}	&deg;</span>
        <br />
        {/* <span>Облачность {this.state.weather}</span> */}
        <br />
        <span>Скорость ветра</span>
        {
          console.log(this.state.weather)
          // this.state.weather.map((i) => {
          //   return (<div>{i}</div>)
          // })

        }
      </div>
    );
  }
}

export default App;
const Wrapper = styled.div`
border: 1px solid green
  `;

