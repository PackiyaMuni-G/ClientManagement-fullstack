import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ClientEdit = () => {
    const emptyItems = {
        name: '',
        email: ''
    };
    const [items, setItems] = useState(emptyItems);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClients = async () => {
            if (id !== 'new') {
                try {
                    const response = await axios.get(`http://localhost:8080/clients/${id}`);
                    setItems(response.data);
                } catch (error) {
                    console.log('Error fetching client data:', error);
                }
            }
        };
        fetchClients();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItems((prevItem) => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:8080/clients${items.id ? '/' + items.id : ''}`;
            const method = items.id ? 'put' : 'post';
            await axios({
                method: method,
                url: url,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: items
            });
            navigate('/clients');
        } catch (error) {
            console.log('There was an error!', error);
        }
    };

    const title = <h2>{items.id ? 'Edit Client' : 'Add Client'}</h2>;
    
    return (
        <div className="container">
            {title}
            <div className="form-container mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className="form-control form-control-sm" // Make the input smaller
                            name="name" 
                            id="name" 
                            value={items.name || ''} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            className="form-control form-control-sm" // Make the input smaller
                            name="email" 
                            id="email" 
                            value={items.email || ''} 
                            onChange={handleChange} 
                        />
                    </div>
                    <button className="btn btn-primary btn-sm mt-3">Save</button> {/* Smaller button */}
                </form>
            </div>
        </div>
    );
};

export default ClientEdit;
