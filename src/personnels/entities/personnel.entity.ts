import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('personnel')
export class Personnel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    sexe: string;

    @Column()
    profession: string;

    @Column({ default: true})
    isActive: boolean;
}
