import styles from '../Home.module.css'

export function CarItem({car}) {
    return (
        <div className={styles.item}>
            <div 
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image})`
                }}
            />
            <div className={styles.info}>
                <h2>{car.title}</h2>
                <p className={styles.carPrice}>
                    {new Intl.NumberFormat('ru-RU', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(car.price)}
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}