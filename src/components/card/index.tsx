import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props: any) {
  const { id, title, image } = props;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/blog/${id}`)}
      className="p-6 w-full rounded-lg cursor-pointer bg-slate-200 text-dark flex flex-col items-center justify-center"
    >
      <div className="w-full h-80 overflow-hidden group">
        <img
          className="w-full object-top group-hover:scale-125 duration-300 ease-in transition-transform h-full object-cover"
          src={image}
        />
      </div>
      <h3 className="mt-3 text-xl font-semibold hover:underline">{title}</h3>
    </div>
  );
}

export default Card;
