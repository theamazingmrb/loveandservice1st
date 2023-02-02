import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Donations = () => {
  const donations = useLoaderData();
  const [inKindDontations, setInKindDonations] = useState();

  useEffect(() => {
    axios
      .get(
        "https://docs.google.com/spreadsheets/d/1OuiikglIGwpvbxXEv9cX1U1Pn5U-DLMP6X8AAPo5284/edit?usp=sharing"
      )
      .then((data) => {
        // console.log(typeof data.data.split('/n'))
        // console.log())
        data.data.split("/n").forEach((letter) => {
          //   console.log("ddddddddddddddddd");
          //   console.log(letter.toString().split('/n')[0]);
          //   console.log("ddddddddddddddd");.
          let row = letter.toString().split("/n")[0];
          // console.log(row)
          if (row.includes('content="Donations')) {
            console.log(
              row.split('content="Donations')[1].split("\"><meta")[0].split("\n")
            );
            setInKindDonations(
              row.split('content="Donations')[1].split("<meta")[0].split("\n")
            );
          }
        });
        // data.data.split('/n').forEach((row,index) =>{
        //     console.log(1, row)
        // })
      });
  }, []);

  console.log(donations);
  let total = 0;
  let inKindTotal = 0;

  const renderDonations = donations.docs
    ?.filter((d) => !d.comments?.toLowerCase().trim().includes("test"))
    .map((donation, index) => {
      let d = donation.data();
      total += Number(d.amount.replace(/[^0-9\.-]+/g, ""));

      return (
        <tr key={index}>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.amount}</td>
          <td>{d.comments}</td>
        </tr>
      );
    });
  return (
    <div>
      <h1>Donations</h1>
      <h2>Total ${total}</h2>
      <p>as of {new Date().toString()}</p>
      <h3>In Kind Contributions</h3>
      <table>
        <tbody>
          <tr>
            <th>Dontation</th>
          </tr>
          {inKindDontations
            ?.filter((i) => i !== "" && i != "Date,Name,In Kind Donation/Cash via paypal,Notes,Confirmed,Donation type,Method")
            .map((rec, index) => {
              return (
                <tr key={index}>
                  <td>{rec}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h3>Contributions from the website</h3>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Comments</th>
          </tr>
          {renderDonations}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
