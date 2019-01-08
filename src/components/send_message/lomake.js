import React from 'react'

const YhteydenottoLomake = ({toggle, isOpen}) => {
  return (
    <form className="lomake">
      <div className="form-row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="exampleInputEmail1">Nimi</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
        </div>
        <div className="col-md">
          <div className="form-group">
            <label for="exampleInputEmail1">Sähköposti</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col-md-6">
          <label for="exampleInputEmail1">Viestin aihe</label>
          <select className="custom-select custom-select-sm">
            <option selected>Valitse aihe</option>
            <option value="3">Vapaa viesti</option>
            <option value="2">Haluan tilata verkkosivut</option>
            <option value="1">Etsin osaavaa javascript- kehittäjää </option>
            <option value="2">Tarvitsen laadukasta sisältöä verkkoon</option>
          </select>
        </div>
        <div className="col-md">
          <div className="form-group">
            <label for="exampleInputEmail1">Puhelinnumero</label>
            <input
              type="email"
              className="form-control form-control-sm"
              id="exampleInputEmail1"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <label for="exampleFormControlTextarea1">Kirjoita viesti</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          placeholder=""
        />
      </div>

      <button
        type="submit"
        className="btn btn-secondary btn-block px-5 btn-simple "
      >
        Lähetä viesti
      </button>
      <div>
        <p>
          <small>Tiedot tallennetaan gmail sähköpostilaatikkoon </small>
        </p>
      </div>
    </form>
  )
}
export default YhteydenottoLomake
