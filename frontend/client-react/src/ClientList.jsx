import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientList = () => {
  const [client, setClient] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch("http://localhost:8080/clients");
      const data = await response.json();
      setClient(data);
    };
    fetchClients();
  }, []);

  const remove = async (id) => {
    await fetch(`http://localhost:8080/clients/${id}`, {
      method: 'DELETE',
    });
    setClient(client.filter(client => client.id !== id)); // Update state to remove the deleted client
  };

  return (
    <div className="container">
      <h2 className="my-4">Clients</h2>
      <table className="table-responsive-stack">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {client.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>
              <div className="btn-container">
                <button className="btn btn-primary btn-sm" onClick={() => navigate(`/clients/${client.id}`)}>Edit</button>
                <button className="btn btn-danger btn-sm ml-2" onClick={() => remove(client.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success btn-sm mt-3" onClick={() => navigate(`/clients/new`)}>Add Client</button>
    </div>
  );
};

export default ClientList;
