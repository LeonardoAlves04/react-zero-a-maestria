import styles from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  return (
    <div className={styles.cardInfo}>
      <h1>Modelo: {car.modelo}</h1>
      <p>Potência: {car.potencia}</p>
      <p>Cor: {car.cor}</p>
    </div>
  );
};

export default CarDetails;
