import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

function AutoComplete({ meals }) {
  const items = meals.map((meal) => {
    const item = { id: meal.id, name: meal.title };
    return item;
  });
  const [id, setId] = useState();
  const linkRef = React.useRef(null);

  const handleOnSelect = async (item) => {
    // the item selected
    await setId(item.id);
    linkRef.current.click();
  };

  return (
    <>
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleOnSelect}
          autoFocus
          placeholder="Search Meal"
        />
      </div>
      <div>
        <Link ref={linkRef} to={`/meals/${id}`} className="naveBar" hidden />
      </div>
    </>
  );
}

export default AutoComplete;
