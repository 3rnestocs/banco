import React, { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import ChangePasswordForm from "../../components/ChangePasswordForm";

const Profile = () => {
  // State to toggle the visibility of ChangePasswordForm
  const [shouldShowPasswordForm, setShouldShowPasswordForm] = useState(false);

  // Handler to toggle the password form visibility
  const handleTogglePasswordForm = () => {
    setShouldShowPasswordForm(!shouldShowPasswordForm);
  };

  return (
    <>
      <ProfileHeader 
        handleChangePassword={handleTogglePasswordForm} 
      />

      {shouldShowPasswordForm && (
        <ChangePasswordForm
          onClose={() => setShouldShowPasswordForm(false)} // Close form when action is completed
        />
      )}
    </>
  );
};

export default Profile;
