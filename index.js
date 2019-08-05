export { isString, isObject, isFunction, isArray, isNull, isUndefined, isPromise, isNodeList, isUrl } from './judgeBasic';
export { isChineseName, isChinesePhoneNumber } from './judge';
export { trim, firstUpperCase, midlineToCamel } from './string';
export { entries } from './object';
export { randomInt } from './math';
export { nodeListToArray, functionToPromise } from './typeConversion';
export { siblingFilter, addStyles, addPreloadLink } from './dom';
export { dispatch, debounce, throttle, preventDefault } from './event';
export { isAudioPlaying, isVideoPlaying } from './media';
export { judgeOrientation, isMobile, getBrowserInfo } from './handheld';
export { CreateInstance } from './designPattern';
export { getUrlRelativeDir } from './seldom';