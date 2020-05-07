export const searchForOccurence = ({criterias, query}) => {
  var ret = false;
  criterias.some(item => {
    query = query.toLowerCase();
    const it = `${item}`.toLowerCase();
    const bool = it.search(query) >= 0;
    if (bool) {
      ret = true;
      return;
    }
  });
  return ret;
};

export const formatCurrency = input => {
  try {
    let formattedNumber = input.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
    return formattedNumber.substring(0, formattedNumber.length - 3);
  } catch (ex) {
    console.log(ex);
    return input;
  }
};
