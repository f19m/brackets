module.exports = function check(str, cfg) {

  const getConfigIdx=function(chr){
    for (let index = 0; index < cfg.length; index++) {
      const element = cfg[index];
      if (element.indexOf(chr)>-1){
        return index;
      }
      
    }
  }


  let arrOpen=[];

  for (let index = 0; index < str.length; index++) {
    const chr = str[index];

    idxCfg = getConfigIdx(chr);
    isOpen = (cfg[idxCfg].indexOf(chr) == 0);

    if (isOpen){
      if (cfg[idxCfg][0] == cfg[idxCfg][1] && arrOpen[arrOpen.length-1]==chr){
        arrOpen.splice(arrOpen.length - 1, 1)
      }else{
        arrOpen.push(chr)
      }
    }else{
      let lastOpen = arrOpen[arrOpen.length - 1];
      if(lastOpen === undefined){
        return false;
      }
      lastOpenCfgIdx = getConfigIdx(lastOpen);
      if (lastOpenCfgIdx!=idxCfg){
        return false;
      }else{
        arrOpen.splice(arrOpen.length - 1, 1)
      }
    }
    
    
  }

  return (arrOpen.length==0);
  
}
