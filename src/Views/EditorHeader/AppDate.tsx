
import { dateFormatter } from './../../helpers/Utils'

const AppDate = () => {

  return (
    <div className="app-date">
      <span>TODAY</span>
      {dateFormatter({date: new Date('2023-10-07'), format: 'DD/MM/YYYY' })}
    </div>
  );
}

export default AppDate;