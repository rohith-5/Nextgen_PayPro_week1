import { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaEdit } from 'react-icons/fa'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would update the profile in your backend
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <FaEdit className="mr-2" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src={profile.avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="input-field pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="input-field pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="input-field pl-10"
                  required
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="h-5 w-5 text-gray-400 mr-3" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="h-5 w-5 text-gray-400 mr-3" />
              <span>{profile.phone}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile