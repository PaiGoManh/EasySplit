import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch('/api/auth/users', {
          credentials: 'include'
        });
        if (!res.ok) {
          throw new Error('Failed to fetch friends');
        }
        const data = await res.json();
        if (!Array.isArray(data)) {
          throw new Error('Fetched data is not an array');
        }
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/auth/deleteUser/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (res.ok) {
        console.log("User deleted successfully");
        setFriends(friends.filter(friend => friend._id !== id));
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-black">
      <div className='flex justify-between items-center mb-[5%]'>
        <h1 className="text-2xl text-black font-bold">User List</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-2 text-left">First Name</th>
              <th className="py-2 px-4 border-2 text-left">Last Name</th>
              <th className="py-2 px-4 border-2 text-left">Email</th>
              <th className="py-2 px-4 border-2 text-left">Phone Number</th>
              <th className="py-2 px-4 border-2 text-left">Username</th>
              <th className="py-2 px-4 border-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend) => (
              <tr key={friend._id}>
                <td className="py-2 px-4 border-2">{friend.firstName}</td>
                <td className="py-2 px-4 border-2">{friend.lastName}</td>
                <td className="py-2 px-4 border-2">{friend.email}</td>
                <td className="py-2 px-4 border-2">{friend.phoneNumber}</td>
                <td className="py-2 px-4 border-2">{friend.username}</td>
                <td className="py-2 px-4 border-2 flex gap-2">
                  <Link
                    to={`/profile/${friend._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    View Profile
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(friend._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FriendsList;
