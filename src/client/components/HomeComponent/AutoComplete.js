import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Test from "./Test";

function AutoComplete({ meals }) {
  const items = meals.map((meal) => {
    const item = { id: meal.id, name: meal.title };
    return item;
  });
  //   const itemss = [
  //     {
  //       id: 0,
  //       name: "Cobol",
  //     },
  //     {
  //       id: 1,
  //       name: "JavaScript",
  //     },
  //     {
  //       id: 2,
  //       name: "Basic",
  //     },
  //     {
  //       id: 3,
  //       name: "PHP",
  //     },
  //     {
  //       id: 4,
  //       name: "Java",
  //     },
  //   ];
  const [state, setstate] = useState(false);
  const [id, setid] = useState();

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnSelect = async (item) => {
    // the item selected
    await setid(item.id);
    setstate(true);
    console.log(id);

    linkRef.current.click();
    //Detail
    //</Link>;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const linkRef = React.useRef(null);
  return (
    <>
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          placeholder="Search Meal"
        />
      </div>
      <div>
        <Link
          ref={linkRef}
          to={`/meals/${id}`}
          className="naveBar"
          onClick={() => {
            console.log("cleiked");
          }}
          hidden
        />
      </div>
    </>
  );
}

export default AutoComplete;
