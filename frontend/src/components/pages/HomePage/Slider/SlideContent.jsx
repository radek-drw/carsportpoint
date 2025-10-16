import { animated } from '@react-spring/web';

const SlideContent = ({ textAnimations, text, layout }) => {
  const layoutClass = layout === 'left' ? 'text-left' : `text-${layout}`;

  return (
    <div className={layoutClass}>
      {text.map((line, index) => (
        <animated.div
          key={index}
          style={textAnimations[index]}
          className={`block ${line.className}`}
        >
          {line.content}
        </animated.div>
      ))}
    </div>
  );
};

export default SlideContent;
