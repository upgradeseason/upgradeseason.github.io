function emailParts(address) {
  let lowerCaseAddress = address.toLowerCase();
  return lowerCaseAddress.split("@");
}
