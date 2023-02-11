import {
  MOBILE_BREACKPOINT_FIRST,
  MOBILE_BREACKPOINT_SECOND,
  TABLET_BREACKPOINT,
} from "./variables";

export function returnLogo(logos, innerWidth, isDropdown) {
  if (
    isDropdown &&
    innerWidth <= TABLET_BREACKPOINT &&
    innerWidth > MOBILE_BREACKPOINT_FIRST
  ) {
    return logos.tablet;
  } else if (isDropdown && innerWidth <= MOBILE_BREACKPOINT_FIRST) {
    return logos.mobile;
  } else if (innerWidth >= MOBILE_BREACKPOINT_SECOND) {
    return logos.main;
  }

  return logos.mobile;
}
