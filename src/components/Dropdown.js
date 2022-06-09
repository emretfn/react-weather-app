import { useContext } from "react";
import DataContext from "../context/DataContext";

const Dropdown = () => {
  const { city, setCity, cities } = useContext(DataContext);

  const handleChange = (e) => {
    cities.filter((cit) => {
      return cit.name === e.target.value && setCity(cit);
    });
  };

  return (
    <div className="dropdownContainer">
      <select name="city" value={city.name} onChange={handleChange}>
        {cities.map((e) => (
          <option key={e.id} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
