interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

/** Maroon-ruled editorial pull quote. */
export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure className="pull-quote">
      <blockquote className="pull-quote__text">
        <p>{quote}</p>
      </blockquote>
      {attribution && <figcaption className="pull-quote__attribution">— {attribution}</figcaption>}
    </figure>
  );
}
