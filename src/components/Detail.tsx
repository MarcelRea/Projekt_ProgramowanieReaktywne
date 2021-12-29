import React from 'react'

const Detail = (props: any) => {
    return (
    <div className="col">
          <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZZaH7jVPV1XuPHsHTfeUfEC4Gtx_ZR8vzA&usqp=CAU" className="card-img-top" alt="zdj" height="200"></img>
                <div className="card-body">
                      <h5 className="card-title">Tytuł filmu</h5>
                  <p className="card-text">Opis filmu, informacje, aktorzy, postacie, kina, ciekawostki</p>
                  <a href="#" className="btn btn-primary">Zobacz więcej</a>
                </div>
           </div>
        </div>
    );

}
export default Detail;