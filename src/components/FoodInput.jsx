import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnChange }) => {
  return <input
   className={styles.FoodInput} 
   placeholder="Enter Food Item Here" 
   type="text"
   onChange={handleOnChange} 
   />
}
export default FoodInput;