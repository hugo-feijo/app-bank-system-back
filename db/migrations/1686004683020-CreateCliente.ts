import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCliente1686004683020 implements MigrationInterface {
    name = 'CreateCliente1686004683020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."clientes_genero_enum" AS ENUM('F', 'M', 'I')`);
        await queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "data_nascimento" date, "cpf" character varying NOT NULL, "rg" character varying NOT NULL, "genero" "public"."clientes_genero_enum" DEFAULT 'I', CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clientes"`);
        await queryRunner.query(`DROP TYPE "public"."clientes_genero_enum"`);
    }

}
