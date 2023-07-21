import React from 'react'
import { bannerCoffeeDeLight } from '../../assets'
import "./Store.css"
import { Products } from '../../config/constants'

const Store = () => {


  return (
    <>
    <main id="lista-articulos" className="container">
        <div className="text-center-home mt 1" id="#section-our-products">
            <img src={bannerCoffeeDeLight} className="object-product" alt="" />
            <h1 id="#section-our-products">Nuestros Productos</h1>
        </div>

        <section id="dulces" className="container-section">
            
        
            <div className="row-products">
            {Products.map((product, index) =>(
                <div className="col" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product.imagen} className="card-img-top imagen-tech u-full-width" alt="..." />
                        <div className="card-body info-card">
                          <h3 className="card-title-home name">{product.nombre}</h3>
                          <h5 className="card-title-home">{product.proveedor} <span>{product.unidadMedida}</span><hr /></h5>
                          <div className="ver" type="button" id="btn-abrir-popup" data-filter-color="#5f00cc" data-aos="fade-up-left">
                            Ver más
                          </div>
                          <p className="rebajado">${product.sinRebaja}<span className="card-subtitle precio">${product.valorVenta}</span></p><br />
                          <a href="#" className="btn btn-primary u-full-width button-primary button input agregar-carrito" data-id="1">Añadir al carrito</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </main>
    </>
  )
}

export default Store