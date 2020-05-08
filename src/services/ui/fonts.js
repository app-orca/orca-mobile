import fontStyles from 'styles/fonts';

/**
 * Represent diferent types of font types in array.
 */
const fontTypes = ['h1', 'h2', 'h3', 'h4', 'p', 'bold', 'text', 'black'];

/**
 * Return font styles by the provided props
 * @param props Props of the component
 */
export const applyFontStyleByProps = props => {
  const propsKeys = Object.keys(props);

  const found =
    fontTypes.find(fontType => propsKeys.includes(fontType)) || 'text';

  return fontStyles[found];
};
