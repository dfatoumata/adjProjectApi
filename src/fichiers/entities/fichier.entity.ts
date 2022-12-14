import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('fichier')
export class Fichier {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pilier: string

    @Column({
        length: 4
    })
    year: string

    @Column({
        type: "decimal",
        precision: 6,
        scale: 2,
        default: 0
    })
    amount: number

}
