import { memo, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { tools } from "./tools";
import "./app-editor.scss";

import EditorHeader from "./../EditorHeader";

const onChange = (data: any, event:any) => {
  console.log(data, event);
}

const Editor = () => {
  const ref = useRef();

  //Initialize editorjs
  useEffect(() => {
    
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'Editor',

        tools: tools,
        placeholder: 'Let`s write an awesome story!',
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data, event);
        },
      });
      
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div id="AppEditor">
        <EditorHeader />
        <div id='Editor' />
      </div>
    </>
  );
};

export default memo(Editor);
