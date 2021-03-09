import { useState } from "react";

export default function useRealmUser(realmInstance) {
  const [user, setUser] = useState(
    realmInstance.currentUser?._profile.data.email
      ? {
          email: realmInstance.currentUser._profile.data.email,
          id: realmInstance.currentUser.id,
        }
      : false
  );
  return [user, setUser];
}
