import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from './Backdrop.module.scss';

interface BackdropProps {
    children: React.ReactNode;
    onClick: () => void
}

const Backdrop = ({ children, onClick }: BackdropProps) => {

    return (
        <motion.div
            onClick={onClick}
            className={classNames(styles["backdrop"])}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;