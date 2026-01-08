"use client";

import IconGradient from "@/components/icon-gradient"
import { GrDiamond } from "react-icons/gr"
import { useAuth } from "@/providers/auth-provider"

const UserBalance = () => {
  const { user_balance } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <GrDiamond className="w-6 h-6 font-bold block" style={{ stroke: "url(#icon-gradient)" }} />
      <span
        className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block"
      >
        {user_balance}
      </span>
      <IconGradient />
    </div>
  )
}

export default UserBalance;