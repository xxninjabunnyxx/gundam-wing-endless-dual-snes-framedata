import { promises as fs } from "fs"
import { camelCase } from "lodash"
import yaml from "js-yaml"
import Deathscythe from "./data/deathscythe"
import Epyon from "./data/epyon"
import Heavyarms from "./data/heavyarms"
import Mercurius from "./data/mercurius"
import Sandrock from "./data/sandrock"
import Shenlong from "./data/shenlong"
import Tallgeese from "./data/tallgeese"
import Vayeate from "./data/vayeate"
import Wing from "./data/wing"
import WingZero from "./data/wingZero"

const characters: Character[] = [
  Deathscythe,
  Epyon,
  Heavyarms,
  Mercurius,
  Sandrock,
  Shenlong,
  Tallgeese,
  Vayeate,
  Wing,
  WingZero,
]

const exportJson = async (character: Character): Promise<void> => {
  try {
    await fs.writeFile(
      `./data/json/${camelCase(character.name)}.json`,
      JSON.stringify(character)
    )
  } catch (error) {
    console.log(error)
  }
}

const exportYaml = async (character: Character): Promise<void> => {
  try {
    await fs.writeFile(
      `./data/yaml/${camelCase(character.name)}.yaml`,
      yaml.dump(character)
    )
  } catch (error) {
    console.log(error)
  }
}

const main = async (characters: Character[]): Promise<void> => {
  characters.map(async (character) => {
    await exportJson(character)
    await exportYaml(character)
  })
}

main(characters)
