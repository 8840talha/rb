import { useInView } from 'react-intersection-observer';

const useProductInView = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return [ref, inView];
};

export default useProductInView;
