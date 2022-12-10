import React, { useState } from "react";
import List from "./List";

function Search({ locations }) {
   const [searchField, setSearchField] = useState("");

  let filtered = locations
  filtered=locations.filter((entry) => {
    return entry.location.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <List locations={filtered} />
      </div>
  
  );
}

export default Search;



// const [searchField, setSearchField] = useState("");
//   const [filterOil, setFilterOil] = useState(false);
//   const [filterFlour, setFilterFlour] = useState(false);
//   const [filterButter, setFilterButter] = useState(false);
//   const [displayData, setDisplayData] = useState("");
//   const [displayMenu, setDisplayMenu] = useState([]);
//   const oilData = (data) => {
//     return data.filter((entry) => {
//       return entry.ingredients.some((item) => { return item.ingredientName.includes("olive oil") })
//     })
//   }
//   const flourData = (data) => {
//     return data.filter((entry) => {
//       return entry.ingredients.some((item) => { return item.ingredientName.includes("plain flour") })
//     })

//   }
//   const butterData = (data) => {
//     return data.filter((entry) => {
//       return entry.ingredients.some((item) => { return item.ingredientName.includes("butter") })
//     })

//   }
//   useEffect(() => {
//     //so close but yet so far
//     if (!filterOil && !filterFlour && !filterButter) {
//       setDisplayData(filtered)

//     }
//     else {
//       let result = filtered
//       if (filterFlour) {
//         result = flourData(result)
//       }
//       if (filterOil) {
//         result = oilData(result)
//       }
//       if (filterButter) {
//         result = butterData(result)
//       }
//       setDisplayData(result)
//     }
//   }, [filtered, filterOil, filterFlour, filterButter])
//   return (

//     <div>
//       <div> <input
//         className="form-control"
//         type="text"
//         placeholder="Search ..."
//         onChange={(e) => setSearchField(e.target.value)}
//       /> </div>
//       <div className="oilCheck"> <label> Oil </label> <input type="checkbox" value={filterOil} onClick={() => setFilterOil(!filterOil)}

//       /></div>
//       <div className="oilCheck"> <label> Flour </label> <input type="checkbox" value={filterFlour} onClick={() => setFilterFlour(!filterFlour)}

//       /></div>

//       <div className="oilCheck"> <label> Butter </label> <input type="checkbox" value={filterButter} onClick={() => setFilterButter(!filterButter)}

//       /></div>
