import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";
import { useProfile } from "../../hooks/profile/useProfile";
import { profileVariants } from "./Profile.variants";

import ProfileBanner from "./components/ProfileBanner/ProfileBanner.component";
import ProfileOrders from "./components/ProfileOrders/ProfileOrders.component";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu.components";

export default function Profile() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const {
    userEmail = "",
    userProfile,
    userOrders = [],
    isLoading,
  } = useProfile();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/account/login");
    }
  }, [isLoggedIn, navigate]);

  if (isLoading || !userProfile) {
    return <div className="h-screen grid place-content-center">Loading...</div>;
  }

  return (
    <>
      <motion.section
        className="pt-[100px] max-w-[1440px] mx-auto px-4"
        {...profileVariants.profile}
      >
        <ProfileBanner userName={userProfile.first_name} />

        <ProfileOrders userOrders={userOrders} />

        <ProfileMenu
          userProfile={userProfile}
          userOrders={userOrders}
          userEmail={userEmail}
        />
      </motion.section>
    </>
  );
}
