import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";

function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Container sx={{marginTop:'4rem'}}>{children}</Container>
    </>
  );
}

export default Layout;
