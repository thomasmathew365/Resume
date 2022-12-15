import classNames from 'classnames';
import { motion } from 'framer-motion';

import Backdrop from '../Backdrop';
import styles from './Modal.module.scss';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

interface ModalProps {
    children: React.ReactNode;
    handleClose: () => void;
    modalOpen: boolean;
}


const Modal = ({ handleClose, children, modalOpen }: ModalProps) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={classNames(styles["modal"])}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {children}
            </motion.div>
        </Backdrop>
    );
};


export default Modal;