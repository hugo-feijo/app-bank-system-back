import {
  Controller,
  Get,
} from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Get('total-cartao')
  findTotalFatura(): Promise<number> {
    return this.homeService.findTotalFatura();
  }

  
  @Get('total-conta')
  findTotalConta(): Promise<number> {
    return this.homeService.findTotalConta();
  }
}
