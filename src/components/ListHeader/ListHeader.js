import React from 'react';

require('./listHeader.scss');

const ListHeader = ({ name }) => (
  <div className="list-header">
    <h2 className="list-name">{ name }</h2>
  </div>
);

export default ListHeader;
