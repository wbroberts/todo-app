const sortIncomplete = array => {
  array.sort((a, b) => {
    if (!a.completed && b.completed) return -1;
    else if (!b.completed && a.completed) return 1;
    else return 0;
  });
  return array;
};

export default sortIncomplete;
