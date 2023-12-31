import React from 'react';
import { useParams } from 'react-router-dom';

export function ProductDetail() {
  
  const { id } = useParams();
  return (
    <div>Product detail page-{id}</div>
  );
}
