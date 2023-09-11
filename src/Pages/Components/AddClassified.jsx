import React, { useState } from 'react';
import axios from 'axios';

function AddClassified() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Clothing',
    image: '',
    location: '',
    postedAt: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    try {
      const response = await axios.post('http://localhost:8080/classifieds/add', formData);
      console.log('New classified added:', response.data);
   
    } catch (error) {
      console.error('Error adding classified:', error);
    }
  };

  return (
    <div style={{width:"60%",margin:"auto", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <h2>Add Classified</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input style={{padding:"5px",margin:"20px" ,width:"50%"}}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div>

          <label htmlFor="description">Description:</label>
          <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
          />
        </div>
        <div>
          <label htmlFor="postedAt">Date:</label>
          <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            type="date"
            name="postedAt"
            value={formData.postedAt}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input  style={{padding:"5px",margin:"20px" ,width:"50%"}}
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
        </div>
        <button type="submit" style={{padding:"5px",margin:"20px" ,width:"20%" ,backgroundColor :"#37d2dd"}}>Submit</button>
      </form>
    </div>
  );
}

export default AddClassified;
