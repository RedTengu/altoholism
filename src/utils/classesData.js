const classesData = [
  {
    nameRu: 'Воин',
    nameEn: 'Warrior',
    descriptionRu: '',
    type: ['melee'],
    roles: ['tank', 'damage']
  },
  {
    nameRu: 'Паладин',
    nameEn: 'Paladin',
    descriptionRu: '',
    type: ['melee'],
    roles: ['tank', 'damage', 'healer']
  },
  {
    nameRu: 'Охотник',
    nameEn: 'Hunter',
    descriptionRu: 'Охотники бьют врага на расстоянии или в ближнем бою. Они используют различных питомцев в зависимости от ситуации. Их оружие действенно и вблизи, и издалека. Кроме того, охотники очень подвижны и используют различные ловушки для контроля противника.',
    type: ['range', 'melee'],
    roles: ['damage']
  },
  {
    nameRu: 'Разбойник',
    nameEn: 'Rogue',
    descriptionRu: 'Разбойники часто нападают из теней, начиная бой комбинацией свирепых ударов. В затяжном бою они изматывают врага тщательно продуманной серией атак, прежде чем нанести решающий удар. Разбойнику следует внимательно отнестись к выбору противника, чтобы оптимально использовать тактику, и не упустить момент, когда надо спрятаться или бежать, если ситуация складывается не в их пользу.',
    type: ['melee'],
    roles: ['damage']
  },
  {
    nameRu: 'Жрец',
    nameEn: 'Priest',
    descriptionRu: '',
    type: ['range'],
    roles: ['healer', 'damage']
  },
  {
    nameRu: 'Шаман',
    nameEn: 'Shaman',
    descriptionRu: '',
    type: ['range', 'melee'],
    roles: ['damage', 'healer']
  },
  {
    nameRu: 'Маг',
    nameEn: 'Mage',
    descriptionRu: 'Маги уничтожают врагов заклинаниями школ огня, льда и тайной магии. Они не носят доспехов и уязвимы в ближнем бою. Умные маги при помощи заклинаний удерживают врага на расстоянии или вовсе обездвиживают его.',
    type: ['range'],
    roles: ['damage']
  },
  {
    nameRu: 'Чернокнижник',
    nameEn: 'Warlock',
    descriptionRu: 'Чернокнижники уничтожают ослабленного противника, сочетая увечащие болезни, темную магию и разрушительную энергию скверны. Находясь под защитой своих демонов, чернокнижники разят врага на расстоянии. Физически слабые колдуны не могут носить тяжелую броню, поэтому подставляют под вражеские удары своих слуг.',
    type: ['range'],
    roles: ['damage']
  },
  {
    nameRu: 'Монах',
    nameEn: 'Monk',
    descriptionRu: '',
    type: ['melee'],
    roles: ['tank', 'damage', 'healer']
  },
  {
    nameRu: 'Друид',
    nameEn: 'Druid',
    descriptionRu: '',
    type: ['melee', 'range'],
    roles: ['tank', 'damage', 'healer']
  },
  {
    nameRu: 'Охотник на демонов',
    nameEn: 'Demon Hunter',
    descriptionRu: '',
    type: ['melee'],
    roles: ['tank', 'damage']
  },
  {
    nameRu: 'Рыцарь смерти',
    nameEn: 'Death Knight',
    descriptionRu: '',
    type: ['melee'],
    roles: ['tank', 'damage']
  },
  {
    nameRu: 'Пробудитель',
    nameEn: 'Evoker',
    descriptionRu: '',
    type: ['range'],
    roles: ['damage', 'healer']
  },
]