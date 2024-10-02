import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

// Function for animating the number (package used spring)
function NumberAnimation({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const OrgsANDprojects = ({ orglength }) => {
  const [animatedLength, setAnimatedLength] = useState(0);

  useEffect(() => {
    setAnimatedLength(orglength);
    console.log(orglength);
  }, [orglength]);

  return (
    <div className='h-auto bg-organization-button'>
      <h1 className='flex justify-center items-center text-8xl px-6 py-12 font-[Nasa]'>
        Organization and Projects
      </h1>
      <div className='flex flex-row justify-center items-center pt-6 pb-10 text-white bold text-center gap-60'>
        <div className='bg-[#909090] p-32 rounded-3xl '>
          <h1 className='text-7xl'>
            <NumberAnimation n={animatedLength} />
          </h1>
          <h4 className='text-3xl font-[Neue]'>Organizations</h4>
        </div>
        <div className='bg-[#909090] p-32 rounded-3xl '>
          <h1 className='text-7xl'>
            <NumberAnimation n={0} />
          </h1>
          <h4 className='text-3xl font-[Founder]'>Projects</h4>
        </div>
      </div>
    </div>
  );
};

export default OrgsANDprojects;
