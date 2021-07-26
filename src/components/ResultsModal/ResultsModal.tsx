import React from 'react';
import { Modal } from "reactstrap";
import { ResultsModalProps } from '../../types/ResultsModal';
import './ResultsModal.css';

export const ResultsModal: React.FC<ResultsModalProps> = () => {
  
  return (
    <Modal centered>
      Вёрстка модального окна
    </Modal>
  );
};

export default ResultsModal;