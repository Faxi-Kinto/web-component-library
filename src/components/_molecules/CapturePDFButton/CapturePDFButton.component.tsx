import React, { useEffect, useCallback, ReactNode } from 'react';
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
 *  `printContainerClass` to setup the class and style the content within it.
 *
 * @returns {JSX}
 */

type Props = {
  useWindowPrint?: boolean;
  noPrintClass?: string;
  printContainerClass?: string;
  exportTitlePrefix?: string;
  children?: ReactNode;
} & ButtonProps;

const CapturePDFButton: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    noPrintClass,
    useWindowPrint,
    printContainerClass,
    exportTitlePrefix,
    children,
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
    const pdf = new jsPDF('p', 'px');
    const width = pdf.internal.pageSize.getWidth();
    const ratio = element.clientWidth / width;
    const height = element.clientHeight / ratio;

    const canvas = await html2canvas(element, {
      scrollY: 0,
      useCORS: true,
      allowTaint: true,
      ...(printContainerClass && {
        onclone: doc => doc.body.classList.add(printContainerClass),
      }),
      ignoreElements: el =>
        noPrintClass ? el.classList.contains(noPrintClass) : false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
    pdf.save(`${exportTitlePrefix}-${new Date().toLocaleString()}`);
    URL.revokeObjectURL(imgData);
  }, [exportTitlePrefix, printContainerClass, noPrintClass]);

  const capturePDF = useCallback(() => {
    if (useWindowPrint) window.print();
    else customPrint();
  }, [useWindowPrint, customPrint]);

  const classes = classNames(['no-print', buttonProps.className]);

  return (
    <Button {...buttonProps} className={classes} onClick={capturePDF}>
      {children}
    </Button>
  );
};

CapturePDFButton.defaultProps = {
  useWindowPrint: true,
  noPrintClass: 'no-print',
  exportTitlePrefix: 'faxi-screen-capture',
  children: 'Export to PDF',
};

export default CapturePDFButton;
