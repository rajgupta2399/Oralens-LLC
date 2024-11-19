"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function RegisteredPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(storedPatients);
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Registered Patients</h1>
      {/* Corrected Link usage */}
      <Link href="/register" className="text-blue-500 hover:underline mb-4 inline-block">
        Register Another Patient
      </Link>
      {patients.length === 0 ? (
        <p>No patients registered yet.</p>
      ) : (
        <ul className="space-y-2">
          {patients.map((patient, index) => (
            <li
              key={index}
              className="p-3 border border-gray-300 rounded shadow-sm"
            >
              <p>
                <strong>Name:</strong> {patient.name}
              </p>
              <p>
                <strong>Age:</strong> {patient.age}
              </p>
              <p>
                <strong>File:</strong> {patient.fileName}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegisteredPatients;
