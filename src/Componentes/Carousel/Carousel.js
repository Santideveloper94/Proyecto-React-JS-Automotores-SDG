import React from 'react'

const Carousel = () => {
    return (
        <div>
        <p>Somos una empresa familiar fundada en 1962 en San Isidro, Provincia de Buenos Aires por Ricardo De Giacomi un soñador nato y empresario de alma. Nuestro valor agregado es el respeto hacia el cliente y la honestidad con la que realizamos nuestro trabajo, tratando no solamente de vender y comprar vehiculos sino tambien ayuda a nuestros clientes a alcanzar sus sueños. En la actualidad los sueños de Ricardo siguen a cargo de sus 2 hijos y sus 2 nietos, todos ellos encargados de ennaltecer su buen nombre y su pasion por los motores.
        Nuestra sucursal se encuentra en Av del Libertador 14556, Acasusso, Partido de San Isidro, zona caracteristica por su alta concurrencia y fluido transito.</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.934201948131!2d-58.49399450000001!3d-34.4791934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb1bb1f833b4f%3A0xd5d96da5055c816c!2sAv%20del%20Libertador%2014556%2C%20B1641%20Acassuso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1674151086715!5m2!1ses-419!2sar" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe><br/>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefFfwTmc_MUOhRXA_noFlWrfNaQvODhDgirFD0jVHHu9FzLCjZGRaqnGoBcgrwzlk6UE&usqp=CAU" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSmZngeeqCsmBYOyFhLFGdxZ68Dh5ETJ-2w&usqp=CAU" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0fxNwYGqFnXlq6qo49mLy_rqRmqczCrHRw&usqp=CAU" className="d-block w-100" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
    </button>
</div>
        </div>
    )
}

export default Carousel