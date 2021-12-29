import React from 'react'
import { Link } from 'react-router-dom';

const Move = (props: any) => {
  return (
    <div className="col">
      <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZZaH7jVPV1XuPHsHTfeUfEC4Gtx_ZR8vzA&usqp=CAU" className="card-img-top" alt="zdj" height="200"></img>
            <div className="card-body">
                  <h5 className="card-title">Tytuł filmu</h5>
              <p className="card-text">Opis filmu, informacje, aktorzy, postacie, kina, ciekawostki</p>
              <Link to="/details"><a href="#" className="btn btn-primary">Zobacz więcej</a></Link>
            </div>
       </div>
    </div>

  );
}
export default Move;