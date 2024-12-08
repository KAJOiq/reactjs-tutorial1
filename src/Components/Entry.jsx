import MarkerImage from '../assets/marker.png'; 

function Entry(props) {
    return (
        <div className='container'>
            <main>
                <article className="journal-entry">
                            <div>
                                <img 
                                    className="main-image"
                                    src={props.img.src} 
                                    alt={props.img.alt}
                                />
                            </div>
                            <div className="info-container">
                                <img 
                                    className="marker"
                                    src= {MarkerImage}
                                    alt="marker image"
                                />
                                <span className="country">{props.country}</span>
                                <a href={props.googleMapsLink}>View on Google Maps</a>
                                <h2>{props.title}</h2>
                                <p className="trip-dates">{props.dates}</p>
                                <p className={props.text}>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                            </div>
                </article>
            </main>
         <hr/>
        </div>
    )
    
  }
  
  export default Entry
  