import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null); // State for storing user profile
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch user profile data from API or local storage
    const fetchUserProfile = async () => {
      try {
        // Replace with actual API call to fetch user data
        const response = await axios.get("http://localhost:5000/api/user-profile");
        setUserProfile(response.data); // Assuming data contains the user profile
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue fetching the profile. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };

    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner/loading component
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        User Profile
      </h1>

      {userProfile && (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6">
          {/* Profile Header (Image and Username) */}
          <div className="flex items-center space-x-4">
            <img
              src={userProfile.profileImage || "/path/to/default-image.jpg"} // Default image if no profile image
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">{userProfile.username}</h2>
              <p className="text-sm text-gray-500">{userProfile.email}</p>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-blue-600">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong className="block">Full Name:</strong>
                <p>{userProfile.fullName}</p>
              </div>
              <div>
                <strong className="block">Phone Number:</strong>
                <p>{userProfile.phoneNumber}</p>
              </div>
              <div>
                <strong className="block">City:</strong>
                <p>{userProfile.city}</p>
              </div>
              <div>
                <strong className="block">State:</strong>
                <p>{userProfile.state}</p>
              </div>
            </div>
          </div>

          {/* Social Info */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-green-600">Social Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong className="block">LinkedIn Profile:</strong>
                <a
                  href={userProfile.linkedinProfile || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {userProfile.linkedinProfile || "Not provided"}
                </a>
              </div>
              <div>
                <strong className="block">Website:</strong>
                <a
                  href={userProfile.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {userProfile.website || "Not provided"}
                </a>
              </div>
              <div>
                <strong className="block">Portfolio Link:</strong>
                <a
                  href={userProfile.portfolioLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  {userProfile.portfolioLink || "Not provided"}
                </a>
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">Professional Info</h2>
            <div>
              <strong className="block">Job Title:</strong>
              <p>{userProfile.jobTitle}</p>
            </div>
            <div>
              <strong className="block">Company Name:</strong>
              <p>{userProfile.companyName}</p>
            </div>
            <div>
              <strong className="block">Years of Experience:</strong>
              <p>{userProfile.experienceYears}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-purple-600">Additional Info</h2>
            <div>
              <strong className="block">Certifications:</strong>
              <p>{userProfile.certifications || "None"}</p>
            </div>
            <div>
              <strong className="block">Skills:</strong>
              <p>{userProfile.skills || "None"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
