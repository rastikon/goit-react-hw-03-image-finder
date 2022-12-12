import React from 'react';

export default function LoadMore({ onClick }) {
  return (
    <div>
      <button className="Button" type="submit" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
