import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const InteractiveShape = ({ children, ...rest }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (event, info) => {
    setPosition({
      x: info.point.x,
      y: info.point.y,
    });
  };

  return (
    <motion.div drag dragMomentum={false} onDrag={handleDrag} animate={{ x: position.x, y: position.y }}>
      <Box {...rest}>{children}</Box>
    </motion.div>
  );
};

export default InteractiveShape;
