import React from 'react';
import { Outlet, useParams } from 'react-router';

export default function Detail() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Detail</h2>
      {params.id && <h3>{params.id}</h3>}
    </div>
  );
}
