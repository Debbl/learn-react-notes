import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router';

export default function Detail() {
  const params = useParams();
  const location = useLocation();
  console.log(params);
  console.log(location);
  return (
    <div>
      <h2>Detail</h2>
      {params.id && <h3>{params.id}</h3>}
    </div>
  );
}
