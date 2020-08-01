export function isEqual(_arr$1,_arr$2)
{
    if (_arr$1 === _arr$2) return true;
    if (_arr$1 == null || _arr$2 == null) return false;
    if (_arr$1.length !== _arr$2.length) return false;

    for (var i = 0; i < _arr$1.length; ++i) {
      if (_arr$1[i] !== _arr$2[i]) return false;
    }
    return true;
}