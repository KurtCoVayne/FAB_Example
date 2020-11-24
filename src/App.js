import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FAB from './components/FAB';
import Product from './components/Product';
const productos = [{
  "id": 1,
  "nombre": "Browning Caramel Glace",
  "cantidad": 24,
  "precio": 93832.78,
  "foto": "http://dummyimage.com/223x196.bmp/ff4444/ffffff"
}, {
  "id": 2,
  "nombre": "Beef - Rouladin, Sliced",
  "cantidad": 12,
  "precio": 35819.56,
  "foto": "http://dummyimage.com/202x106.jpg/cc0000/ffffff"
}, {
  "id": 3,
  "nombre": "Olives - Stuffed",
  "cantidad": 48,
  "precio": 56600.34,
  "foto": "http://dummyimage.com/103x107.png/cc0000/ffffff"
}, {
  "id": 4,
  "nombre": "Fish - Atlantic Salmon, Cold",
  "cantidad": 24,
  "precio": 91689.51,
  "foto": "http://dummyimage.com/100x249.jpg/5fa2dd/ffffff"
}, {
  "id": 5,
  "nombre": "Wine - Magnotta - Cab Franc",
  "cantidad": 5,
  "precio": 10604.49,
  "foto": "http://dummyimage.com/110x139.bmp/cc0000/ffffff"
}, {
  "id": 6,
  "nombre": "Lobak",
  "cantidad": 78,
  "precio": 33615.54,
  "foto": "http://dummyimage.com/143x118.jpg/5fa2dd/ffffff"
}, {
  "id": 7,
  "nombre": "Bacardi Mojito",
  "cantidad": 81,
  "precio": 4654.42,
  "foto": "http://dummyimage.com/169x220.png/ff4444/ffffff"
}, {
  "id": 8,
  "nombre": "Ecolab - Hobart Upr Prewash Arm",
  "cantidad": 12,
  "precio": 76125.46,
  "foto": "http://dummyimage.com/100x158.png/cc0000/ffffff"
}, {
  "id": 9,
  "nombre": "Cheese Cloth",
  "cantidad": 37,
  "precio": 46012.72,
  "foto": "http://dummyimage.com/153x120.jpg/5fa2dd/ffffff"
}, {
  "id": 10,
  "nombre": "Vermouth - Sweet, Cinzano",
  "cantidad": 44,
  "precio": 30380.63,
  "foto": "http://dummyimage.com/218x201.png/ff4444/ffffff"
}]

function App() {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  return (
    <>
      <div className="App">

        <header className="App-header">
          <div style={{ maxHeight: '50vh', overflow: 'auto' }}>
            {productos.map(p => (
              <Product
                onClick={() => setMostrarBoton(true)}
                key={p.id}
                nombre={p.nombre}
                cantidad={p.cantidad}
                precio={p.precio}
                foto={p.foto}
              />
            ))}
          </div>
          <FAB
            mostrar={mostrarBoton}
            onEdit={() =>alert('Editar producto')}
            onDelete={() => alert('Eliminar producto')}
            close={() => setMostrarBoton(false)}
            onClick={() => alert('Añadir producto')}

          />
        </header>
      </div>
    </>
  );
}

export default App;
