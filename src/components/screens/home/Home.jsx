import { useEffect, useState } from 'react';
import AddCarForm from './add-car-form/AddCarForm'
import { CarItem } from './car-item/CarItem.jsx'
import { cars as carsData } from './cars.data.js'

function Home() {
    const[cars, setCars] = useState(carsData);

    useEffect(() => {
        console.log('Changed')
    }, [cars])

    return (
      <div>
            <h1>Car Catalog</h1>
            <AddCarForm setCars={setCars} />
            <div>
                {cars.length ? cars.map( car => (
                    <CarItem car={car} key={car.id} />
                )) : <p>No Cars</p> }
            </div>
      </div>
    )
  }
  
  export default Home