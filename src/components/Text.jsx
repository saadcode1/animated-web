import "./Text.css";
import { delay, motion } from "framer-motion";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Text() {
  return (
    <div className="main-div">
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.7 }}
        className="para"
      >
        NATURAL ENVIRONMENT
      </motion.p>

      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: false, amount: 0.7 }}
        className="h1-1"
      >
        Be Safe Controls
      </motion.h1>

      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: false, amount: 0.7 }}
        className="h1-2"
      >
        Environment
      </motion.h1>

      <motion.p
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: false, amount: 0.7 }}
        className="para-1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </motion.p>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        viewport={{ once: false, amount: 0.7 }}
        className="flex-div"
      >
        <Button variant="contained">Lets Talk</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;<PlayCircleOutlineIcon />
        <div>&nbsp;&nbsp;Watch Video</div>
      </motion.div>
    </div>
  );
}