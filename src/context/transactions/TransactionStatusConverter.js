import * as ColorPalette from '../../utils/ColorPalette';

export const convert = status => {
  switch (status) {
    case 'SUCCESS':
      return ColorPalette.SUCCESS;
    case 'PENDING':
      return ColorPalette.COLOR_PRIMARY;
    case 'FAILED':
      return ColorPalette.FAILED;
    default:
      return ColorPalette.COLOR_PRIMARY;
  }
};
