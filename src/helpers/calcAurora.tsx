const calcAurora = (data: any) => {
  const ace = data.ace;
  let bzCalc: any = 0;
  let kpCalc: any = 0;
  let speedCalc: any = 0;
  let denCalc: any = 0;

  bzCalc = 100 - ((+ace.bz + 40) * 100) / 80;
  kpCalc = (+ace.kp * 100) / 9;
  speedCalc = ((+ace.speed + 250) * 100) / 2250;
  denCalc = +ace.density;
  const probabilityCalc: any =
    bzCalc * 0.25 + kpCalc * 0.25 + speedCalc * 0.25 + denCalc * 0.25;
  return probabilityCalc.toFixed(2);
};

export default calcAurora;
