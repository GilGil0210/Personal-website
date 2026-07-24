const { scrollYProgress } = useScroll();

return (
  <motion.div style={{ scaleX: scrollYProgress, originX: 0 }} />  
)