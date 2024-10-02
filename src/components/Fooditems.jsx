import Item from "./Item";
const Fooditems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
       <Item key={item}
        foodItem={item}
        handleBuyButtonClicked={() => console.log(`${item} bought`)}
        ></Item>
      ))}
    </ul>
  );
};
export default Fooditems;



