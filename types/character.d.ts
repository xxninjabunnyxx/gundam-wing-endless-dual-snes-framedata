type Character = {
  name: string
  moves: Move[]
}

type Move = {
  input: string
  startup?: string
  active?: string
  recovery?: string
  hit_level?: HitLevel
  block_level?: BlockLevel
  hitstun?: string
  blockstun?: string
  tags?: Tags
}

type Tags = {
  knockdown?: boolean
  launch?: boolean
  on_the_ground?: boolean
  boost_cancelable?: boolean
  special_cancelable?: boolean
  super_cancelable?: boolean
}

enum HitLevel {
  high,
  mid,
  low,
}

type BlockLevel = {
  high?: boolean
  low?: boolean
}
