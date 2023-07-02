export function getUniqueVanTypes(vans) {
 
  const typesSet = new Set();
 
  vans.forEach(van => {
    if (van.hasOwnProperty('type')) {
      typesSet.add(van.type)
    }
  });

  return [...typesSet];
}