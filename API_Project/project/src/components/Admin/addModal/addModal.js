import React from "react";

const addModal = (props) => {
  return (
    <div id="show--add--modal" className="admin__modal">
      <form className="form-container" onSubmit={props.onSubmit}>
        <h1>{props.header}</h1>

        <label htmlFor="image">
          <b>Image URL</b>
        </label>
        <input
          type="text"
          placeholder="Enter Url"
          name="url"
          value={props.imageUrl}
          onChange={e => props.onChange("productUrl", e.target.value)}
          required
        />

        <label>
          <b>Title</b>
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={props.title}
          onChange={e => props.onChange("productTitle", e.target.value)}
          required
        />

        <label>
          <b>Category</b>
        </label>
        <input
          type="text"
          placeholder="Enter Category"
          name="category"
          value={props.category}
          onChange={e => props.onChange("productCategory", e.target.value)}
          required
        />

        <label>
          <b>Price</b>
        </label>
        <input type="number" placeholder="Enter Price" name="price" 
            value={props.price}
            onChange={e => props.onChange("productPrice", e.target.value)}
        required />

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

export default addModal;
