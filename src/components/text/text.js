import React from 'react';
import {Text as ReactNativeText} from 'react-native';
import {applyFontStyleByProps} from '../../services/ui/fonts';

const Text = props => (
  <ReactNativeText
    {...props}
    style={[applyFontStyleByProps(props), props.style]}
  />
);

export default React.memo(Text);
