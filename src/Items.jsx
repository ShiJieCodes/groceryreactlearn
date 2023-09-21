import SingleItem from "./SingleItem";

const Items = ({ data, removeItem, editItem }) => {
  return (
    <div className="items">
      {data.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
