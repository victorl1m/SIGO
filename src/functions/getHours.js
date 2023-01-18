// returns whether at the time it is morning, afternoon or evening

export const getHours = () => {
  const hourTemp = new Date().getHours();

  if (hourTemp < 12) {
    return 'Bom dia';
  } else if (hourTemp >= 12) {
    return 'Boa tarde';
  } else if (hourTemp >= 17) {
    return 'Boa noite';
  }
};
