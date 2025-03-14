const ResponsiveImage = ({
  sources,
  fallback,
  alt,
  lazy = false,
  className = "",
}) => {
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
      <img
        src={fallback}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
