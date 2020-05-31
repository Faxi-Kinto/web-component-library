import XRegExp from 'xregexp';

export default {
  firstName: XRegExp("^[\\p{L}\\p{M}0-9 \t'’-]*$"),
  lastName: XRegExp("^[\\p{L}\\p{M}0-9 \t'’-]*$"),
  displayName: /^(?=.*[a-zA-Z\u00c0-\u017e])[a-zA-Z\u00c0-\u017e0-9_ .()+-]+$/,
  workEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^([0-9()/+ -*#]*)$/,
  passwordLowerCase: XRegExp('[\\p{Ll}\\p{M}]'),
  passwordUpperCase: XRegExp('[\\p{Lu}\\p{M}]'),
  hasNumber: /[0-9]+/,
  postCode: /^[A-Za-z0-9 \t-]*$/,
  address: XRegExp("^[\\p{L}\\p{M}0-9\n\t '-.,#°/]*$"),
  city: XRegExp("^[\\p{L}\\p{M} \t'-]*$"),
  communityName: XRegExp("^[\\p{L}\\p{M}0-9_+-.,&`'() @ \t]*$"),
};
