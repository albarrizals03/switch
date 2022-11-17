import React, { Component } from 'react'
import { Form } from 'react-router-dom'
import Navigasi from '../componen/Navigasi'
import './App.css'
export class Album extends Component {
  render() {
    return (
      <div>
        <Navigasi></Navigasi>
        <div>
  &lt;       
  <div className="col-sm-9">
    <div className="card text-center ">
      <div className="card-header ">
        Featured
      </div>
      <div className="card-body ">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>
    <div id="carouselExampleControls" className="carousel slide col-lg-8 offset-lg-2 " data-bs-ride="carousel">
      <div className="carousel-inner ">
        <div className="carousel-item active mt-5 ">
          <img src="ab.jpg" className="d-block  w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item ">
          <img src="ac.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="ad.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="card-group m-5">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div></div>


     
        </div>
    )
  }
}

export default Album