// eslint-disable-next-line no-unused-vars
import React from "react";
import Event from "./Event";
const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">0800</td>
            <Event
              event="Fancy Dinner"
              color="green"
              location="Valle de Guadalupe"
            />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Breakfast" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">0900</td>

            <td></td>
            <td></td>
            <Event event="Breakfast" color="pink" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1000</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1100</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1200</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Breakfast" color="blue" location="1234 Cool Avenue" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1300</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1400</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Breakfast" color="blue" location="Tijuana" />
          </tr>
          <tr>
            <td className="time">1500</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1600</td>
            <td></td>
            <Event event="Breakfast" color="blue" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1700</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
