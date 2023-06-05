import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';

@Entity({ name: 'clientes' })
export class ClienteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true,
  })
  genero: GeneroEnum;
}
