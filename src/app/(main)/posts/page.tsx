import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostTable from "@/components/posts/PostsTable";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostsPagination />
    </>
  );
};

export default PostsPage;
