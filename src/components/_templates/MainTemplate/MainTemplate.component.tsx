import React from 'react';
import * as Styled from '../../_layouts/GridView';
import ParallaxBackground from '../../_atoms/ParallaxBackground';

/**
 * @name MainTemplate
 *
 * @returns {JSX}
 */

export type MainTemplateProps = {
  children: React.ReactNode;
  parallaxUrl: string;
  header?: JSX.Element;
  footer?: JSX.Element;
  footerBackgroundColor?: string;
};

const MainTemplate: React.FC<MainTemplateProps> = (
  props: MainTemplateProps
): JSX.Element => {
  const {
    children,
    header,
    footer,
    footerBackgroundColor,
    parallaxUrl,
  } = props;

  return (
    <Styled.GridView
      className="template"
      footerBackgroundColor={footerBackgroundColor}
    >
      {header && <div className="template__header">{header}</div>}

      <ParallaxBackground url={parallaxUrl} className="template__hero-image" />

      <div className="template__children">
        <div className="template__children__background">{children}</div>
      </div>

      <div className="template__footer-background"></div>

      {footer &&
        React.cloneElement(footer, {
          className: 'template__footer',
        })}
    </Styled.GridView>
  );
};

export default MainTemplate;
