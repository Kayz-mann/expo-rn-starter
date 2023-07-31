import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import theme, { Box } from './Theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: theme.colors.primary1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
  },
});

interface Props {
  width?: string | number;
  checked?: boolean;
}

const Checkbox: FC<Props> = ({ width, checked }) => {
  const widthValue = width || 23;
  const heightValue = width || 23;

  return (
    <Box
      style={[
        styles.container,
        {
          width: widthValue,
          height: heightValue,
          borderColor: checked ? theme.colors.primary : theme.colors.border,
          backgroundColor: checked ? theme.colors.primary : theme.colors.bg
        },
      ]}
    >
      {checked && <Icon name="check" color={theme.colors.bg} size={16} />}
    </Box>
  );
};

export default Checkbox;
