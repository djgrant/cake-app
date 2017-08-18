import React from "react";

// Highlight text matching a search term without relying on dangerouslySetHTML
// A naive implemenation loosely inspired by highlight-words-core
// With more time I'd treat mutliple search words as OR search terms

function getChunks(text, search) {
  if (typeof search !== "string" || search.length < 1 || text.length < 1) {
    return [{ start: 0, end: text.length }];
  }

  const regex = new RegExp(search, "gi");
  const chunks = [];
  let match;

  // collect highlighted chunks
  while ((match = regex.exec(text))) {
    chunks.push({
      start: match.index,
      end: regex.lastIndex
    });
  }

  // fill gaps
  let i = 1;
  while (i < chunks.length) {
    chunks.splice(i, 0, {
      start: chunks[i - 1].end,
      end: chunks[i].start
    });
    i = i + 2;
  }

  if (!chunks.length) {
    return [{ start: 0, end: text.length }];
  }

  // add trailing non-match
  if (chunks[chunks.length - 1].end < text.length) {
    chunks.push({
      start: chunks[chunks.length - 1].end,
      end: text.length
    });
  }

  // ensure first chunk is not a match
  chunks.unshift({
    start: 0,
    end: Math.max(chunks[0].start, 0)
  });

  return chunks;
}

const Highlighted = ({
  search,
  children: text,
  highlightStyles = {},
  highlightClassName,
  ...props
}) => (
  <span {...props}>
    {getChunks(text, search).map((chunk, i) => {
      let slice = text.slice(chunk.start, chunk.end);
      return i % 2 ? (
        <span key={i} className={highlightClassName} style={highlightStyles}>
          {slice}
        </span>
      ) : (
        <span key={i}>{slice}</span>
      );
    })}
  </span>
);

export default Highlighted;
