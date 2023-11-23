import { useState } from 'react';
import styles from './AddCarForm.module.css';

const clearData = {
    title: '',
    price: '',
    image: ''
}

const AddCarForm = ({setCars}) => {
    const [data, setData] = useState(clearData);

    const addCar = (e) => {
        e.preventDefault();

        setCars(prev => [
            { 
                id: prev.length + 1, 
                ...data 
            }, 
            ...prev
        ])
        
        setData(clearData);
    }

    
    const handleChange = (e) => {
        setData(prev => ({...prev, title: e.target.value}))
    }

    return (
        <form className={styles.form}>
            <input placeholder="Name" type="text" value={data.title} onChange={handleChange} />
            <input placeholder="Price" type="text" value={data.price} onChange={e => setData(prev => ({...prev, price: e.target.value}))} />
            <input placeholder="Image" type="text" value={data.image} onChange={e => setData(prev => ({...prev, image: e.target.value}))} />
            <button className="btn" onClick={addCar}>Create</button>
        </form>
    )
}

export default AddCarForm;