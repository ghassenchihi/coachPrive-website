import React from 'react'
import { useState ,useContext} from 'react';
import Advies from './Advice';
import {AppContext} from '../App'
function MainCategorie() {
    const {categories , setCategories} = useContext(AppContext)
    const toggleCategory = (categoryName) => {
        setCategories((currentCategories) =>
          currentCategories.map((category) => {
            if (categoryName === 'All') {
              return {
                ...category,
                state: category.name === 'All' ? 'selected' : 'unselected',
              };
            }

            if (category.name === categoryName) {
              return { ...category, state: 'selected' };
            }

            if (category.name === 'All') {
              return { ...category, state: 'unselected' };
            }

            return category;
          })
        );
      };//understand the togglecategory and how it is working
  return (<div>
    <ul>
    <li>{categories.map((categorie) =>
      (<button className={`border-solid border-1 ${categorie.state === "selected" ? "bg-blue-300": ""}`}
         key={categorie.name} onClick={() => toggleCategory(categorie.name)}>{categorie.name}</button> )
      )}</li>
    </ul>
    </div>
  )
}

export default MainCategorie
