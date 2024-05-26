import {Test, TestingModule} from "@nestjs/testing";
import {getModelToken} from "@nestjs/mongoose";

import {UserService} from "./user.service";


describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    function mockUserModel(this: any, dto: any) {
      this.data = dto;
      this.save = () => {
        return this.data;
      };
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken("User"),
          useValue: mockUserModel,
        },
        UserService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
