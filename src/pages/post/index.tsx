import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Article from "../../components/article";
import { Spinner } from "../../components/spinner";

function Post() {
  const [article, setArticle] = useState<any>({});
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      try {
        const { data } = await getPostById(params.id!);
        console.log(data, "data");
        setArticle(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
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

  return (
    <div className="min-h-screen bg-dark text-slate-100">
      {loading ? (
        <div className="flex justify-center items-center w-full h-full fixed top-0 left-0">
          <Spinner />
        </div>
      ) : (
        <Article notFound={notFound} article={article} html={html} />
      )}
    </div>
  );
}

export default Post;
