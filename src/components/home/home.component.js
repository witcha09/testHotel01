import React, { Component } from "react";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HotelRoomTypes from "../../DBdata/RoomType";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/system.css";

import LoginService from "../login/login.service";

    

export default class Home extends Component {

  
  constructor() {
    super();
    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      userData: {
      userName: "witcha",
      email: "witcha@mail.com",
      phone: "99999909999"
      },

      redirect: false
    };
  }

  handleEvent(e) {
    e.preventDefault();
    console.log("Click Event");

    //var ResData = LoginService.login("Witcha", "12345");
    //console.log("Data test "+ResData);

    (async function () {
      var ResData = await LoginService.login("Witcha", "12345");
      console.log("Data test "+ResData.message);
    })();

    this.setState({ redirect: true});


  }


  render() {
    
    return (
      <div>
        <header className="jumbotron">
          <h3>Home</h3>
          <div>
            {HotelRoomTypes.getData().map((item) => {
              return (
                <div className="container-lg">
                  <div className="shadow-sm p-1 mb-2  rounded-3 bg-white row highlight">
                    <div className="col-lg-5 border-end text-wrap">
                      {item.id} {item.name}
                      {HotelRoomTypes.getRoomImagesURL(item.id).map(
                        (imagesURL) => {
                          console.log("imagesURL-------------");
                          console.log(imagesURL);
                          return (
                            <div>
                              {imagesURL.map((imagesURL) => {
                                return (
                                  <div>
                                    <span>{imagesURL.imageURL}</span>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      )}
                    </div>

                    {HotelRoomTypes.getBenefits(item.id).map((benefits) => {
                      console.log("test");
                      console.log(benefits);
                      return (
                        <div className="col border-end">
                          {benefits.map((subItem) => {
                            return <li>{subItem.description}</li>;
                          })}
                        </div>
                      );
                    })}

                    <div className="col">
                      <header>Price/Promotion</header>
                    </div>
                  </div>




                </div>
              );
            })}
            {HotelRoomTypes.getRoomImagesType2()}

            <div className="form-group">
              <form
                    onSubmit={this.handleEvent}
                    ref={(c) => {
                      this.form = c;
                    }}
              >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
              />
              <p></p>

              <div className="form-group">
              <button
                className="btn btn-primary btn-block"
              >
                <span>OK</span>
              </button>
              <Link to= "../data"
                          state={this.state.userData}>
                <span>Get Data</span>
              </Link>

              { this.state.redirect ? (<Navigate push to="/data" state={this.state.userData} />) : null}
            </div>
              </form>
            </div>
                    
          </div>
        </header>
      </div>
    );
  }
}
