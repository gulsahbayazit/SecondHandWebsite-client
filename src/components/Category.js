import { useState, useContext } from "react";
import axios from "axios";

function Category(props) {
  const [category, setCategory] = useState("");
  const handleCategory = (e) => setCategory(e.target.value);

  return (
    <div>
      <div className="col">
        <label className="form-label">Categories:</label>
      </div>

      <div className="addProduct-links-container">
        <input
          type="radio"
          name="category"
          id="livingRoom"
          value="livingRoom"
          checked={category === "livingRoom"}
          onChange={handleCategory}
        />
        <label htmlFor="livingRoom">Living Room</label>
        <input
          type="radio"
          name="category"
          id="bedroom"
          value="bedroom"
          checked={category === "bedroom"}
          onChange={handleCategory}
        />
        <label htmlFor="Bedroom">Bedroom</label>
        <input
          type="radio"
          name="category"
          id="diningRoom "
          value="diningRoom "
          checked={category === "diningRoom "}
          onChange={handleCategory}
        />
        <label htmlFor="Dining Room ">Dining Room </label>
        <input
          type="radio"
          name="category"
          id="outdoor"
          value="outdoor"
          checked={category === "outdoor"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Outdoor </label>
        <input
          type="radio"
          name="category"
          id="homeOffice"
          value="homeOffice"
          checked={category === "homeOffice"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Home Office</label>
        <input
          type="radio"
          name="category"
          id="kids"
          value="kids"
          checked={category === "kids"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Kids</label>
        <input
          type="radio"
          name="category"
          id="storage"
          value="storage"
          checked={category === "storage"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Storage and Organization</label>
        <input
          type="radio"
          name="category"
          id="entryway"
          value="entryway"
          checked={category === "entryway"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Entryway</label>
        <input
          type="radio"
          name="bathroom"
          id="bathroom"
          value="bathroom"
          checked={category === "bathroom"}
          onChange={handleCategory}
        />
        <label htmlFor="outdoor">Bathroom</label>{" "}
      </div>
    </div>
  );
}

export default Category;

// import React from 'react';
// import { Dropdown } from 'react-bootstrap';

// const categories = [
//   { id: 1, name: 'Furniture' },
//   { id: 2, name: 'Home Decor' },
//   { id: 3, name: 'Lighting' },
//   { id: 4, name: 'Outdoor' },
//   { id: 5, name: 'Textiles' },
// ];

// const DropdownCategory = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category.name);
//     // Add additional logic here to filter items based on category selection
//   };

//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="secondary" id="dropdown-category">
//         {selectedCategory}
//       </Dropdown.Toggle>

//       {/* <Dropdown.Menu>
//         <Dropdown.Item onClick={() => handleCategorySelect({ name: 'All Categories' })}>
//           All Categories
//         </Dropdown.Item>

//         {categories.map((category) => (
//           <Dropdown.Item key={category.id} onClick={() => handleCategorySelect(category)}>
//             {category.name}
//           </Dropdown.Item>
//         ))}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// };

// export default DropdownCategory; */}
