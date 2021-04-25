function healthStatus(obj) {
  const { health } = obj;
  if (+health > 50) {
    return 'healthy';
  } if (+health > 14) {
    return 'wounded';
  }
  return 'critical';
}

export { healthStatus };
// let data = { name: 'Маг', health: 14 };
// console.log(healthStatus(data));
