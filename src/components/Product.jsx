import React from 'react';

const Product = ({ onClick, precio, cantidad, nombre, foto }) => {
	return (
		<button onClick={onClick} className="btn card text-dark m-1" style={{width: "18rem"}}>
			<h6>{nombre}</h6>
            <img src={foto} className="card-img-top" alt={nombre} style={{width:'5vmax',height:'5vmax'}} />
			<div className="card-body">
				<div className="clearfix">
                    <div className="float-left">
                        Cant.{cantidad}
                    </div>
                    <div className="float-right">
                        ${precio}
                    </div>
                </div>
			</div>
		</button>
	);
};

export default Product;
