import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import Input from '../Input';
import { cloneStyleOfTextArea, getBoxSize, getLineHeight } from './utils';

const STYLE_HIDDEN_TEXTAREA: React.CSSProperties = {
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  zIndex: -1000,
  top: '0',
  right: '0',
  height: 0,
  lineHeight: 1
};

const DEFAULT_SIZE_TEXTAREA = {
  linesNumber: 0,
  lineHeight: 18,
  overflow: 'initial'
};

interface TextAreaDetailsSize {
  linesNumber: number;
  lineHeight: number;
  overflow: string;
}

export const useAutoHeight = ({
  refInput
}: {
  refInput: any;
}): [React.ReactNode, TextAreaDetailsSize] => {
  const refOtherInput = useRef<any>();
  const [detailsOfSize, setDetails] = useState<TextAreaDetailsSize>(
    DEFAULT_SIZE_TEXTAREA
  );

  const hiddenOverflow = useCallback(
    () => setDetails({ ...detailsOfSize, overflow: 'hidden' }),
    [detailsOfSize, setDetails]
  );

  useEffect(() => {
    if (refInput) {
      const elementOfInput = refInput.current;
      const elementOfOther = refOtherInput.current;
      const shouldBindEvents = elementOfInput && elementOfOther;
      if (shouldBindEvents) {
        let timerId = -1;
        const handleUpdateDetails = () => {
          (elementOfOther as any).value = elementOfInput.value;

          const totalHeight = getBoxSize(elementOfOther);
          const lineHeight = getLineHeight(elementOfOther);
          const linesNumber = Math.ceil(
            (elementOfOther.scrollHeight - totalHeight) / lineHeight
          );

          cancelAnimationFrame(timerId);
          timerId = requestAnimationFrame(() => {
            setDetails({
              linesNumber,
              lineHeight,
              overflow: DEFAULT_SIZE_TEXTAREA.overflow
            });
          });
        };

        cloneStyleOfTextArea(elementOfOther, elementOfInput);

        elementOfInput.addEventListener('keydown', hiddenOverflow);
        elementOfInput.addEventListener('input', handleUpdateDetails);
        return () => {
          cancelAnimationFrame(timerId);
          elementOfInput.removeEventListener('keydown', hiddenOverflow);
          elementOfInput.removeEventListener('input', handleUpdateDetails);
        };
      }
    }
    return () => {};
  }, [refInput, refOtherInput, setDetails, hiddenOverflow]);

  const otherInput = useMemo(
    () => (
      <div style={STYLE_HIDDEN_TEXTAREA}>
        <Input aria-hidden readOnly tabIndex={-1} ref={refOtherInput} />
      </div>
    ),
    [refOtherInput]
  );

  return [otherInput, detailsOfSize];
};
