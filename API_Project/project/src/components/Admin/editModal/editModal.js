import React from "react";

const editModal = (props) => {
  return (
    <div id="show--add--modal" className="admin__modal">
      <form method="put" className="form-container">
        <h1>Edit Product</h1>

        <label htmlFor="image">
          <b>Image URL</b>
        </label>
        <input type="text" placeholder="Enter Url" name="url" required />

        <label>
          <b>Title</b>
        </label>
        <input type="text" placeholder="Enter Title" name="title" required />

        <label>
          <b>Creator</b>
        </label>
        <input type="text" placeholder="Enter Creator" name="creator" required />

        <label>
          <b>Category</b>
        </label>
        <input type="text" placeholder="Enter Category" name="category" required />

        <label>
          <b>Price</b>
        </label>
        <input type="number" placeholder="Enter Price" name="price" required />

        <label>
          <b>Id</b>
        </label>
        <input type="number" placeholder="Enter Id" name="id" required />
     
     <button type="button" className="btn__done">
        Done
     </button>
     <button type="button" className="btn__cancel" onClick={props.onCancel}>
        Cancel
     </button>
      </form>
    </div>
  );
};

export default editModal;