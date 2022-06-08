import React, { useEffect, useState } from "react";

export default function CurrentTime(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(()=>{
getCurrentData()
  },[])
  const getCurrentData = () => {
    const date = new Date();
    // get the date as a string
    const n = date.toDateString();
    // get the time as a string
    const time = date.toLocaleTimeString();

    setDate(n);
    setTime(time);
  };

  setInterval(() => {
    getCurrentData();
  }, 1000*60);
  return (
    <div className={props.class}>
      {date} {time.slice(0,5)}
    </div>
  );
}
