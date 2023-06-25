import React from 'react';
import Typed from 'typed.js';

export default function () {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef("element");

  React.useEffect(() => {

    const typed = new Typed(el.current, {
      strings: ["Web Developer ", "React Devrloper", "AI", "Machine Learning", "Python", "JAVA"],
      typeSpeed: 60,
      onComplete: () => {
        typed.reset();
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

   
  //continues to type after the first sentence


  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}