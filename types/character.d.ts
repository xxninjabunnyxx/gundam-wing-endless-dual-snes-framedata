type Character = {
name: string
moves: Move[]
}

type Move = {
    startup: string,
    active: string,
    recovery: string,
    hitstun: string,
    blockstun: string,
    advantageOnHit: string,
    advantageOnBlock: string,
    properties: Property[],
}

enum Property {

}