import styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value)
  }
  return <input
   className={styles.FoodInput} 
   placeholder="Enter Food Item Here" 
   type="text"
   onChange={handleOnChange} 
   />
}
export default FoodInput;