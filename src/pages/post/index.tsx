import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

function Post() {
  const [article, setArticle] = useState<any>({});
  const [notFound, setNotFound] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchArticle() {
      try {
        const { data } = await getPostById(params.id!);
        console.log(data, "data");
        setArticle(data);
      } catch (e) {
        setNotFound(true);
      }
    }
    fetchArticle();
  }, []);

  const options = {
    renderText: (text: any) => {
      return text
        .split("\n")
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: any) => (
        <ol className="list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
    },
  };

  let html: any = documentToReactComponents(article.description, options);
  console.log(html, "html");

  return (
    <div className="min-h-screen bg-dark text-slate-100">
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
    </div>
  );
}

export default Post;
