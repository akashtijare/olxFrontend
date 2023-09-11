import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClassifiedList() {
  const [classifieds, setClassifieds] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/classifieds");
        setClassifieds(response.data);
      } catch (error) {
        console.error('Error fetching classifieds:', error);
      }
    };

    fetchData();
  }, [page, limit, category, sortBy, search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  const handleDelete = (itemId) => {
    fetch(`http://localhost:8080/delete/${itemId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the item was deleted successfully, update the state
          setItems(items.filter((item) => item.id !== itemId));
        }
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  return (
    <div>
      <h2>Browse Classifieds</h2>
      <div style={{display:"flex", justifyContent:"space-around", backgroundColor :"#37d2dd" ,padding:"25px"}}>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
            <option value="all">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Other">Other</option>
          </select>
        </div>
   
        <div>
          <div>
            <label>Sort By:</label>
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="">None</option>
              <option value="postedAt">Date</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>

        <div>
            <label>Search:</label>
            <input type="text" value={search} onChange={(e) => handleSearchChange(e.target.value)} />
        </div>

      </div>

      <div  style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)", margin:"auto"}}>
        {classifieds.map((classified) => (
          <div key={classified._id} style={{margin:"auto", boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"70%"}}>
            <h3>{classified.name}</h3>
            <p>{classified.description}</p>
            <p>Category: {classified.category}</p>
            <div >
               <img src={classified.image} alt={classified.name}  style={{width:"100%",height:"300px"}}/>
            </div>
            <p>Location: {classified.location}</p>
            <p>Date: {classified.postedAt}</p>
            <p>Price: {classified.price}</p>
            <button onClick={() => handleDelete(classified.id)}>Delete</button>
                <button >Edit</button>
          </div> 
        ))}
      </div>
      <div>
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous Page</button>
        <button onClick={() => handlePageChange(page + 1)}>Next Page</button>
      </div>
    </div>
  );
}

export default ClassifiedList;
