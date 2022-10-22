import React from 'react';


const FormatPrice = ({getPrice}) => {

  const [price, setPrice] = React.useState(getPrice);


  React.useEffect( ()=> {
    setPrice(price.toString().replace('.', ','));

    if (price.length > 0 && price.length === 5) {
      setPrice(price + "0");
    }

    if ((price.length > 0 && price.length === 3)) {
      setPrice(price + ",00");
    }
  }, [price]);

  return (
    <> {price} </>
  )
}

export default FormatPrice;