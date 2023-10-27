import React, { useEffect, useState } from "react";
import { getPosts } from "../../api";
import Card from "../card";
import { Spinner } from "../spinner";

function List() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPostData() {
      setLoading(true);
      const { data } = await getPosts();

      setPosts(data);
      setLoading(false);
    }
    getPostData();
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="lg:max-w-7xl lg:mx-auto">
          <div className="mt-8 px-10 xl:px-0 xs:grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 select-none place-items-center
          grid blog-list">
            {posts.map((ele: any) => {
              return <Card key={ele.id} {...ele} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default List;
