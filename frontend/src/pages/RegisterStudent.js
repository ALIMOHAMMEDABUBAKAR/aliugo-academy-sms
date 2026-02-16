import api from "../services/api";
import React, { useState } from "react";
import { Container, Card, Button, ProgressBar, Alert } from "react-bootstrap";

import Step1Level from "../components/registrationSteps/Step1Level";
import Step2Bio from "../components/registrationSteps/Step2Bio";
import Step3Guardian from "../components/registrationSteps/Step3Guardian";
import Step4Academic from "../components/registrationSteps/Step4Academic";
import Step5Documents from "../components/registrationSteps/Step5Documents";
import Step6ReviewSubmit from "../components/registrationSteps/Step6ReviewSubmit";

export default function RegisterStudent() {
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
const handleFinalSubmit = async () => {
  setErrorMsg("");
  setSuccessMsg("");
  setLoading(true);

  try {
    const data = new FormData();

    // Level + Year
    data.append("level", formData.level);
    data.append("year", formData.year);

    // Bio Data
    data.append("surname", formData.surname);
    data.append("firstname", formData.firstname);
    data.append("othername", formData.othername);

    data.append("gender", formData.gender);
    data.append("dob", formData.dob);
    data.append("nationality", formData.nationality);
    data.append("state", formData.state);
    data.append("lga", formData.lga);
    data.append("address", formData.address);

    // NIN
    data.append("nin", formData.nin);

    // Guardian Data (IMPORTANT FIX)
    data.append("guardian_name", formData.guardianName);
    data.append("guardian_phone", formData.guardianPhone);
    data.append("guardian_alt_phone", formData.guardianAltPhone);
    data.append("guardian_relationship", formData.guardianRelationship);
    data.append("guardian_occupation", formData.guardianOccupation);
    data.append("guardian_address", formData.guardianAddress);

    // Academic Data (IMPORTANT FIX)
    data.append("class_applying", formData.classApplying);
    data.append("previous_school", formData.previousSchool);
    data.append("last_class_completed", formData.lastClassCompleted);
    data.append("department", formData.department);

    // Files (IMPORTANT FIX)
    if (formData.passportPhoto)
      data.append("passport_photo", formData.passportPhoto);

    if (formData.birthCertificate)
      data.append("birth_certificate", formData.birthCertificate);

    if (formData.testimonial)
      data.append("testimonial", formData.testimonial);

    if (formData.transferCertificate)
      data.append("transfer_certificate", formData.transferCertificate);

    if (formData.beceResult)
      data.append("bece_result", formData.beceResult);

    if (formData.immunizationCard)
      data.append("immunization_card", formData.immunizationCard);

    // Send request
    const response = await api.post("register/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setSuccessMsg("Student Registered Successfully ✅");
    console.log("Backend Response:", response.data);

  } catch (error) {
    console.log("Registration Error:", error.response?.data || error.message);
    setErrorMsg("Registration Failed ❌ Please check backend.");
  }

  setLoading(false);
};


  const [formData, setFormData] = useState({
    level: "",
    year: new Date().getFullYear(),

    surname: "",
    firstname: "",
    othername: "",
    gender: "",
    dob: "",
    nationality: "Nigeria",
    state: "",
    lga: "",
    address: "",

    nin: "",

    guardianName: "",
    guardianPhone: "",
    guardianAltPhone: "",
    guardianRelationship: "",
    guardianOccupation: "",
    guardianAddress: "",

    classApplying: "",
    previousSchool: "",
    lastClassCompleted: "",
    department: "",

    passportPhoto: null,
    birthCertificate: null,
    testimonial: null,
    transferCertificate: null,
    beceResult: null,
    immunizationCard: null,
  });
  
const updateField = (field, value) => {
  setFormData((prev) => {
    const updated = { ...prev, [field]: value };

    // If level changes away from SSS, clear NIN
    if (field === "level" && value !== "Senior Secondary") {
      updated.nin = "";
    }

    return updated;
  });
};

  const getLevelCode = () => {
    if (formData.level === "Nursery") return "NUR";
    if (formData.level === "Primary") return "PRM";
    if (formData.level === "Junior Secondary") return "JSS";
    if (formData.level === "Senior Secondary") return "SSS";
    return "XXX";
  };

  const admissionNumberPreview = `AA/${formData.year}/${getLevelCode()}/0001`;

  const validateStep = () => {
    setErrorMsg("");

    if (step === 1) {
      if (!formData.level || !formData.year) {
        setErrorMsg("Please select Education Level and Admission Year.");
        return false;
      }
    }

if (step === 2) {
  if (!formData.surname || !formData.firstname || !formData.gender || !formData.dob) {
    setErrorMsg("Please fill all required Bio Data fields.");
    return false;
  }

  if (formData.level === "Senior Secondary") {
    if (!formData.nin) {
      setErrorMsg("NIN is required for Senior Secondary School students.");
      return false;
    }

    if (formData.nin.length !== 11 || isNaN(formData.nin)) {
      setErrorMsg("NIN must be exactly 11 digits.");
      return false;
    }
  }
}

    if (step === 3) {
      if (!formData.guardianName || !formData.guardianPhone || !formData.guardianRelationship) {
        setErrorMsg("Please fill all required Guardian fields.");
        return false;
      }
    }

    if (step === 4) {
      if (!formData.classApplying) {
        setErrorMsg("Please select the Class Applying For.");
        return false;
      }

      if (
        (formData.level === "Senior Secondary" || formData.level === "Junior Secondary") &&
        !formData.department
      ) {
        setErrorMsg("Department is required for Secondary School students.");
        return false;
      }
    }

    if (step === 5) {
      if (!formData.passportPhoto) {
        setErrorMsg("Passport photo is required.");
        return false;
      }

      if (!formData.birthCertificate) {
        setErrorMsg("Birth certificate is required.");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setErrorMsg("");
    if (step > 1) setStep((prev) => prev - 1);
  };

  const progress = (step / 6) * 100;

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Header className="text-center">
          <h3 className="mb-1">Aliugo Academy - Student Registration</h3>
          <p className="mb-2 text-muted">
            Admission Number Preview: <strong>{admissionNumberPreview}</strong>
          </p>

          <ProgressBar now={progress} label={`Step ${step} / 6`} />
        </Card.Header>

        <Card.Body>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          {successMsg && <Alert variant="success">{successMsg}</Alert>}

          {step === 1 && (
            <Step1Level formData={formData} updateField={updateField} />
          )}

          {step === 2 && (
            <Step2Bio formData={formData} updateField={updateField} />
          )}

          {step === 3 && (
            <Step3Guardian formData={formData} updateField={updateField} />
          )}

          {step === 4 && (
            <Step4Academic formData={formData} updateField={updateField} />
          )}

          {step === 5 && (
            <Step5Documents formData={formData} updateField={updateField} />
          )}

          {step === 6 && (
            <Step6ReviewSubmit
              formData={formData}
              admissionNumberPreview={admissionNumberPreview}
            />
          )}
        </Card.Body>

        <Card.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>

          {step < 6 && (
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          )}

          {step === 6 && (
            <Button variant="success" onClick={handleFinalSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit Registration"}
            </Button>
          )}
        </Card.Footer>

      </Card>
    </Container>
  );
}
