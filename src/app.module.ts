import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { HttpModule } from './infra/http.module';
// import { MailService } from './mail/mail.service';
// import { PostmarkMailService } from './mail/postmark-mail.service';
// import { SMTPMailService } from './mail/smtp-mail.service';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
