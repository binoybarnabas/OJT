import UserCard from "@/components/UserCard";
import { getData } from "../utils";
import { CircularProgress } from "@mui/material";

const ServerSideRender = async () => {
  
    const userData = await getData();

    return ( 
        <>
        {userData.length === 0 ? (
          <CircularProgress />
        ) : (
          userData.map((user:any) => (
            <UserCard key={user.id} user={user} />
          ))
        )}
      </>
      );
}
 
export default ServerSideRender;