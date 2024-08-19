import React, { useState, useEffect } from 'react';
import '../pages/home.css'

import { Header } from './Header';
import '../pages/attendance.css'
import metaLogo from '../assets/metalogo.jpeg'

export const Attendance = () => {

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [attendanceLog, setAttendanceLog] = useState([]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        function (error) {
          console.error('Error occurred: ' + error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleAttendance = () => {
    if (position.latitude && position.longitude) {
      const newLog = {
        date: currentDateTime.toLocaleDateString(),
        time: currentDateTime.toLocaleTimeString(),
        latitude: position.latitude,
        longitude: position.longitude
      };
      setAttendanceLog([...attendanceLog, newLog]);
      console.log('Attendance logged:', newLog);
    } else {
      console.log('Unable to retrieve geolocation.');
    }
  };

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <>
      <Header />
      <div className="box">
        <div className="header">
          <img className="logoimg" src={metaLogo} alt="" />
          <h2>Attendance</h2>
        </div>
        <div className="dateandtime">
          <p>DATE: {formattedDate}</p>
          <p>TIME: {formattedTime}</p>
        </div>
        <button className='button' onClick={handleAttendance}>
          Place Attendance
        </button>
      </div>
      <div className="attendance-log">
        <h3>Attendance Log</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {attendanceLog.map((log, index) => (
              <tr key={index}>
                <td>{log.date}</td>
                <td>{log.time}</td>
                <td>{log.latitude}</td>
                <td>{log.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Attendance;