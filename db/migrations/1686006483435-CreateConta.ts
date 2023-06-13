import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateConta1686006483435 implements MigrationInterface {
    name = 'CreateConta1686006483435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "instituicao" character varying NOT NULL, "agencia" character varying NOT NULL, "conta" character varying NOT NULL, "saldo" double precision NOT NULL, "clienteId" uuid, CONSTRAINT "PK_f5a347b0829de9a7a38cf1d052f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contas" ADD CONSTRAINT "FK_2eae824c96ec37f6a3d0ad601ad" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contas" DROP CONSTRAINT "FK_2eae824c96ec37f6a3d0ad601ad"`);
        await queryRunner.query(`DROP TABLE "contas"`);
    }

}
