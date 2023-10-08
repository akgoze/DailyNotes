
import { dateFormatter } from './../../helpers/Utils'

const AppDate = () => {

  return (
    <div className="app-date flex flex-col items-center">
      <span className="text-orange font-bold text-xs">TODAY</span>
      <span className="text-navy font-light text-lg">{dateFormatter({date: new Date(), format: 'DD MMMM, DDDD' })}</span>
    </div>
  );
}

export default AppDate;