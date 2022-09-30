import { Module } from "@nestjs/common"
import DB from "@db/connect"
import { UsersModule } from "@api/users/users.module"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [DB, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
