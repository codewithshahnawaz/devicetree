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
          <div
            style={{
              display: recording ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <div className="downlaod">
            <audio controls autoplay className="voice_link">
              <source src={voiceData} type="audio/wav" />
            </audio>
          </div>
        )}
        {recording ? (
          <BsFillStopFill
            className="icon-mic"
            onClick={toggleRecording}
            style={{ color: "#fa314a" }}
          />
        ) : (
          <BsFillMicFill
            className="icon-mic"
            onClick={toggleRecording}
            style={{
              color: "#fa314a",
              marginBottom: "5rem",
              marginLeft: "32.5rem",
            }}
          />
        )}
        <button
          style={{
            padding: "1rem",
            width: "15%",
            marginTop: "2rem",
            marginRight: "6rem",
            position:"absolute",
            top:'5rem',
            left:"30rem",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
