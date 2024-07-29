import React, { useState } from 'react';
import axios from 'axios';

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    preferredUsername: '',
    email: '',
    password: '',
    phoneNumber: '',
    bio: ''
  });
  const [profileBanner, setProfileBanner] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'profileBanner') {
      setProfileBanner(files[0]);
    } else {
      setProfilePicture(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append('profileBanner', profileBanner);
    formDataToSend.append('profilePicture', profilePicture);

    try {
      const response = await axios.post('', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Profile created successfully', response.data);
    } catch (error) {
      console.error('Error creating profile', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-lg h-[600px] bg-gray-900 rounded-lg shadow-md overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="p-8 flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center">Create Profile</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="preferredUsername">
                Username
              </label>
              <input
                type="text"
                name="preferredUsername"
                value={formData.preferredUsername}
                onChange={handleChange}
                placeholder="Username"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="bio">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Bio"
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="profileBanner">
                Profile Banner
              </label>
              <input
                type="file"
                name="profileBanner"
                onChange={handleFileChange}
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="profilePicture">
                Profile Picture
              </label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                className="px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
