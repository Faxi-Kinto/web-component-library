import React, { useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from '../../_atoms/Button';
import { ButtonProps } from '../../_atoms/Button/Button.component';
import classNames from 'classnames';

/**
 * @name CapturePDFButton
 *
 *  Exports the page to PDF (page that is printed is where the button is).
 *  Set `useWindowPrint` to false to use libraries `html2canvas` & `jsPDF`.
 *  With `useWindowPrint` set to `true`(which is default) use media queries
 *  to style the printed UI. Otherwise, when `useWindowPrint` is `false`, use
 *
 * @returns {JSX}
 */

type Props = {
  useWindowPrint?: boolean;
  noPrintClass?: string;
} & ButtonProps;

const CapturePDFButton = (props: Props) => {
  const {
    noPrintClass = 'no-print',
    useWindowPrint = true,
    ...buttonProps
  } = props;

  useEffect(() => {
    let noPrintStyle: HTMLStyleElement;

    if (useWindowPrint) {
      noPrintStyle = document.createElement('style');
      noPrintStyle.innerHTML = `
        @media print {
          body .${noPrintClass} {
            display: none;
          }
        }
      `;
      document.head.appendChild(noPrintStyle);
    }

    return () => {
      if (noPrintStyle) {
        document.head.removeChild(noPrintStyle);
      }
    };
  }, [useWindowPrint, noPrintClass]);

  const customPrint = useCallback(async () => {
    const element = document.body;
    if (element) {
      const pdf = new jsPDF('p', 'px');
      const width = pdf.internal.pageSize.getWidth();
      const ratio = element.clientWidth / width;
      const height = element.clientHeight / ratio;

      const canvas = await html2canvas(element, {
        scrollY: 0,
        useCORS: true,
        allowTaint: true,
        ignoreElements: el => el.classList.contains(noPrintClass),
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      pdf.addImage(imgData, 'JPEg', 0, 0, width, height);
      pdf.save(`kinto-platform-screen-capture-${new Date().toLocaleString()}`);
      URL.revokeObjectURL(imgData);
    }
  }, [noPrintClass]);

  const capturePDF = useCallback(() => {
    if (useWindowPrint) window.print();
    else customPrint();
  }, [useWindowPrint, customPrint]);

  const classes = classNames(['no-print', buttonProps.className]);

  return (
    <Button {...buttonProps} className={classes} onClick={capturePDF}>
      Export to pdf
    </Button>
  );
};

export default CapturePDFButton;
