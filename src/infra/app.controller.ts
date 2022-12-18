import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
// import { MailService } from './mail/mail.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notifications-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly primas: PrismaService) {}

  @Get()
  list() {
    return this.primas.notification.findMany();
  }
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const {recipientId, content, category} = body
    await this.primas.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
