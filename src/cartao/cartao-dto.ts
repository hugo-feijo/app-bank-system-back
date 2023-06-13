import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ClienteDto } from 'src/cliente/cliente-dto';

export class CartaoDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Type(() => ClienteDto)
  @ValidateNested()
  cliente: ClienteDto;

  @IsNumber()
  @IsNotEmpty()
  limite: number;

  @IsNumber()
  @IsNotEmpty()
  valorProximaFatura: number;

  @IsNumber()
  @IsNotEmpty()
  vencimentoFatura: number;

  @IsNumber()
  @IsNotEmpty()
  diaFechamento: number;
}
