const AppWeather = () => {
  return (
    <>
      <div className="app-weather">
        <div className="app-weather__icon">
          <img src="https://www.metaweather.com/static/img/weather/lc.svg" alt="weather" />
        </div>
        <div className="app-weather__temp">
          <span className="app-weather__temp--high">29</span>
          <span className="app-weather__temp--low">22</span>
        </div>
      </div>
    </>
  )

}

export default AppWeather;