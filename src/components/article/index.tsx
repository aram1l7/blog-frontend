import React from "react";

function Article({
  notFound,
  article,
  html,
}: {
  notFound: boolean;
  article: any;
  html: any;
}) {
  return (
    <>
      {notFound ? (
        <div className="w-full text-center pt-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            Post was not found {":("}
          </h1>
        </div>
      ) : (
        <section className="p-10">
          <div className="flex justify-center w-1/2 mx-auto">
            <img src={article.image} />
          </div>
          <h1 className="text-2xl mt-10 xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            {article.title}
          </h1>
          <article className="mx-auto max-w-4xl mt-8">{html}</article>
        </section>
      )}
    </>
  );
}

export default Article;
