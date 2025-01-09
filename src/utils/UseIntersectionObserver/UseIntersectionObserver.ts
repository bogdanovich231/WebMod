export function useIntersectionObserver(
  targetClassName: any,
  visibleClassName: any,
  childSelector = 'img, p, h2',
  threshold = 0.1
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClassName);

          const childElements = entry.target.querySelectorAll(childSelector);
          childElements.forEach((el) => el.classList.add(visibleClassName));
        }
      });
    },
    { threshold }
  );

  const containers = document.querySelectorAll(`.${targetClassName}`);
  containers.forEach((container) => {
    observer.observe(container);
  });

  return () => {
    containers.forEach((container) => {
      observer.unobserve(container);
    });
  };
}
