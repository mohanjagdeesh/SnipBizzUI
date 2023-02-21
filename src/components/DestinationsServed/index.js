import {RiArrowDropLeftLine , RiArrowDropRightLine} from "react-icons/ri"

import './index.css'


const DestinationsServed = () => (
    <div className="destinations-cont">
        <div className='map-cont'>
        <h1 className='destination-heading'>Destinations Served</h1>
        <p className='destination-para'>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        <img className='map-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674079/world-map_1_map_szsd9l.png" alt = "map"/>
        </div>

        <div className='destinations-list'>
        <RiArrowDropLeftLine className="arrow-left"/>
        <div className="destination-delhi">
                <img className='destination-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674829/Rectangle_4_delhi_ntafru.png" alt = "delhi"/>
                <h2 className='delhi-name'>Delhi</h2>
                <p className='delhi-cost'>Lowest price $10.00</p>
            </div>
            <div className="destination-others">
                <img className='destination-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674847/Rectangle_5_new_j8rxca.png" alt = "newyork"/>
                <h2 className='others-name'>Newyork</h2>
                <p className='others-cost'>Lowest price $25.00</p>
            </div>
            <div className="destination-others">
                <img className='destination-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674839/Rectangle_6_lon_dnszux.png" alt = "london"/>
                <h2 className='others-name'>London</h2>
                <p className='others-cost'>Lowest price $15.00</p>
            </div>
            <div className="destination-others">
                <img className='destination-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674853/Rectangle_6_frank_trlnnz.png" alt = "franfurt"/>
                <h2 className='others-name'>Frankfurt</h2>
                <p className='others-cost'>Lowest price $18.00</p>
            </div>
            <div className="destination-others">
                <img className='destination-img' src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675674859/Rectangle_5_amster_otipgb.png" alt = "amsterdam"/>
                <h2 className='others-name'>Amsterdam</h2>
                <p className='others-cost'>Lowest price $17.00</p>
            </div>
            <RiArrowDropRightLine className="arrow-right"/>
        </div>
        
    </div>
)

export default DestinationsServed