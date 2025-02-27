import { UserOrders, UserProfile } from "../../../../lib/schemas/profileSchema";

export interface ProfileMenuProps {
  userProfile: UserProfile;
  userEmail: string;
  userOrders: UserOrders;
}
