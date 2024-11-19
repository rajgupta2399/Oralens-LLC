"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function PatientRegister() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.file) {
      alert("Please fill in all fields.");
      return;
    }

    const newPatient = {
      name: formData.name,
      age: formData.age,
      fileName: formData.file.name,
    };

    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    const updatedPatients = [...storedPatients, newPatient];
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    // Redirect to Registered Patients page
    router.push("/registered");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Patient Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="age">
            Age
          </label>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="" disabled>
              Select age
            </option>
            {[...Array(100).keys()].map((age) => (
              <option key={age + 1} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="file">
            File Upload
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PatientRegister;
