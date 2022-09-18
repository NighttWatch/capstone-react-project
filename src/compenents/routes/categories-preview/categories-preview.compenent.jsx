import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../category-preview/category-preview.compenent";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../../store/categories/category.selector";
import Spinner from "../../spinner/spinner.compenent";


const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

    return (
      <Fragment>
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )}
      </Fragment>
    );
  };
  
  export default CategoriesPreview;