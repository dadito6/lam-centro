import React from 'react';
import twemoji from 'twemoji';

const Emoji = ({ children }: { children: React.ReactNode }) => {
  const text = React.Children.toArray(children).join('');
  const parsed = twemoji.parse(text, {
    folder: 'svg',
    ext: '.svg',
    className: 'emoji'
  });

  return <span dangerouslySetInnerHTML={{ __html: parsed }} />;
};

export default Emoji;