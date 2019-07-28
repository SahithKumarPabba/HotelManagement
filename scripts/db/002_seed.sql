USE [hotelManagementSystem]
GO

/****** userinfo seed ******/
INSERT INTO userinfo(Id, Name, Email, MobileNo, AccountCreatedDate, LastLoginDate, Role)
    VALUES
    (NEWID(), 'JACK', 'abc@xyz.com', 1234, GETDATE(), null, 'USER'),
    (NEWID(), 'JANE', 'abcd@xyz.com', 12345, GETDATE(), null, 'USER'),
    (NEWID(), 'JAMES', 'abcde@xyz.com', 123456, GETDATE(), null, 'ADMIN'),
    (NEWID(), 'SHIV', 'abcdef@xyz.com', 123456, GETDATE(), null, 'USER')

/****** hotelroominfo seed ******/
INSERT INTO hotelroominfo(Id, Name, Address, MobileNumber, AvailableAmount, RequiredPoints, LastUpdateTs)
    VALUES
    (NEWID(), 'ECONOMY', '10- STREET HYDERABAD', 123, 12, 500, GETDATE()),
    (NEWID(), 'LUXURY', '15- STREET HYDERABAD', 1234, 2, 4500, GETDATE()),
    (NEWID(), 'DELUXE', '20- STREET HYDERABAD', 12345, 7, 2500, GETDATE()),
    (NEWID(), 'DELUXE WITH AC', '25- STREET HYDERABAD', 123456, 0, 2700, GETDATE())


/****** bonuspoints seed ******/
INSERT INTO bonuspoints(ID, PointsAccumulated, PointsLeft, PointsConsumed, LastUpdatedTs)
    VALUES
        ((select Id from userinfo where Name = 'JACK'), 10000, 8000, 2000, GETDATE()),
        ((select Id from userinfo where Name = 'SHIV'), 4000, 4000, 0, GETDATE()),
        ((select Id from userinfo where Name = 'JAMES'), 0, 0, 0, GETDATE()),
        ((select Id from userinfo where Name = 'JANE'), 0, 0, 0, GETDATE())
