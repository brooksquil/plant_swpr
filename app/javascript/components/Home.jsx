import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="">
    <div className="">
      <div className="container">
        <h1 className="display-4">Food Recipes</h1>
        <p className="lead">
          A curated list of recipes for the best homemade meal and delicacies.
        </p>
        <hr className="my-4" />
        <Link
          to="/recipes"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Recipes
        </Link>
      </div>
    </div>
  </div>
);
