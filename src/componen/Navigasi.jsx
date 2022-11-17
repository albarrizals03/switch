import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navigasi extends Component {
  render() {
    return (
      <div>
<Link to="/"> Home</Link>
<Link to="/Profil"> Profil</Link>
<Link to="/Album"> Album</Link>
<Link to="/Kontak"> Kontak</Link>
      </div>
    )
  }
}

export default Navigasi
