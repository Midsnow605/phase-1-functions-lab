const headquarters = 42
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - headquarters);
  }
  function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
  }
  function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400){
        return 0;
    }
    else if (feet >= 400 && feet <= 2000){
        return Math.abs(feet-400)*0.02;
    }
    else if (feet >= 2000 && feet <= 2500){
        return 25;
    }
    else if (feet >= 2500){
        return 'cannot travel that far';
    }
  }