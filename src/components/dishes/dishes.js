import React from 'react';
import './dishes.css';
import axios from 'axios';

export default function DishCard() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='wrapper'>
      {data.map((data2, index) => (
        <div className='widget' key={index}>
          <div
            className='widget__photo'
            style={{
              background: `url("http://localhost:8000${data2.dishImage}")`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className='widget__button'>buy</div>
          <div className='widget__details'>
            <div className='widget__badges'>
              <div className='widget__badge'>$$$$</div>
              <div className='widget__badge widget__badge--rating'>4.3</div>
            </div>
            <div className='widget__name'>{data2.name}</div>
            <div className='widget__type'>Cafe, Bakery</div>
            <div className='widget__info'>
              <span>193 Fairchild Drive, Mountain View - CA</span>
              <span>15 minute walk</span>
            </div>
            <div className='widget__hidden'>
              <hr />
              <table className='widget__table'>
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>Brunch, Lunch, Dinner</td>
                  </tr>
                  <tr>
                    <td>Alcohol</td>
                    <td>Cocktails</td>
                  </tr>
                  <tr>
                    <td>Credit-cards</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Wi-Fi</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Outdoor Seating</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
