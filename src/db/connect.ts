import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "@db/entities/User"

export default TypeOrmModule.forRoot({
  type: "postgres",
  host: "95.214.63.16",
  port: 5432,
  username: "postgres",
  password: "7411",
  database: "test",
  entities: [User],
  subscribers: [],
  migrations: [],
  synchronize: true,
  logging: true
})
