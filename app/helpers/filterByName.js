 const filterByName = (name, characters) => {
    let nameValue = name
    if(name === 'Ratts Tyerel'){
        nameValue =  'Ratts Tyerell'
    }
    return characters.filter(character => character.name == nameValue);
  };

  export default filterByName