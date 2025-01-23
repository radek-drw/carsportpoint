const ResponsiveImage = ({ sources, fallback, alt }) => {
  return (
    <picture>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          media={source.media}
          type={source.type || "image/webp"}
        />
      ))}
      <img src={fallback} alt={alt} />
    </picture>
  );
};
export default ResponsiveImage;
