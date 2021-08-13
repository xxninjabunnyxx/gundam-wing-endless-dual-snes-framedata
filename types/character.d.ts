type Character = {
  name: !String
  moves: Move[]
}

type Move = {
  input: !String
  startup: !String
  active: !String
  recovery: !String
  hit_level: !HitLevel
  block_level: !BlockLevel
  hitstun: !String
  blockstun: !String
  advantage_on_hit: !String
  advantage_on_block: !String
  tags: !Tags
}

type Tags = {
  knockdown: !Boolean
  launch: !Boolean
  on_the_ground: !Boolean
  boost_cancelable: !Boolean
  special_cancelable: !Boolean
  super_cancelable: !Boolean
}

enum HitLevel {
  high,
  mid,
  low
}

type BlockLevel = {
  high: !Boolean
  low: !Boolean
}