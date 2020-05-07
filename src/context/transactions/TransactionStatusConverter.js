import * as ColorPalette from '../../utils/ColorPalette';

/**
 * This function responsibles to convert transaction's status fetched from the API to its suitable colors.
 */
export const convert = status => {
  switch (status) {
    case 'SUCCESS':
      return ColorPalette.SUCCESS;
    case 'PENDING':
      return ColorPalette.COLOR_PRIMARY;
    case 'FAILED':
      return ColorPalette.FAILED;
    case 'CANCELLED':
      return ColorPalette.DARK_GREY;
    default:
      return ColorPalette.COLOR_PRIMARY;
  }
};
