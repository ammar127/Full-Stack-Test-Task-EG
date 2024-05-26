import * as path from "path";
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticMiddleware } from "@nest-middlewares/serve-static";
import { MorganModule } from "nest-morgan";

import { LoggerMiddleware } from "./common/middleware/logger.middleware";
import { GlobalAccessLogger } from "./common/accessLogger";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import config from "./config";
import { PingModule } from "./ping/ping.module";

@Module({
  imports: [
    AuthModule,
    MorganModule,
    MongooseModule.forRoot(process.env.MONGO_URL!),
    UserModule,
    PingModule
  ],
  providers: config.isTest() ? undefined : [GlobalAccessLogger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    ServeStaticMiddleware.configure(
      path.resolve(__dirname, "..", "public"),
      config.static,
    );
    consumer.apply(ServeStaticMiddleware).forRoutes("public");

    if (!config.isTest()) {
      consumer.apply(LoggerMiddleware).forRoutes("api");
    }
    consumer.apply(LoggerMiddleware).forRoutes("api/v1");

  }
}
