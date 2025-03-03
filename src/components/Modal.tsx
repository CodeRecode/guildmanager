import { createPortal } from 'react-dom';

type ModalProps = {
    display: boolean,
    children?: React.ReactNode
};

function Modal(props: ModalProps) {
    if (!props.display) {
        return null;
    }
    
    return createPortal(
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-600 border border-orange-600 p-2'>
            {props.children}
        </div>,
        document.body
    );
}

export default Modal;