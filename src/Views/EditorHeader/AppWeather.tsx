import AppIcon from "../../Components/AppIcon";

const AppWeather = () => {
  return (
    <>
      <div className="app-weather flex gap-2 items-center">
        <AppIcon icon="weather-regular" size="2xl" />
        <div className="app-weather__temp flex gap-1">
          <span className="app-weather__temp--high">25º</span>
          <span className="app-weather__temp--low">@Istanbul</span>
        </div>
      </div>
    </>
  )

}

export default AppWeather;