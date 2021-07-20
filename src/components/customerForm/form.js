import React, { useState } from "react";
import "./style.css";
import { ReactMic } from "react-mic";
import { BsFillMicFill, BsFillStopFill } from "react-icons/bs";
const Form = () => {
  return (
    <div className="form">
      <input type="text" placeholder="text" />
    </div>
  );
};

export const TextArea = () => {
  const [voiceData, setVoiceData] = useState("");
  const [recording, setRecording] = useState(false);

  const toggleRecording = () => {
    setRecording(!recording);
    setVoiceData("");
  };

  const onStop = (recordedBlob) => {
    setVoiceData(recordedBlob.blobURL);
  };
  return (
    <div className="form">
      <textarea
        name="customerDetails"
        placeholder="Write your issue"
        maxLength="500"
      /> 
      <b className="subtitle">or</b> <br />
      <b className="subtitle">Record your voice</b>
      <div className="mergeWithMicro">
      {voiceData === "" ? (
        <ReactMic
          record={recording}
          className="sound-wave"
          onStop={onStop}
          echoCancellation={true}
          autoGainControl={true}
          noiseSuppression={true}
          visualSetting="frequencyBars"
          mimeType="audio/wav"
          strokeColor="#000000"
          backgroundColor="#f7f7f7"
        />
      ) : (
        <a
          href={voiceData}
          download="DeviceTreeIssueRecord"
          className="voice_link"
        >
          Your Voice Data
        </a>
      )}
      {recording ? (
        <BsFillStopFill className="icon-mic" onClick={toggleRecording} />
      ) : (
        <BsFillMicFill className="icon-mic" onClick={toggleRecording} />
      )}
      </div>
    </div>
  );
};

export default Form;
