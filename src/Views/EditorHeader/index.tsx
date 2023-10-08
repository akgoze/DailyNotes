import AppWeather from "./AppWeather";
import AppDate from "./AppDate";
import AppActions from "./AppActions";

const EditorHeader = () => {
  return (
    <div id="EditorHeader" className="flex flex-row justify-between items-center py-3">
      <AppWeather />
      <AppDate />
      <AppActions />
    </div>
  );

};

export default EditorHeader;