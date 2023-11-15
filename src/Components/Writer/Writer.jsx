'use client'
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'JavaScript',
          'MongoDB',
          'ExpressJs',
          'ReactJs',
          'NodeJs',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;

