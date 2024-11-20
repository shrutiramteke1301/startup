import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StartupRegistration = () => {
  const { register, handleSubmit } = useForm();
  const [fundingProvided, setFundingProvided] = useState(""); // State for funding question
  const navigate = useNavigate(); // For navigation

  const onSubmit = async (data) => {
    // Generate a 6-character alphanumeric ID
    const generateRandomId = () => {
      return Math.random().toString(36).substring(2, 8).toUpperCase();
    };

    const registrationId = generateRandomId();
    const registrationData = { ...data, registrationId };

    try {
      // Send the registration data to the backend
      const response = await axios.post("http://localhost:5000/api/register-startup", registrationData);
      console.log(response.data);
      
      // Display success popup
      Swal.fire({
        title: "Registration Successful!",
        text: `Your registration ID is: ${registrationId}`,
        icon: "success",
        confirmButtonText: "Proceed",
      }).then(() => {
        navigate("/CommonPage");
      });
    } catch (error) {
      console.error("Error in registration:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue with the registration. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Startup Registration Form
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        {/* Contact Info */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name of the Founder *</label>
              <input
                type="text"
                {...register("founderName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter founder's name"
              />
            </div>
            <div>
              <label className="block font-semibold">Email *</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block font-semibold">Contact Number *</label>
              <input
                type="tel"
                {...register("contactNumber", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="block font-semibold">City *</label>
              <input
                type="text"
                {...register("city", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter city"
              />
            </div>
            <div>
              <label className="block font-semibold">State *</label>
              <input
                type="text"
                {...register("state", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter state"
              />
            </div>
            <div>
              <label className="block font-semibold">Portfolio Link</label>
              <input
                type="url"
                {...register("portfolioLink")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter portfolio link"
              />
            </div>
            <div>
              <label className="block font-semibold">LinkedIn Profile</label>
              <input
                type="url"
                {...register("linkedinProfile")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter LinkedIn profile link"
              />
            </div>
          </div>
        </div>

        {/* Startup Info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Startup Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Name of the Startup *</label>
              <input
                type="text"
                {...register("startupName", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter startup name"
              />
            </div>
            <div>
              <label className="block font-semibold">Date of Establishment *</label>
              <input
                type="date"
                {...register("establishmentDate", { required: true })}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold">Domain *</label>
              <select
                {...register("domain", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Domain</option>
                <option>Mental Health</option>
                <option>Preventive Healthcare</option>
                <option>Data Analytics and Big Data</option>
                <option>Augmented Reality (AR) and Virtual Reality (VR)</option>
                <option>Blockchain and Web3</option>
                <option>Artificial Intelligence and Machine Learning</option>
                <option>Eco-Friendly Products</option>
                <option>Waste Management and Recycling</option>
                <option>Renewable Energy</option>
                <option>Local and Rural Development</option>
                <option>Interactive Games with Social Impact</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold">Stage *</label>
              <select
                {...register("stage", { required: true })}
                className="w-full border rounded px-4 py-2"
              >
                <option value="">Select Stage</option>
                <option>Preincubation</option>
                <option>Incubation</option>
                <option>Marketing</option>
                <option>Scaling</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block font-semibold">Description *</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter mission, vision, goals"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold">Startup Website Link</label>
              <input
                type="url"
                {...register("websiteLink")}
                className="w-full border rounded px-4 py-2"
                placeholder="Enter startup website link"
              />
            </div>
            <div>
              <label className="block font-semibold">Target Sector</label>
              <input
                type="text"
                {...register("targetSector")}
                className="w-full border rounded px-4 py-2"
                placeholder="B2B, B2C, specific niches"
              />
            </div>
          </div>
        </div>

        {/* Financial Info */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Financial Info</h2>
          <div>
            <label className="block font-semibold">Revenue</label>
            <input
              type="number"
              {...register("revenue")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter revenue"
            />
          </div>
          <div>
            <label className="block font-semibold">Cost of Goods Sold (COGS)</label>
            <input
              type="number"
              {...register("cogs")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter COGS"
            />
          </div>
          <div>
            <label className="block font-semibold">Operating Expenses</label>
            <input
              type="number"
              {...register("operatingExpenses")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter operating expenses"
            />
          </div>
          <div>
            <label className="block font-semibold">Taxes</label>
            <input
              type="number"
              {...register("taxes")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter taxes"
            />
          </div>
          <div>
            <label className="block font-semibold">Interest</label>
            <input
              type="number"
              {...register("interest")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter interest"
            />
          </div>
          <div>
            <label className="block font-semibold">Customers at Start</label>
            <input
              type="number"
              {...register("customersAtStart")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of customers at start"
            />
          </div>
          <div>
            <label className="block font-semibold">Customers at End</label>
            <input
              type="number"
              {...register("customersAtEnd")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of customers at end"
            />
          </div>
          <div>
            <label className="block font-semibold">New Customers Acquired</label>
            <input
              type="number"
              {...register("newCustomersAcquired")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter new customers acquired"
            />
          </div>
          <div>
            <label className="block font-semibold">Total Revenue</label>
            <input
              type="number"
              {...register("totalRevenue")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter total revenue"
            />
          </div>
          <div>
            <label className="block font-semibold">Number of Orders</label>
            <input
              type="number"
              {...register("numberOfOrders")}
              className="w-full border rounded px-4 py-2"
              placeholder="Enter number of orders"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartupRegistration;
