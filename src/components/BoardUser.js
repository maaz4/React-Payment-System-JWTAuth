import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  
/* Reference to Elements in General Design Scheme

      <div class="align-items-between">
        Channel ID
        CHannel Name
        Current Balance
        Total Received
        <button type="button">Withdraw</button>
        
*/
        
  return (
    <div className="container">
      <header className="jumbotron">
        <h1>Dashboard</h1>
        <h3>{content}</h3>
      </header>
     
      </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Channel ID </h5>
                    <p class="card-text">Channel Name.</p>
                    <a href="#" class="btn btn-link">Share / Copy</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Current Balance  </h5>
                    <p class="card-text">Total Received</p>
                    <a href="#" class="btn btn-success">Withdraw</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BoardUser;
