import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

function Headertabs() {
  return (
    <Tabs defaultActiveKey="studios" id="header-tabs" className="headertabs">
      <Tab eventKey="studios" title="Studios" id='tabs-studio' />
      <Tab eventKey="artists" title="Artists" id='tabs-artist' />
    </Tabs>
  );
}

export default Headertabs;
