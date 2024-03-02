import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { user } = useContext(AuthContext);

    useEffect(() => {
      if (!user.isAuthenticated) {
        return redirect("/login");
      }
    }, [user.isAuthenticated]);

    if (!user.isAuthenticated) {
      return null;
    }

    return <Component {...props} />;
  };
}
