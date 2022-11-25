import React, { Component } from 'react'
import  Switch from ", componen/Switch";
export class Switch extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 col-xs-4 offset-4 p-2 text-center">
            <h5>Aplikasi Ubah Warna Lampu</h5>
            <div className="m-2 ">
              <img src="lampu.gif" alt="" id="tes" />
              <img id="kuning" className="lampu" src="lampuhidup.gif" alt="" />
              <img id="hitam" className="lampu" src="lampu.gif" alt="" />
            </div>
            <div className="m-1 b">
              <button className="btn btn-warning" id="btn2">Kuning</button>
              <button className="btn btn-black" id="btn3">hitam</button>
            </div>
            <button className="btn btn-secondary btn-block" id="btn4">Matikan Lampu</button>
          </div>
        </div>
      </div>
    );
  }
});

export default Switch