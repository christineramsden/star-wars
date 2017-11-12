export interface StarshipsInterface {
    name: string,
    model: string
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: string,
    crew: number,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: number,
    starship_class: string,
    pilots: Array<string>,
    films: Array<string>,
    created: Date,
    edited: Date,
    url: string
}
