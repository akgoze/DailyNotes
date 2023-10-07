import AppWeather from "./AppWeather";
import AppDate from "./AppDate";
import AppActions from "./AppActions";

const EditorHeader = () => {
  return (
    <div id="editorHeader">
      <AppWeather />
      <AppDate />
      <AppActions />
    </div>
  );

};

export default EditorHeader;