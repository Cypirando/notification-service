import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
// import { NotificationsController } from './infra/http/controlers/notifications.controller';
// import { MailService } from './mail/mail.service';
// import { PostmarkMailService } from './mail/postmark-mail.service';
// import { SMTPMailService } from './mail/smtp-mail.service';
// import { PrismaService } from './infra/database/prisma.service';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
