import './sass/index.scss'

function bracketsStringParser(str) {
  const t1 = /\(.*\)\{.*\}\[.*\]/g;
  const t2 = /\(\[{.*}\]\)/g;
  if (str.match(t1) || str.match(t2)) {
    return true;
  }
  return false;
}

function convertBackSpace(str) {
  let transformedString = str.replace(/\#/g, '\b');
  while(transformedString.match(/\w\x08/)){
    transformedString = transformedString.replace(/\w\x08/g,"");
  }
  return transformedString;
}
