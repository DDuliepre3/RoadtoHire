import React from "react";
import EditModal from "./editModal/editModal";
import DeleteModal from "./deleteModal/deleteModal";
import AddModal from "./addModal/addModal";

class admin extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,

      // Form Values
      productId: "",
      productUrl: "",
      productTitle: "",
      productCategory: "",
      productPrice: ""
    };
  }

  // Allows product to be added (submitted)
  onSubmitAddProduct = e => {
    const data = {
      url: this.state.productUrl,
      title: this.state.productTitle,
      productCategory: this.state.productCategory,
      price: this.state.productPrice
    };
    fetch("http://localhost:7272/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(product => this.props.onAddProduct(product))
      .catch(err => console.log(err));

    this.toggleAddModal();
    e.preventDefault();
  };
  // Data that will be listed
  onSubmitEditProduct = e => {
    const data = {
      productId: this.state.productId,
      url: this.state.productUrl,
      title: this.state.productTitle,
      productCategory: this.state.productCategory,
      price: this.state.productPrice
    };

    console.log(data);
    console.log(this.state.productId);
    // Gets data to endpoint to update products information
    fetch(`http://localhost:7272/admin/${data.productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(product => {
        console.log(product);
        this.props.onEditProduct(this.state.productIdytf); // Automatically updates product
      })
      .catch(err => console.log(err));
    // Allows product to be updated and added onto the page without refreshing
    this.toggleEditModal();
    e.preventDefault();
  };
  // Allows edit button to be used
  onShowEditProduct = product => {
    this.setState({
      productId: product._id,
      productUrl: product.url,
      productTitle: product.title,
      productCategory: product.productCategory,
      productPrice: product.price
    });
    this.toggleEditModal();
  };
  // Allows delete button to be used
  onShowDeleteProduct = id => {
    this.setState({ productId: id, showDeleteModal: true });
  };
  // Gets data to endpoint to delelte products
  onDeleteProduct = () => {
    fetch(`http://localhost:7272/admin/${this.state.productId}`, {
      method: "DELETE"
    })
      .then(() => {
        this.props.onDeleteProduct(this.state.productId); // Automatically deletes product
      })
      .catch(err => console.log(err));
    // Allows product to be delelted on the page without refreshing
    this.toggleDeleteModal();
  };
  // Allows changes to be made on forms
  onChangeValue = (key, value) => {
    this.setState({ [key]: value });
  };
  // Allows add modal form to pop-up
  toggleAddModal = () => {
    this.setState({
      showAddModal: !this.state.showAddModal
    });
  };
  // Allows edit modal form to pop-up by clicking on it
  toggleEditModal = () => {
    this.setState({
      showEditModal: !this.state.showEditModal
    });
  };
  // Allows delete modal message to pop-up
  toggleDeleteModal = () => {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  };

  render() {
    console.log('this.props.shownGameConsoles - ', this.props.shownGameConsoles);
    return (
      <div className="adminPage">
        <div>
          <button className="add" onClick={this.toggleAddModal}>+ADD</button>
          {this.state.showAddModal ? (
            <AddModal
              header="Add a New Product"
              url={this.state.productUrl}
              title={this.state.productTitle}
              category={this.state.productCategory}
              price={this.state.productPrice}
              onChange={this.onChangeValue}
              onSubmit={this.onSubmitAddProduct}
              onClose={this.toggleAddModal}
            />
          ) : null}

          <div className="label-header">
            <ul className="admin_labels">
              <li className="image">Image</li>
              <li className="title">Title</li>
              <li className="category">Category</li>
              <li className="price">Price</li>
              <li className="id">Id</li>
              <li className="modify">Modify</li>
            </ul>
          </div>
          <section className="adminPage_cards">
            {this.props.shownGameConsoles.map((product, i) => {
              return <div className="adminPage__items">
                <div className="adminPage__section">
                  <div className="adminPage--boxes">
                    <div key={i} className="row_adminCard">
                      <img src={product.url} alt="" />
                      <h2>{product.title}</h2>
                      <p className="product--category">{product.productCategory}</p>
                      <h3>${product.price}</h3>
                      <p className="product--id">{product._id}</p>
                      <div className="adminPage--Api">
                        <button className="btn--edit" onClick={() => this.onShowEditProduct(product)}>Edit</button>
                        <button className="btn--delete" onClick={() => this.onShowDeleteProduct(product)}>Delete</button>
                      </div>
                    </div>
                  </div>
                {this.state.showEditModal ? ( // Allows edit modal form to pop-up with data pre-written in inputs
                  <EditModal 
                    header="Edit a Product"
                    url={this.state.productUrl}
                    title={this.state.productTitle}
                    category={this.state.productCategory}
                    price={this.state.productPrice}
                    onChange={this.onChangeValue}
                    onSubmit={e => this.onSubmitEditProduct(e)} // Click on edit button and sends request for product to be edited
                    onClose={this.toggleEditModal} // Closes edit modal
                  />
                ) : null}
                {this.state.showDeleteModal ? (
                  <DeleteModal
                    onDelete={this.onDeleteProduct} // Click on delete button and sends request for product to be deleted
                    onClose={this.toggleDeleteModal} // Closes delete modal
                  />
                ) : null}
                </div>
              </div>
            })}
          </section>
        </div>
      </div>
    );
  }
}

export default admin;