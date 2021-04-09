import React from 'react';

function PinnedCard(props) {
  return (
    <>
      <Paper>
        <Title />
        <Textbody />
        <MoreButton />
      </Paper>
    </>
  );
}

export default function board(props) {
  const { cards } = props;
  return (
    <div>
      {cards.map((card, index) => (
        <PinnedCard key={`pinned-card-${index}`} data={card} />
      ))}
      <Tabs>
        <BoxTab />
        <AddCardTab />
        <BoardTab active />
      </Tabs>
    </div>
  );
}
