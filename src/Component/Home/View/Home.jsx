import React, { useState } from 'react';
import useGlobalState from '../../../Context';
import '../../../css/main.css';
import Logout from "../../Logout/View/Logout";
import '../Css/Home.css'
import imageArray from '../../../Common/CommonAlert'


const Home = () => {
  const [{ loginName },] = useGlobalState();
  const [value, setValue] = useState('mountain')
  const [mt, setMT] = useState(false)
  const [fd, setFD] = useState(false)
  const [bh, setBH] = useState(false)
  const [bd, setBD] = useState(false)


 




  const onAddNotePage = (e, params) => {
    for (let k = 0; k < imageArray.length; k++) {
      if (params === imageArray[k].name) {
        setValue(imageArray[k].imageName.toLowerCase())

      }

    }
    if (params === "MT") {
      setMT(true)
      setFD(false)
      setBH(false)
      setBD(false)
    }
    else if (params === "FD") {
      setMT(false)
      setFD(true)
      setBH(false)
      setBD(false)
    }
    else if (params === "BH") {
      setMT(false)
      setFD(false)
      setBH(true)
      setBD(false)
    }
    else {
      setMT(false)
      setFD(false)
      setBH(false)
      setBD(true)
    }

  }

  const search = (e) => {
    setValue(e.target.value)
    setMT(false)
    setFD(false)
    setBH(false)
    setBD(false)
  }


  const displayValue = () => {
    const abc = imageArray.filter((item, key) => {
      if ((value !== "") && (item.imageName.toLowerCase().indexOf(value.toLowerCase())) !== -1) {
        return item
      }
    }).map((item, key) => {


      return (

        <tr key={key}>

          <div>
            <h1>{item.imageName}</h1>
            <div className="imgholder">
              {item.imageArray.map((xitem, xkey) => {
                return (
                  <tr key={key}>
                   <div className="imgbox">
                      <tr key={xkey}>
                        <img src={xitem.Image} className="imgprop" />
                      </tr>
                    </div>
                  </tr>
                )
              })}

            </div>
          </div>
        </tr>
      )
    })
    return abc.length ? abc : 'No Image To Display'
  }
  return (
    <div>
      <section id="main-content">

        <section className="wrapper">
          <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
            <input type="text" className="form-control" placeholder="Search" onChange={(e) => search(e)} value={value} />
            <br />
            <div className="align">
              {mt ? <a className="btn btn-primary widh bg" onClick={(e) => onAddNotePage(e, "MT")}><span style={{ color: "white" }}>Mountain</span></a> : <a className="btn btn-primary widh" onClick={(e) => onAddNotePage(e, "MT")}><span style={{ color: "white" }}>Mountain</span></a>}
              {bh ? <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "BH")}><span style={{ color: "white" }}>Beaches</span></a> : <a className="btn btn-primary ml-10 widh" onClick={(e) => onAddNotePage(e, "BH")}><span style={{ color: "white" }}>Beaches</span></a>}
              {bd ? <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "BD")}><span style={{ color: "white" }}>Birds</span></a> : <a className="btn btn-primary ml-10 widh" onClick={(e) => onAddNotePage(e, "BD")}><span style={{ color: "white" }}>Birds</span></a>}
              {fd ? <a className="btn btn-primary ml-10 widh bg" onClick={(e) => onAddNotePage(e, "FD")}><span style={{ color: "white" }}>Food</span></a> : <a className="btn btn-primary ml-10 widh" onClick={(e) => onAddNotePage(e, "FD")}><span style={{ color: "white" }}>Food</span></a>}
            </div>
            <Logout props={loginName} />
            <br/>
            {displayValue()}

          </div>
        </section>
      </section>
    </div>
  )
}

export default Home