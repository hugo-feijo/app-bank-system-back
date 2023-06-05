import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { GeneroEnum } from './genero.enum';

export class ClienteDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  dataNascimento: Date;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  rg: string;

  @IsEnum(GeneroEnum)
  @IsOptional()
  genero: GeneroEnum;
}
