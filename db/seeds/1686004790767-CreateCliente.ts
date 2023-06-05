import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateCliente1686004790767 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO clientes (nome, data_nascimento, cpf, rg, genero)
        VALUES ('Hugo Vinicius', '1998-03-10', '789.654.123-87', '5637-72', 'M'::clientes_genero_enum);      
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
          DELETE FROM clientes WHERE cpf = '789.654.123-87'
      `);
    }

}
