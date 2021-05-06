import React, { useState, useEffect } from 'react'
import './list.css'
import Card from '../card/card';

const List = (props) => {

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(0);
  }, [props.items])

  return (
    <div className="container">
      <div className="row">
        {props.items && props.items.map((item) => (
          <div key={item.key}
            onClick={() => { props.onSelect(item.key); setSelected(item.key) }}
            className="col-lg-4 col-md-6 col-xl-4 col-12 col-sm-6 list-card p-0"
          >
            <Card
              selected={selected}
              item={item}
              type={props.type}
              loading={props.loading}>
            </Card>
          </div>
        ))}
        {!props.items && !props.loading &&
          <div className="lottie-loading">
            Qualcosa è andato storto! Riprova più tardi
            </div>
        }
        {props.loading &&
          <div className="lottie-loading">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_uwVsdi.json"
              background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
        }
      </div>
    </div>
  )
};

export default List