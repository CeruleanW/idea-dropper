import React from 'react';

export default function newcard() {
  return (
    <div>
      <ContentEditor />
      <DropButton />
      <LaterButton />
      <Tabs>
        <BoxTab />
        <AddCardTab active/>
        <BoardTab />
      </Tabs>
    </div>
  );
}
