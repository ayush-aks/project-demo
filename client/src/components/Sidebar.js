import { Stack } from "@mui/material";
import Footer from "./Footer";
import TopPosts from "./TopPosts";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <TopPosts />
      <Footer />
    </Stack>
  );
};

export default Sidebar;
